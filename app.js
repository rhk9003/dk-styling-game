const FALLBACK_MODELS = [
  {
    id: "japanese-fresh",
    label: "日系清新",
    headline: "棉麻層次、清爽街區感，溫柔但不單調",
    thumb: "assets/looks/japanese-fresh-89-5160-50.webp",
  },
  {
    id: "korean-minimal",
    label: "韓系簡約",
    headline: "低飽和穿搭與乾淨線條，俐落有質感",
    thumb: "assets/looks/korean-minimal-89-3114-50.webp",
  },
  {
    id: "sporty",
    label: "運動感",
    headline: "健走、輕訓與週末外出都能自然銜接",
    thumb: "assets/looks/sporty-63-6089-69.webp",
  },
  {
    id: "sweet-cool",
    label: "甜酷休閒",
    headline: "一點俏皮、一點俐落，適合咖啡廳與日常約會",
    thumb: "assets/looks/sweet-cool-89-5160-50.webp",
  },
  {
    id: "resort",
    label: "優雅度假",
    headline: "輕鬆、明亮、適合旅行和假日散步",
    thumb: "assets/looks/resort-65-6025-70.webp",
  },
];

const FALLBACK_PRODUCTS = [
  {
    id: "10755462",
    code: "89-5160-50",
    url: "https://www.dk-shoes.com.tw/SalePage/Index/10755462",
    shortName: "墨白飛織氣墊健走鞋",
    color: "墨白",
    category: "健走鞋",
    price: 3480,
    image: "assets/shoes/89-5160-50.webp",
    features: ["飛織鞋面輕盈透氣", "厚底氣墊提升步行支撐", "墨白配色好搭裙裝與褲裝"],
  },
  {
    id: "9021901",
    code: "89-3114-50",
    url: "https://www.dk-shoes.com.tw/SalePage/Index/9021901",
    shortName: "墨白針織氣墊健走鞋",
    color: "墨白",
    category: "健走鞋",
    price: 4680,
    image: "assets/shoes/89-3114-50.webp",
    features: ["灰白針織紋理有層次", "厚底緩震適合長時間行走", "黑色後拉帶增加運動感"],
  },
  {
    id: "11671616",
    code: "65-6025-70",
    url: "https://www.dk-shoes.com.tw/SalePage/Index/11671616",
    shortName: "米白厚底休閒鞋",
    color: "米白",
    category: "休閒鞋",
    price: 3280,
    image: "assets/shoes/65-6025-70.webp",
    features: ["米白色系乾淨耐看", "厚底比例修飾腿型", "適合度假洋裝與寬褲穿搭"],
  },
  {
    id: "11630288",
    code: "63-6089-69",
    url: "https://www.dk-shoes.com.tw/SalePage/Index/11630288",
    shortName: "灰白網布運動休閒鞋",
    color: "灰白",
    category: "休閒鞋",
    price: 3480,
    image: "assets/shoes/63-6089-69.webp",
    features: ["銀灰網布帶出輕運動感", "奶油中底與膠色外底更柔和", "適合運動休閒和城市散步"],
  },
];

const FALLBACK_LOOKS = [
  {
    id: "japanese-fresh-89-5160-50",
    modelId: "japanese-fresh",
    shoeCode: "89-5160-50",
    label: "日系清新 × 89-5160-50",
    headline: "清爽街區感穿搭，讓墨白鞋款融入輕柔日常。",
    image: "assets/looks/japanese-fresh-89-5160-50.webp",
    source: "assets/looks/sources/ig_0f324b1d2b437d47016a45c89ec3c88194a3d7202813a3f7f7.png",
  },
  {
    id: "sweet-cool-89-5160-50",
    modelId: "sweet-cool",
    shoeCode: "89-5160-50",
    label: "甜酷休閒 × 89-5160-50",
    headline: "咖啡廳日常穿搭，讓氣墊健走鞋更有約會感。",
    image: "assets/looks/sweet-cool-89-5160-50.webp",
    source: "assets/looks/sources/ig_0db802c2fc6fcb34016a44d665c5a8819aa69a81ad2b2ac9e5.png",
  },
  {
    id: "korean-minimal-89-3114-50",
    modelId: "korean-minimal",
    shoeCode: "89-3114-50",
    label: "韓系簡約 × 89-3114-50",
    headline: "低飽和韓系穿搭，凸顯墨白針織鞋面的質感。",
    image: "assets/looks/korean-minimal-89-3114-50.webp",
    source: "assets/looks/sources/ig_04ca44a8d3b25948016a45c9bb2bfc8191a17894ba771cb3c4.png",
  },
  {
    id: "sporty-89-3114-50",
    modelId: "sporty",
    shoeCode: "89-3114-50",
    label: "運動感 × 89-3114-50",
    headline: "戶外健走風格，讓墨白厚底鞋自然融入輕機能穿搭。",
    image: "assets/looks/sporty-89-3114-50.webp",
    source: "assets/looks/sources/ig_04e53f98c361cf20016a44d70491ec8199b21a4c245ef5ccd7.png",
  },
  {
    id: "resort-65-6025-70",
    modelId: "resort",
    shoeCode: "65-6025-70",
    label: "優雅度假 × 65-6025-70",
    headline: "明亮度假感穿搭，讓米白厚底鞋看起來輕鬆又修飾。",
    image: "assets/looks/resort-65-6025-70.webp",
    source: "assets/looks/sources/ig_0c866b0325294b62016a44d77308d88191ad2c68bbe7bca2ff.png",
  },
  {
    id: "sporty-63-6089-69",
    modelId: "sporty",
    shoeCode: "63-6089-69",
    label: "運動感 × 63-6089-69",
    headline: "輕運動穿搭與城市步行情境，呈現灰白網布鞋的透氣感。",
    image: "assets/looks/sporty-63-6089-69.webp",
    source: "assets/looks/sources/ig_099af51092d0b0ff016a45ca518cd881919295a49a5f5d6719.png",
  },
];

const state = {
  model: null,
  product: null,
  look: null,
};

const embeddedData = window.DK_STYLING_DATA ?? {};

let models = [];
let products = [];
let looks = [];

const els = {
  modelGrid: document.querySelector("#modelGrid"),
  shoeGrid: document.querySelector("#shoeGrid"),
  shoeNote: document.querySelector("#shoeNote"),
  categoryFilters: document.querySelector("#categoryFilters"),
  resultPanel: document.querySelector("#resultPanel"),
  resultLookImage: document.querySelector("#resultLookImage"),
  resultCombo: document.querySelector("#resultCombo"),
  resultShoeName: document.querySelector("#resultShoeName"),
  resultReason: document.querySelector("#resultReason"),
  productTitle: document.querySelector("#productTitle"),
  productMeta: document.querySelector("#productMeta"),
  productLink: document.querySelector("#productLink"),
  featureList: document.querySelector("#featureList"),
  shoeDetailCard: document.querySelector("#shoeDetailCard"),
  shoeDetailImage: document.querySelector("#shoeDetailImage"),
  randomizeButton: document.querySelector("#randomizeButton"),
  downloadButton: document.querySelector("#downloadButton"),
  canvas: document.querySelector("#downloadCanvas"),
};

function formatPrice(value) {
  return `NT$${Number(value).toLocaleString("zh-TW")}`;
}

function setThumbStyle(element, option) {
  if (option.thumb) {
    element.style.backgroundImage = `url("${option.thumb}")`;
    element.style.backgroundPosition = "center";
    element.style.backgroundSize = "cover";
    return;
  }

  element.style.setProperty("--bg", `url("${option.atlas}")`);
  element.style.setProperty("--pos", option.position);
  element.style.setProperty("--bg-size", option.backgroundSize);
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Unable to load ${path}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

function getModelLooks(modelId = state.model?.id) {
  if (!modelId) return [];
  return looks.filter((look) => look.modelId === modelId);
}

function getCompatibleProducts() {
  const shoeCodes = new Set(getModelLooks().map((look) => look.shoeCode));
  return products.filter((product) => shoeCodes.has(product.code));
}

function findLook() {
  if (!state.model || !state.product) return null;
  return looks.find((look) => look.modelId === state.model.id && look.shoeCode === state.product.code) ?? null;
}

function selectModel(model) {
  state.model = model;
  state.product = null;
  state.look = null;
  render();
}

function selectProduct(product) {
  state.product = product;
  state.look = findLook();
  render();
}

function renderModelGrid() {
  els.modelGrid.replaceChildren(
    ...models.map((model) => {
      const button = document.createElement("button");
      button.className = `option-card${state.model?.id === model.id ? " is-selected" : ""}`;
      button.type = "button";
      button.dataset.modelId = model.id;
      button.setAttribute("aria-pressed", state.model?.id === model.id ? "true" : "false");

      const thumb = document.createElement("span");
      thumb.className = "sprite-thumb";
      thumb.setAttribute("aria-hidden", "true");
      setThumbStyle(thumb, model);

      const title = document.createElement("span");
      title.className = "option-title";
      title.textContent = model.label;

      const copy = document.createElement("span");
      copy.className = "option-copy";
      copy.textContent = model.headline;

      const text = document.createElement("span");
      text.className = "option-text";
      text.append(title, copy);

      button.append(thumb, text);
      button.addEventListener("click", () => selectModel(model));
      return button;
    }),
  );
}

function renderShoes() {
  els.categoryFilters.hidden = true;

  if (!state.model) {
    els.shoeNote.textContent = "先選擇麻豆風格，下一步會出現已完成 AI 結果圖的鞋款。";
    els.shoeGrid.replaceChildren();
    els.shoeGrid.classList.remove("is-compact");
    return;
  }

  const compatibleProducts = getCompatibleProducts();
  els.shoeNote.textContent = compatibleProducts.length
    ? `${state.model.label} 目前有 ${compatibleProducts.length} 個可產出的鞋款組合。`
    : `${state.model.label} 尚未建立可產出的鞋款組合。`;
  els.shoeGrid.classList.toggle("is-compact", compatibleProducts.length <= 2);

  els.shoeGrid.replaceChildren(
    ...compatibleProducts.map((product) => {
      const button = document.createElement("button");
      button.className = `shoe-card${state.product?.code === product.code ? " is-selected" : ""}`;
      button.type = "button";
      button.dataset.shoeCode = product.code;
      button.setAttribute("aria-pressed", state.product?.code === product.code ? "true" : "false");

      const imageBox = document.createElement("span");
      imageBox.className = "shoe-image-box";
      imageBox.innerHTML = `<img src="${product.image}" alt="${product.shortName}" loading="lazy" />`;

      const title = document.createElement("span");
      title.className = "shoe-title";
      title.textContent = product.shortName;

      const meta = document.createElement("span");
      meta.className = "shoe-meta";
      meta.innerHTML = `${product.category} · ${product.color}<br><span class="shoe-price">${formatPrice(product.price)}</span>`;

      button.append(imageBox, title, meta);
      button.addEventListener("click", () => selectProduct(product));
      return button;
    }),
  );
}

function buildReason() {
  const feature = state.product.features?.[0] ?? "日常好搭，適合完整穿搭呈現。";
  return `${state.look.headline} ${feature}`;
}

function renderResult() {
  const hasResult = Boolean(state.look && state.model && state.product);
  els.resultPanel.classList.toggle("is-empty", !hasResult);
  if (!hasResult) return;

  els.resultLookImage.src = state.look.image;
  els.resultLookImage.alt = state.look.label;
  els.resultCombo.textContent = `${state.model.label} × ${state.product.code}`;
  els.resultShoeName.textContent = state.product.shortName;
  els.resultReason.textContent = buildReason();
  els.productTitle.textContent = state.product.shortName;
  els.productMeta.textContent = `${state.product.code} · ${state.product.category} · ${formatPrice(state.product.price)}`;
  els.productLink.href = state.product.url;

  if (state.product.detailImage) {
    els.shoeDetailCard.hidden = false;
    els.shoeDetailImage.src = state.product.detailImage;
    els.shoeDetailImage.alt = `${state.product.shortName} 鞋型特寫`;
  } else {
    els.shoeDetailCard.hidden = true;
    els.shoeDetailImage.removeAttribute("src");
    els.shoeDetailImage.alt = "";
  }

  els.featureList.replaceChildren(
    ...(state.product.features ?? []).slice(0, 3).map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }),
  );
}

function render() {
  renderModelGrid();
  renderShoes();
  renderResult();
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function applyLook(look) {
  state.look = look;
  state.model = models.find((model) => model.id === look.modelId) ?? null;
  state.product = products.find((product) => product.code === look.shoeCode) ?? null;
}

function randomize() {
  applyLook(pickRandom(looks));
  render();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawContain(ctx, image, x, y, width, height) {
  const scale = Math.min(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const dx = x + (width - drawWidth) / 2;
  const dy = y + (height - drawHeight) / 2;
  ctx.drawImage(image, dx, dy, drawWidth, drawHeight);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const chars = Array.from(text);
  let line = "";
  let lines = 0;

  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      lines += 1;
      line = char;
      if (lines >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y);
  }
}

async function downloadCard() {
  if (!state.look) return;
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  // 用已出貨的 webp 結果圖產生下載卡（不依賴大型來源 PNG）。
  const lookImage = await loadImage(state.look.image);
  const imageHeight = 1260;
  const infoTop = imageHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f5f8f6";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawContain(ctx, lookImage, 0, 0, canvas.width, imageHeight);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, infoTop, canvas.width, canvas.height - infoTop);
  ctx.fillStyle = "#1f7668";
  ctx.fillRect(0, infoTop, canvas.width, 8);

  ctx.fillStyle = "#202326";
  ctx.textBaseline = "top";
  ctx.font = "700 30px 'Microsoft JhengHei', sans-serif";
  ctx.fillText(state.model.label, 64, infoTop + 42);
  ctx.font = "800 48px 'Microsoft JhengHei', sans-serif";
  wrapText(ctx, state.product.shortName, 64, infoTop + 92, 930, 58, 2);
  ctx.font = "500 27px 'Microsoft JhengHei', sans-serif";
  ctx.fillStyle = "#697177";
  wrapText(ctx, buildReason(), 64, infoTop + 210, 930, 38, 2);
  ctx.font = "800 27px 'Microsoft JhengHei', sans-serif";
  ctx.fillStyle = "#d65f4b";
  ctx.fillText(`DK Shoes · ${state.product.code} · ${formatPrice(state.product.price)}`, 64, infoTop + 300);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("Unable to create image blob.");

  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.download = `dk-look-${state.product.code}-${state.model.id}.png`;
  link.href = objectUrl;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

async function init() {
  const [styleOptions, allProducts, generatedLooks] = await Promise.all([
    loadJson("assets/data/style-options.json", { models: embeddedData.models ?? FALLBACK_MODELS }),
    loadJson("assets/data/products.json", embeddedData.products ?? FALLBACK_PRODUCTS),
    loadJson("assets/data/generated-looks.json", embeddedData.looks ?? FALLBACK_LOOKS),
  ]);

  looks = generatedLooks;
  const productByCode = new Map(allProducts.map((product) => [product.code, product]));
  products = uniqueBy(
    looks.map((look) => productByCode.get(look.shoeCode)).filter(Boolean),
    (product) => product.code,
  );

  const usedModelIds = new Set(looks.map((look) => look.modelId));
  models = styleOptions.models.filter((model) => usedModelIds.has(model.id));

  els.randomizeButton.addEventListener("click", randomize);
  els.downloadButton.addEventListener("click", () => {
    downloadCard().catch(() => {
      window.alert("下載圖片時發生問題，請重新整理後再試一次。");
    });
  });

  render();
}

init().catch(() => {
  document.body.innerHTML = '<main class="load-error">資料讀取失敗，請確認 assets 資料夾完整。</main>';
});
