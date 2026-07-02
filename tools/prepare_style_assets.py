from __future__ import annotations

import json
import shutil
from pathlib import Path

from PIL import Image, ImageOps


GENERATED_DIR = Path(r"C:\Users\drkao\.codex\generated_images\019f1ca7-771b-73f2-a7e0-68f5520523d7")
OUTPUT_DIR = Path("assets/generated")
SOURCE_DIR = OUTPUT_DIR / "sources"
DATA_DIR = Path("assets/data")

TILE_SIZE = (720, 960)
ATLAS_SIZE = (TILE_SIZE[0] * 2, TILE_SIZE[1] * 2)

STYLE_SOURCES = [
    {
        "group": "models",
        "id": "commute",
        "label": "清爽通勤",
        "headline": "乾淨俐落，適合一整天的城市節奏",
        "fileIndex": 1,
    },
    {
        "group": "models",
        "id": "sweet-cool",
        "label": "甜酷休閒",
        "headline": "一點俏皮、一點率性，週末也能有重點",
        "fileIndex": 2,
    },
    {
        "group": "models",
        "id": "active",
        "label": "輕戶外活力",
        "headline": "透氣輕盈，陪妳從散步走到小旅行",
        "fileIndex": 3,
    },
    {
        "group": "models",
        "id": "resort",
        "label": "優雅度假",
        "headline": "柔和材質與淺色穿搭，放鬆但不鬆散",
        "fileIndex": 4,
    },
    {
        "group": "scenes",
        "id": "city",
        "label": "城市通勤",
        "headline": "玻璃街景與晨光，適合俐落日常",
        "fileIndex": 5,
    },
    {
        "group": "scenes",
        "id": "seaside",
        "label": "海邊散步",
        "headline": "木棧道與海風，搭出輕鬆假日感",
        "fileIndex": 6,
    },
    {
        "group": "scenes",
        "id": "cafe",
        "label": "週末咖啡",
        "headline": "露台午後光線，適合甜酷或柔和穿搭",
        "fileIndex": 7,
    },
    {
        "group": "scenes",
        "id": "park",
        "label": "綠蔭小旅行",
        "headline": "公園步道與綠意，給健走鞋一個舒服舞台",
        "fileIndex": 8,
    },
]


def cover_crop(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    image = ImageOps.exif_transpose(image).convert("RGB")
    target_w, target_h = size
    source_w, source_h = image.size
    source_ratio = source_w / source_h
    target_ratio = target_w / target_h

    if source_ratio > target_ratio:
        new_w = int(source_h * target_ratio)
        left = (source_w - new_w) // 2
        box = (left, 0, left + new_w, source_h)
    else:
        new_h = int(source_w / target_ratio)
        top = (source_h - new_h) // 2
        box = (0, top, source_w, top + new_h)

    return image.crop(box).resize(size, Image.Resampling.LANCZOS)


def save_atlas(items: list[dict], name: str, files: list[Path]) -> list[dict]:
    atlas = Image.new("RGB", ATLAS_SIZE, "white")
    enriched = []

    for index, item in enumerate(items):
        source = files[item["fileIndex"]]
        target_source = SOURCE_DIR / f"{item['group']}-{item['id']}.png"
        shutil.copy2(source, target_source)

        with Image.open(source) as image:
            tile = cover_crop(image, TILE_SIZE)

        col = index % 2
        row = index // 2
        atlas.paste(tile, (col * TILE_SIZE[0], row * TILE_SIZE[1]))

        enriched.append(
            {
                "id": item["id"],
                "label": item["label"],
                "headline": item["headline"],
                "atlas": f"assets/generated/{name}",
                "position": f"{col * 100}% {row * 100}%",
                "backgroundSize": "200% 200%",
                "source": f"assets/generated/sources/{target_source.name}",
            }
        )

    atlas.save(OUTPUT_DIR / name, "WEBP", quality=86, method=6)
    return enriched


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    files = sorted(GENERATED_DIR.glob("*.png"), key=lambda path: path.stat().st_mtime)
    if len(files) < 9:
        raise RuntimeError(f"Expected at least 9 generated files, found {len(files)}.")

    models = [item for item in STYLE_SOURCES if item["group"] == "models"]
    scenes = [item for item in STYLE_SOURCES if item["group"] == "scenes"]

    style_options = {
        "models": save_atlas(models, "models-atlas.webp", files),
        "scenes": save_atlas(scenes, "scenes-atlas.webp", files),
    }

    (DATA_DIR / "style-options.json").write_text(
        json.dumps(style_options, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print("created assets/generated/models-atlas.webp")
    print("created assets/generated/scenes-atlas.webp")
    print("created assets/data/style-options.json")


if __name__ == "__main__":
    main()
