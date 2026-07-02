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

## 發佈到 GitHub Pages

把整個資料夾提交到 GitHub repository，Pages 設定選 `main` branch / root 即可。`app.js` 內有本機 fallback data，即使用 `file://` 打開也能看到基本資料；正式展示仍建議用 HTTP 或 GitHub Pages。
