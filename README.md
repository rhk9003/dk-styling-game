# DK AI 穿搭選鞋遊戲

GitHub Pages 靜態小遊戲。流程是先選麻豆風格，再選鞋款，最後顯示該「麻豆風格 × 鞋款」對應的全新 AI 穿搭結果圖。

## 目前版本

- 主力鞋款：`89-5160-50`、墨白 `89-3114-50`
- 另外兩雙 6 開頭鞋款：`65-6025-70`、`63-6089-69`
- 麻豆風格：日系清新、韓系簡約、運動感、甜酷休閒、優雅度假
- 目前只顯示已完成生成圖的組合，避免使用者選到沒有結果的搭配。

## 本機預覽

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

打開 `http://127.0.0.1:4173/`。

## 更新生成圖

1. 將新的生成圖保留在 `C:\Users\drkao\.codex\generated_images\019f1ca7-771b-73f2-a7e0-68f5520523d7`
2. 更新 `tools/prepare_look_assets.py` 的 `LOOKS`
3. 執行：

```powershell
python tools/prepare_look_assets.py
```

## 線上網址與 Repo

- **線上網址**：https://rhk9003.github.io/dk-styling-game/
- **Repo**：`rhk9003/dk-styling-game`（public，GitHub Pages 從 `main` 根目錄）

## 嵌入 91APP（iframe 自動高度）

把下面這段貼到 91APP 的自訂 HTML 區塊。iframe 會依內容自動長高（子頁用 `postMessage` 回報高度），不會被裁切或出現內部捲軸。完整示範見 `embed-example.html`。

```html
<iframe
  id="dk-styling"
  src="https://rhk9003.github.io/dk-styling-game/"
  title="DK AI 穿搭選鞋遊戲"
  style="width:100%;border:0;display:block"
  height="900"
  scrolling="no"
  loading="lazy"
  allow="clipboard-write"
></iframe>
<script>
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://rhk9003.github.io") return;
    var d = e.data || {};
    if (d.type === "dk-styling-embed:height" && typeof d.height === "number") {
      document.getElementById("dk-styling").style.height = d.height + "px";
    }
  });
</script>
```

> 若 91APP 的區塊會濾掉 `<script>`，改用固定高度即可：把 iframe 的 `height` 設成 `2850`（足夠顯示結果圖），或改 `scrolling="auto"` 讓使用者在框內捲動。

## 發佈更新

改完內容後於本資料夾執行：

```powershell
git add -A
git commit -m "更新內容"
git push
```

`app.js` 內含 `assets/data/generated-data.js` 的內嵌 fallback，即使用 `file://` 打開也能看到完整資料；正式展示用 GitHub Pages。
