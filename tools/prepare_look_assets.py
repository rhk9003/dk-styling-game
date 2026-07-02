from __future__ import annotations

import json
import shutil
from pathlib import Path

from PIL import Image, ImageOps


CANDIDATE_DIR = Path("output/candidates")
REFERENCE_DIR = Path("output/references")
OUTPUT_DIR = Path("assets/looks")
SOURCE_DIR = OUTPUT_DIR / "sources"
DETAIL_DIR = Path("assets/shoe-details")
DATA_DIR = Path("assets/data")

MODEL_STYLES = [
    {
        "id": "japanese-fresh",
        "label": "日系清新",
        "headline": "棉麻、柔色與自然層次，適合清爽日常",
    },
    {
        "id": "korean-minimal",
        "label": "韓系簡約",
        "headline": "低飽和線條與俐落比例，乾淨有質感",
    },
    {
        "id": "sweet-cool",
        "label": "甜酷休閒",
        "headline": "甜感單品配一點俐落，咖啡廳與約會都能成立",
    },
    {
        "id": "sporty",
        "label": "運動感",
        "headline": "輕戶外、健走與城市散步的舒服穿搭",
    },
    {
        "id": "resort",
        "label": "優雅度假",
        "headline": "明亮、放鬆、適合旅行和假日散步",
    },
]

PRODUCTS = [
    {
        "id": "10755462",
        "code": "89-5160-50",
        "url": "https://www.dk-shoes.com.tw/SalePage/Index/10755462",
        "shortName": "經典空氣小白鞋",
        "color": "白色",
        "category": "空氣鞋",
        "price": 3480,
        "image": "assets/shoes/89-5160-50.webp",
        "detailImage": "assets/shoe-details/89-5160-50-canonical-correct-fit.webp",
        "features": [
            "低軟後跟與可後踩結構",
            "素面小白鞋外型乾淨好搭",
            "厚平底與車線細節修飾日常穿搭",
        ],
    },
    {
        "id": "9021901",
        "code": "89-3114-50",
        "url": "https://www.dk-shoes.com.tw/SalePage/Index/9021901",
        "shortName": "墨白針織氣墊健走鞋",
        "color": "墨白",
        "category": "健走鞋",
        "price": 4680,
        "image": "assets/shoes/89-3114-50.webp",
        "features": [
            "灰白針織紋理有層次",
            "厚底緩震適合長時間行走",
            "黑色後拉帶增加運動感",
        ],
    },
    {
        "id": "11671616",
        "code": "65-6025-70",
        "url": "https://www.dk-shoes.com.tw/SalePage/Index/11671616",
        "shortName": "淺藍交叉帶厚底涼鞋",
        "color": "淺藍",
        "category": "涼鞋",
        "price": 3280,
        "image": "assets/shoes/65-6025-70.webp",
        "features": [
            "交叉寬帶包覆舒適",
            "厚底楔形比例修飾腿型",
            "淺藍色系適合春夏清爽穿搭",
        ],
    },
    {
        "id": "11630288",
        "code": "63-6089-69",
        "url": "https://www.dk-shoes.com.tw/SalePage/Index/11630288",
        "shortName": "灰白網布運動休閒鞋",
        "color": "灰白",
        "category": "休閒鞋",
        "price": 3480,
        "image": "assets/shoes/63-6089-69.webp",
        "features": [
            "銀灰網布帶出輕運動感",
            "奶油中底與膠色外底更柔和",
            "適合運動休閒和城市散步",
        ],
    },
]

HEADLINES = {
    "japanese-fresh": "清新自然的比例，讓鞋款融入柔和日常。",
    "korean-minimal": "低飽和搭配凸顯鞋款線條，乾淨耐看。",
    "sweet-cool": "甜感與俐落平衡，讓日常鞋款更有造型。",
    "sporty": "把舒適機能放進城市日常，走路也有型。",
    "resort": "明亮度假感穿搭，鞋款看起來輕鬆又修飾。",
}


def save_web_image(source: Path, target: Path, size: tuple[int, int] = (1200, 1600)) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail(size, Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=86, method=6)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    DETAIL_DIR.mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    for old_file in OUTPUT_DIR.glob("*.webp"):
        old_file.unlink()
    for old_file in SOURCE_DIR.glob("*.png"):
        old_file.unlink()
    for old_file in DETAIL_DIR.glob("*.webp"):
        old_file.unlink()

    detail_source = REFERENCE_DIR / "89-5160-50-canonical-correct-fit.png"
    if detail_source.exists():
        save_web_image(detail_source, DETAIL_DIR / "89-5160-50-canonical-correct-fit.webp", (1400, 1400))

    looks = []
    for product in PRODUCTS:
        shoe_code = product["code"]
        for model in MODEL_STYLES:
            model_id = model["id"]
            source = CANDIDATE_DIR / shoe_code / f"{model_id}-{shoe_code}.png"
            if not source.exists():
                raise FileNotFoundError(source)

            look_id = f"{model_id}-{shoe_code}"
            source_target = SOURCE_DIR / source.name
            image_target = OUTPUT_DIR / f"{look_id}.webp"

            shutil.copy2(source, source_target)
            save_web_image(source, image_target)

            looks.append(
                {
                    "id": look_id,
                    "modelId": model_id,
                    "shoeCode": shoe_code,
                    "label": f"{model['label']} x {shoe_code}",
                    "headline": HEADLINES[model_id],
                    "image": f"assets/looks/{image_target.name}",
                    "source": f"assets/looks/sources/{source_target.name}",
                }
            )

    style_options = {
        "models": [
            {
                **model,
                "thumb": f"assets/looks/{model['id']}-89-3114-50.webp"
                if model["id"] != "resort"
                else "assets/looks/resort-65-6025-70.webp",
            }
            for model in MODEL_STYLES
        ],
        "scenes": [],
    }

    (DATA_DIR / "style-options.json").write_text(
        json.dumps(style_options, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    (DATA_DIR / "products.json").write_text(
        json.dumps(PRODUCTS, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    (DATA_DIR / "generated-looks.json").write_text(
        json.dumps(looks, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    embedded_data = {
        "models": style_options["models"],
        "products": PRODUCTS,
        "looks": looks,
    }
    (DATA_DIR / "generated-data.js").write_text(
        "window.DK_STYLING_DATA = "
        + json.dumps(embedded_data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    print(f"created {len(looks)} generated looks")


if __name__ == "__main__":
    main()
