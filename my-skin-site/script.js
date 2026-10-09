 const PARTS = {
  head_top:    { name: '头部顶面', x: 8,  y: 0,  w: 8, h: 8, layer: 1, group: '头部' },
  head_bottom: { name: '头部底面', x: 16, y: 0,  w: 8, h: 8, layer: 1, group: '头部' },
  head_right:  { name: '头部右面', x: 0,  y: 8,  w: 8, h: 8, layer: 1, group: '头部' },
  head_front:  { name: '头部正面', x: 8,  y: 8,  w: 8, h: 8, layer: 1, group: '头部' },
  head_left:   { name: '头部左面', x: 16, y: 8,  w: 8, h: 8, layer: 1, group: '头部' },
  head_back:   { name: '头部背面', x: 24, y: 8,  w: 8, h: 8, layer: 1, group: '头部' },

  body_top:    { name: '身体顶面', x: 20, y: 16, w: 8, h: 4,  layer: 1, group: '身体' },
  body_bottom: { name: '身体底面', x: 28, y: 16, w: 8, h: 4,  layer: 1, group: '身体' },
  body_right:  { name: '身体右面', x: 16, y: 20, w: 4, h: 12, layer: 1, group: '身体' },
  body_front:  { name: '身体正面', x: 20, y: 20, w: 8, h: 12, layer: 1, group: '身体' },
  body_left:   { name: '身体左面', x: 28, y: 20, w: 4, h: 12, layer: 1, group: '身体' },
  body_back:   { name: '身体背面', x: 32, y: 20, w: 8, h: 12, layer: 1, group: '身体' },

  arm_r_top:    { name: '右臂顶面', x: 44, y: 16, w: 4, h: 4,  layer: 1, group: '右臂' },
  arm_r_bottom: { name: '右臂底面', x: 48, y: 16, w: 4, h: 4,  layer: 1, group: '右臂' },
  arm_r_right:  { name: '右臂右面', x: 40, y: 20, w: 4, h: 12, layer: 1, group: '右臂' },
  arm_r_front:  { name: '右臂正面', x: 44, y: 20, w: 4, h: 12, layer: 1, group: '右臂' },
  arm_r_left:   { name: '右臂左面', x: 48, y: 20, w: 4, h: 12, layer: 1, group: '右臂' },
  arm_r_back:   { name: '右臂背面', x: 52, y: 20, w: 4, h: 12, layer: 1, group: '右臂' },

  arm_l_top:    { name: '左臂顶面', x: 36, y: 48, w: 4, h: 4,  layer: 1, group: '左臂' },
  arm_l_bottom: { name: '左臂底面', x: 40, y: 48, w: 4, h: 4,  layer: 1, group: '左臂' },
  arm_l_right:  { name: '左臂右面', x: 32, y: 52, w: 4, h: 12, layer: 1, group: '左臂' },
  arm_l_front:  { name: '左臂正面', x: 36, y: 52, w: 4, h: 12, layer: 1, group: '左臂' },
  arm_l_left:   { name: '左臂左面', x: 40, y: 52, w: 4, h: 12, layer: 1, group: '左臂' },
  arm_l_back:   { name: '左臂背面', x: 44, y: 52, w: 4, h: 12, layer: 1, group: '左臂' },

  leg_r_top:    { name: '右腿顶面', x: 4,  y: 16, w: 4, h: 4,  layer: 1, group: '右腿' },
  leg_r_bottom: { name: '右腿底面', x: 8,  y: 16, w: 4, h: 4,  layer: 1, group: '右腿' },
  leg_r_right:  { name: '右腿右面', x: 0,  y: 20, w: 4, h: 12, layer: 1, group: '右腿' },
  leg_r_front:  { name: '右腿正面', x: 4,  y: 20, w: 4, h: 12, layer: 1, group: '右腿' },
  leg_r_left:   { name: '右腿左面', x: 8,  y: 20, w: 4, h: 12, layer: 1, group: '右腿' },
  leg_r_back:   { name: '右腿背面', x: 12, y: 20, w: 4, h: 12, layer: 1, group: '右腿' },

  leg_l_top:    { name: '左腿顶面', x: 20, y: 48, w: 4, h: 4,  layer: 1, group: '左腿' },
  leg_l_bottom: { name: '左腿底面', x: 24, y: 48, w: 4, h: 4,  layer: 1, group: '左腿' },
  leg_l_right:  { name: '左腿右面', x: 16, y: 52, w: 4, h: 12, layer: 1, group: '左腿' },
  leg_l_front:  { name: '左腿正面', x: 20, y: 52, w: 4, h: 12, layer: 1, group: '左腿' },
  leg_l_left:   { name: '左腿左面', x: 24, y: 52, w: 4, h: 12, layer: 1, group: '左腿' },
  leg_l_back:   { name: '左腿背面', x: 28, y: 52, w: 4, h: 12, layer: 1, group: '左腿' },

  hat_top:    { name: '帽子顶面', x: 40, y: 0,  w: 8, h: 8, layer: 2, group: '帽子层' },
  hat_bottom: { name: '帽子底面', x: 48, y: 0,  w: 8, h: 8, layer: 2, group: '帽子层' },
  hat_right:  { name: '帽子右面', x: 32, y: 8,  w: 8, h: 8, layer: 2, group: '帽子层' },
  hat_front:  { name: '帽子正面', x: 40, y: 8,  w: 8, h: 8, layer: 2, group: '帽子层' },
  hat_left:   { name: '帽子左面', x: 48, y: 8,  w: 8, h: 8, layer: 2, group: '帽子层' },
  hat_back:   { name: '帽子背面', x: 56, y: 8,  w: 8, h: 8, layer: 2, group: '帽子层' },

  jacket_top:    { name: '外套顶面', x: 20, y: 32, w: 8, h: 4,  layer: 2, group: '外套层' },
  jacket_bottom: { name: '外套底面', x: 28, y: 32, w: 8, h: 4,  layer: 2, group: '外套层' },
  jacket_right:  { name: '外套右面', x: 16, y: 36, w: 4, h: 12, layer: 2, group: '外套层' },
  jacket_front:  { name: '外套正面', x: 20, y: 36, w: 8, h: 12, layer: 2, group: '外套层' },
  jacket_left:   { name: '外套左面', x: 28, y: 36, w: 4, h: 12, layer: 2, group: '外套层' },
  jacket_back:   { name: '外套背面', x: 32, y: 36, w: 8, h: 12, layer: 2, group: '外套层' },

  sleeve_r_top:    { name: '右袖顶面', x: 44, y: 32, w: 4, h: 4,  layer: 2, group: '右袖层' },
  sleeve_r_bottom: { name: '右袖底面', x: 48, y: 32, w: 4, h: 4,  layer: 2, group: '右袖层' },
  sleeve_r_right:  { name: '右袖右面', x: 40, y: 36, w: 4, h: 12, layer: 2, group: '右袖层' },
  sleeve_r_front:  { name: '右袖正面', x: 44, y: 36, w: 4, h: 12, layer: 2, group: '右袖层' },
  sleeve_r_left:   { name: '右袖左面', x: 48, y: 36, w: 4, h: 12, layer: 2, group: '右袖层' },
  sleeve_r_back:   { name: '右袖背面', x: 52, y: 36, w: 4, h: 12, layer: 2, group: '右袖层' },

  sleeve_l_top:    { name: '左袖顶面', x: 52, y: 48, w: 4, h: 4,  layer: 2, group: '左袖层' },
  sleeve_l_bottom: { name: '左袖底面', x: 56, y: 48, w: 4, h: 4,  layer: 2, group: '左袖层' },
  sleeve_l_right:  { name: '左袖右面', x: 48, y: 52, w: 4, h: 12, layer: 2, group: '左袖层' },
  sleeve_l_front:  { name: '左袖正面', x: 52, y: 52, w: 4, h: 12, layer: 2, group: '左袖层' },
  sleeve_l_left:   { name: '左袖左面', x: 56, y: 52, w: 4, h: 12, layer: 2, group: '左袖层' },
  sleeve_l_back:   { name: '左袖背面', x: 60, y: 52, w: 4, h: 12, layer: 2, group: '左袖层' },

  pants_r_top:    { name: '右裤腿顶面', x: 4,  y: 32, w: 4, h: 4,  layer: 2, group: '右裤腿层' },
  pants_r_bottom: { name: '右裤腿底面', x: 8,  y: 32, w: 4, h: 4,  layer: 2, group: '右裤腿层' },
  pants_r_right:  { name: '右裤腿右面', x: 0,  y: 36, w: 4, h: 12, layer: 2, group: '右裤腿层' },
  pants_r_front:  { name: '右裤腿正面', x: 4,  y: 36, w: 4, h: 12, layer: 2, group: '右裤腿层' },
  pants_r_left:   { name: '右裤腿左面', x: 8,  y: 36, w: 4, h: 12, layer: 2, group: '右裤腿层' },
  pants_r_back:   { name: '右裤腿背面', x: 12, y: 36, w: 4, h: 12, layer: 2, group: '右裤腿层' },

  pants_l_top:    { name: '左裤腿顶面', x: 4, y: 48, w: 4, h: 4,  layer: 2, group: '左裤腿层' },
  pants_l_bottom: { name: '左裤腿底面', x: 8, y: 48, w: 4, h: 4,  layer: 2, group: '左裤腿层' },
  pants_l_right:  { name: '左裤腿右面', x: 0, y: 52, w: 4, h: 12, layer: 2, group: '左裤腿层' },
  pants_l_front:  { name: '左裤腿正面', x: 4, y: 52, w: 4, h: 12, layer: 2, group: '左裤腿层' },
  pants_l_left:   { name: '左裤腿左面', x: 8, y: 52, w: 4, h: 12, layer: 2, group: '左裤腿层' },
  pants_l_back:   { name: '左裤腿背面', x: 12, y: 52, w: 4, h: 12, layer: 2, group:'左裤腿层' },
};
let userSkinImg = null; 
let sampleSkinImg = null; 
const selectedParts = new Set();

const userSkinInput  = document.getElementById('userSkinInput');
const sampleListEl   = document.getElementById('sampleList');
const partListEl     = document.getElementById('partList');
const userCanvas     = document.getElementById('userCanvas');
const sampleCanvas   = document.getElementById('sampleCanvas');
const resultCanvas   = document.getElementById('resultCanvas');
const downloadBtn    = document.getElementById('downloadBtn');

const userCtx   = userCanvas.getContext('2d');
const sampleCtx = sampleCanvas.getContext('2d');
const resultCtx = resultCanvas.getContext('2d');

[userCtx, sampleCtx, resultCtx].forEach(c => c.imageSmoothingEnabled = false);

const SAMPLE_PATHS = ['samples/sample1.png', 'samples/sample2.png'];

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

function isValidSkinSize(img) {
  const ok = (img.width === 64 && img.height === 64) ||
             (img.width === 64 && img.height === 32);
  if (!ok) {
    alert('皮肤尺寸必须是 64x64 或 64x32，你上传的是 ' + img.width + 'x' + img.height);
  }
  return ok;
}

userSkinInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const img = await loadImageFromFile(file);
  if (!isValidSkinSize(img)) return;
  userSkinImg = img;
  drawUserSkin();
  updateResult();
  update3DPreview();
});

function drawUserSkin() {
  userCtx.clearRect(0, 0, 64, 64);
  if (!userSkinImg) return;
  userCtx.drawImage(userSkinImg, 0, 0);

  const eraseRegions = [
    [16, 32, 4, 4], [20, 32, 8, 4], [28, 32, 4, 4],
    [16, 36, 4, 12], [20, 36, 8, 12], [28, 36, 4, 12], [32, 36, 8, 12],
    [40, 32, 4, 4], [44, 32, 4, 4], [48, 32, 4, 4],
    [40, 36, 4, 12], [44, 36, 4, 12], [48, 36, 4, 12], [52, 36, 4, 12],
    [48, 48, 4, 4], [52, 48, 4, 4], [56, 48, 4, 4],
    [48, 52, 4, 12], [52, 52, 4, 12], [56, 52, 4, 12], [60, 52, 4, 12],
    [0, 32, 4, 4], [4, 32, 4, 4], [8, 32, 4, 4],
    [0, 36, 4, 12], [4, 36, 4, 12], [8, 36, 4, 12], [12, 36, 4, 12],
    [0, 48, 4, 4], [4, 48, 4, 4], [8, 48, 4, 4],
    [0, 52, 4, 12], [4, 52, 4, 12], [8, 52, 4, 12], [12, 52, 4, 12],
  ];

  for (const [x, y, w, h] of eraseRegions) {
    userCtx.clearRect(x, y, w, h);
  }
}

async function buildSampleList() {
  for (const path of SAMPLE_PATHS) {
    try {
      const img = await loadImageFromUrl(path);
      console.log('加载成功：', path, img.width, img.height);
      const item = document.createElement('div');
      item.className = 'sample-item';

      const c = document.createElement('canvas');
      c.width = 64; c.height = 64;
      c.getContext('2d').drawImage(img, 0, 0);
      item.appendChild(c);

      const label = document.createElement('div');
      label.textContent = path.split('/').pop();
      item.appendChild(label);

      item.addEventListener('click', () => {
        document.querySelectorAll('.sample-item').forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        sampleSkinImg = img;
        drawSampleSkin();
        updateResult();
      });

      sampleListEl.appendChild(item);
    } catch (err) {
      console.warn('样本加载失败：', path, err);
    }
  }
}

function drawSampleSkin() {
  sampleCtx.clearRect(0, 0, 64, 64);
  if (sampleSkinImg) sampleCtx.drawImage(sampleSkinImg, 0, 0);
}

function buildPartList() {
  const groups = {};
  for (const key in PARTS) {
    const p = PARTS[key];
    if (!groups[p.group]) groups[p.group] = [];
    groups[p.group].push({ key, ...p });
  }

  for (const groupName in groups) {
    const title = document.createElement('div');
    title.className = 'part-group-title';
    title.textContent = groupName;
    partListEl.appendChild(title);

    const row = document.createElement('div');
    row.className = 'part-group-row';

    groups[groupName].forEach(p => {
      const el = document.createElement('div');
      el.className = 'part-item';
      el.textContent = p.name;
      el.dataset.key = p.key;

      el.addEventListener('click', () => {
        if (selectedParts.has(p.key)) {
          selectedParts.delete(p.key);
          el.classList.remove('selected');
        } else {
          selectedParts.add(p.key);
          el.classList.add('selected');
        }
        updateResult();
      });

      row.appendChild(el);
    });

    partListEl.appendChild(row);
  }
}

function updateResult() {
  resultCtx.clearRect(0, 0, 64, 64);

  if (!userSkinImg) {
    downloadBtn.disabled = true;
    return;
  }

  resultCtx.drawImage(userCanvas, 0, 0);

  if (!sampleSkinImg || selectedParts.size === 0) {
    downloadBtn.disabled = false;
    return;
  }

  const tmp = document.createElement('canvas');
  tmp.width = 64; tmp.height = 64;
  const tmpCtx = tmp.getContext('2d');
  tmpCtx.imageSmoothingEnabled = false;
  tmpCtx.drawImage(sampleSkinImg, 0, 0);

  for (const key of selectedParts) {
    const { x, y, w, h } = PARTS[key];
    console.log('处理中：', key, '坐标', x, y, w, h);

    const srcData = tmpCtx.getImageData(x, y, w, h);
    console.log('读到像素数：', srcData.data.length, '第一个像素alpha：', srcData.data[3]);
    const pixels = srcData.data;

    const dstData = resultCtx.getImageData(x, y, w, h);
    const dstPixels = dstData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const a = pixels[i + 3];
      if (a > 0) {
        dstPixels[i]     = pixels[i];
        dstPixels[i + 1] = pixels[i + 1];
        dstPixels[i + 2] = pixels[i + 2];
        dstPixels[i + 3] = a;
      }
    }

    resultCtx.putImageData(dstData, x, y);
    const checkData = resultCtx.getImageData(x, y, w, h);
console.log('写入后检查：', key, '第一个alpha：', checkData.data[3]);
  }

  downloadBtn.disabled = false;
}

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'merged-skin.png';
  link.href = resultCanvas.toDataURL('image/png');
  link.click();
});

buildSampleList();
buildPartList();
let skinViewer = null;

function update3DPreview() {
  const canvas3d = document.getElementById('skin3d');
  if (!canvas3d || !userSkinImg) return;

  const mergedDataUrl = resultCanvas.toDataURL('image/png');

  if (!skinViewer) {
    skinViewer = new skinview3d.SkinViewer({
      canvas: canvas3d,
      width: 300,
      height: 400,
      skin: mergedDataUrl,
      model: 'auto-detect',
      background: 0x2a2a2a,
      enableControls: true
    });
    skinViewer.autoRotate = true;
    skinViewer.autoRotateSpeed = 1.0;
    skinViewer.globalLight.intensity = 1.5;
    skinViewer.cameraLight.intensity = 0.6;
  } else {
    skinViewer.loadSkin(mergedDataUrl);
  }
}