# DK AI 穿搭選鞋遊戲續作規則

## 使用者最新方向

- 流程改為兩步：先選麻豆風格，再選鞋款，最後顯示結果。
- 不再讓使用者選情境。
- 結果不是拼貼、不是固定姿勢換鞋，而是「該麻豆風格實際穿著該鞋款」的全新 AI 全身穿搭圖。
- 同一個品牌感麻豆可以延續，但每張要有不同姿勢、穿搭細節與自然融入的日常場景。
- 必須有日系、韓系、運動感等多元麻豆風格。
- 使用者確認：幾款鞋子與幾個麻豆要有對應組合產出。這版先顯示已生成的精選組合；未來補齊矩陣時，只要新增生成圖與 `generated-looks.json` 條目。
- 成品圖不可裁掉頭或鞋。畫面和下載圖都應使用 contain 類型呈現。

## 鞋款範圍

- 主力：`89-5160-50`
- 主力：墨白 `89-3114-50`
- 6 開頭精選：`65-6025-70`
- 6 開頭精選：`63-6089-69`

## 目前已建立組合

資料來源：`assets/data/generated-looks.json`

- `japanese-fresh-89-5160-50`
  - 日系清新 × `89-5160-50`
  - 來源：`ig_0f324b1d2b437d47016a45c89ec3c88194a3d7202813a3f7f7.png`
- `sweet-cool-89-5160-50`
  - 甜酷休閒 × `89-5160-50`
  - 來源：`ig_0db802c2fc6fcb34016a44d665c5a8819aa69a81ad2b2ac9e5.png`
- `korean-minimal-89-3114-50`
  - 韓系簡約 × `89-3114-50`
  - 來源：`ig_04ca44a8d3b25948016a45c9bb2bfc8191a17894ba771cb3c4.png`
- `sporty-89-3114-50`
  - 運動感 × `89-3114-50`
  - 來源：`ig_04e53f98c361cf20016a44d70491ec8199b21a4c245ef5ccd7.png`
- `resort-65-6025-70`
  - 優雅度假 × `65-6025-70`
  - 來源：`ig_0c866b0325294b62016a44d77308d88191ad2c68bbe7bca2ff.png`
- `sporty-63-6089-69`
  - 運動感 × `63-6089-69`
  - 來源：`ig_099af51092d0b0ff016a45ca518cd881919295a49a5f5d6719.png`

## 生成 prompt 要點

- 用商品照作為鞋款 reference。
- 指令要要求 full body、head-to-shoes、both shoes visible、generous bottom padding。
- 指令要避免 cropped shoes、distorted feet、watermark、text、extra logos。
- 同一個人可以，但要改變 pose、outfit、camera angle、日常場景。
- 結果要像完整形象照，不要像商品圖疊到人像上。

## 程式資料

- `index.html`：兩步流程與結果面板。
- `app.js`：只讓使用者選到已生成結果圖的麻豆/鞋款組合。
- `assets/data/style-options.json`：麻豆選項。
- `assets/data/products.json`：目前四雙鞋的乾淨商品資料。
- `assets/data/generated-looks.json`：麻豆風格 × 鞋款的結果圖矩陣。
- `tools/prepare_look_assets.py`：把生成圖複製進 `assets/looks/` 並重建 `generated-looks.json`。

## 本機測試

```powershell
python tools/prepare_look_assets.py
node --check app.js
python -m http.server 4173 --bind 127.0.0.1
```

預覽網址：`http://127.0.0.1:4173/`
