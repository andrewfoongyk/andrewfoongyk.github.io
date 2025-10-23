// Plain JS viewer for MNIST MLP weight snapshots
// Data format: {"meta": {...}, "snapshots": [ { step, epoch, train_loss, val_loss, val_acc, W1, b1, W2, b2, W3, b3 } ]}
// Matrices (W1/b1/W2/b2/W3/b3) are objects: { data: int8[], shape: [rows, cols], scale: float }

// const fileInput = document.getElementById('fileInput');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const stepRange = document.getElementById('stepRange');
const stepText = document.getElementById('stepText');
const speedSelect = document.getElementById('speedSelect');
const lockScale = document.getElementById('lockScale');

const runMeta = document.getElementById('runMeta');
const epochMeta = document.getElementById('epochMeta');
const stepMeta = document.getElementById('stepMeta');
const lossMeta = document.getElementById('lossMeta');
const vallossMeta = document.getElementById('vallossMeta');
const valaccMeta = document.getElementById('valaccMeta');

const grid64 = document.getElementById('grid64');
const canvasW2 = document.getElementById('W2');
const canvasW3 = document.getElementById('W3');
const canvasB1 = document.getElementById('b1');
const canvasB2 = document.getElementById('b2');
const canvasB3 = document.getElementById('b3');

const TILE_SCALE = 3.4; 

async function loadSnapshotsFrom(url) {
  const res = await fetch(url, { cache: "no-store" }); // no-store to avoid stale caching during iteration
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

let state = {
  data: null,
  idx: 0,
  timer: null,
  palette: null,
  globalScales: null, // computed across snapshots if lockScale is checked
  tiles: [], // canvases for 64 neurons
};

// --- palette: muted diverging (cool -> neutral -> warm)
function lerp(a,b,t){ return a + (b-a)*t; }
function lerpColor(c1, c2, t){
  const r = Math.round(lerp(c1[0], c2[0], t));
  const g = Math.round(lerp(c1[1], c2[1], t));
  const b = Math.round(lerp(c1[2], c2[2], t));
  return `rgb(${r},${g},${b})`;
}

// Cool slate blue → warm terracotta, with gentle neutral near zero
const NEG = [47,79,111];   // #2f4f6f
const NEU = [247,245,239]; // #f7f5ef paper
const POS = [138,74,67];   // #8a4a43

function divergingColor(x){
  // x expected in [-1,1]
  if (x <= 0){
    const t = Math.min(1, Math.max(0, (x+1)));
    return lerpColor(NEG, NEU, t);
  } else {
    const t = Math.min(1, Math.max(0, (1-x)));
    // for x→1, t→0 (POS), for x→0, t→1 (NEU)
    return lerpColor(POS, NEU, t);
  }
}


function initGrid(){
  grid64.innerHTML = '';
  state.tiles = [];
  for (let i = 0; i < 64; i++) {
    const c = document.createElement('canvas');
    // Logical pixel size = scaled size so no CSS scaling is needed
    c.width  = 28 * TILE_SCALE;
    c.height = 28 * TILE_SCALE;
    // Keep CSS from re-scaling (optional if you remove width/height rules in CSS)
    c.style.width = (28 * TILE_SCALE) + 'px';
    c.style.height = (28 * TILE_SCALE) + 'px';
    grid64.appendChild(c);
    state.tiles.push(c);
  }
}

function drawMatrixToCanvas(canvas, matObj, scale = 1) {
  // matObj: { data:int8[], shape:[rows, cols], scale:float }
  const rows = matObj.shape[0];
  const cols = matObj.shape[1];

  // Offscreen: paint native-size pixels
  const off = document.createElement('canvas');
  off.width = cols;
  off.height = rows;
  const offCtx = off.getContext('2d', { alpha: false });
  offCtx.imageSmoothingEnabled = false;

  // Build native ImageData
  const img = offCtx.createImageData(cols, rows);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const v = matObj.data[i] / 127; // [-1,1]
      const m = divergingColor(v).match(/\d+/g).map(Number);
      const o = i * 4;
      img.data[o] = m[0];
      img.data[o + 1] = m[1];
      img.data[o + 2] = m[2];
      img.data[o + 3] = 255;
    }
  }
  offCtx.putImageData(img, 0, 0);

  // Destination: size = native * scale
  canvas.width  = cols * scale;
  canvas.height = rows * scale;

  const ctx = canvas.getContext('2d', { alpha: false });
  ctx.imageSmoothingEnabled = false;

  // Blit with nearest-neighbor
  ctx.drawImage(off, 0, 0, cols, rows, 0, 0, cols * scale, rows * scale);
}


function paintNeuronTile(canvas, w1Data, neuronIndex, scale) {
  const off = document.createElement('canvas');
  off.width = 28;
  off.height = 28;
  const offCtx = off.getContext('2d', { alpha: false });
  offCtx.imageSmoothingEnabled = false;

  // Build 28×28 ImageData for this neuron
  const img = offCtx.createImageData(28, 28);
  const base = neuronIndex * 784; // 28*28
  for (let i = 0; i < 784; i++) {
    const v = w1Data[base + i] / 127;  // [-1,1]
    const rgb = divergingColor(v).match(/\d+/g).map(Number);
    const o = i * 4;
    img.data[o]     = rgb[0];
    img.data[o + 1] = rgb[1];
    img.data[o + 2] = rgb[2];
    img.data[o + 3] = 255;
  }
  offCtx.putImageData(img, 0, 0);

  // Ensure the destination canvas is sized for the requested scale
  canvas.width  = 28 * scale;
  canvas.height = 28 * scale;

  const ctx = canvas.getContext('2d', { alpha: false });
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Blit with nearest-neighbor scaling
  ctx.drawImage(off, 0, 0, 28, 28, 0, 0, 28 * scale, 28 * scale);
}


function drawNeuronTiles(W1, scale = TILE_SCALE) {
  // W1.shape = [64, 784]; W1.data is int8[]
  const tiles = state.tiles;
  for (let n = 0; n < 64; n++) {
    paintNeuronTile(tiles[n], W1.data, n, scale);
  }
}


function computeGlobalScales(data){
  // We won’t rescale int8; instead, if you want strict global scaling tied to float scales,
  // you can normalize int8 by (scale / maxScale). For simplicity in color mapping, we already
  // use int8 in [-1,1], so this function is a no-op artifact for future extensions.
  return null;
}

function setMeta(meta, snap){
  const ts = meta?.timestamp ? new Date(meta.timestamp*1000).toISOString().slice(0,19).replace('T',' ') : '–'
  // runMeta.textContent = `epochs=${meta?.epochs ?? '–'}, batch=${meta?.batch_size ?? '–'}, lr=${meta?.lr ?? '–'} • ${ts}`
  epochMeta.textContent = snap?.epoch ?? '–'
  stepMeta.textContent = snap?.step ?? '–'
  lossMeta.textContent = isFinite(snap?.train_loss) ? snap.train_loss.toFixed(4) : '–'
  vallossMeta.textContent = snap?.val_loss != null ? snap.val_loss.toFixed(4) : '–'
  valaccMeta.textContent = snap?.val_acc != null ? (100*snap.val_acc).toFixed(2)+'%' : '–'
}

function render(idx){
  const { meta, snapshots } = state.data;
  const snap = snapshots[idx];
  setMeta(meta, snap);

  // first layer 64 × 28×28
  drawNeuronTiles(snap.W1, 2);

  // W2: 64×64 (optionally scale 4×)
  drawMatrixToCanvas(canvasW2, snap.W2, 4);

  // W3: 10×64 (optionally scale 4× vertically/horizontally)
  drawMatrixToCanvas(canvasW3, snap.W3, 4);

  // Bias bars (skinny but crisp; 6× works nicely)
  drawMatrixToCanvas(canvasB1, snap.b1, 6);
  drawMatrixToCanvas(canvasB2, snap.b2, 6);
  drawMatrixToCanvas(canvasB3, snap.b3, 20);

  stepRange.value = idx;
  stepText.textContent = `${idx+1}/${snapshots.length}`;
}

function enableControls(){
  playBtn.disabled = false;
  pauseBtn.disabled = false;
  prevBtn.disabled = false;
  nextBtn.disabled = false;
  stepRange.disabled = false;
}

function disableControls(){
  playBtn.disabled = true;
  pauseBtn.disabled = true;
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  stepRange.disabled = true;
}

function play(){
  clearInterval(state.timer);
  const fps = parseInt(speedSelect.value, 10);
  const period = 1000 / fps;
  state.timer = setInterval(() => {
    state.idx = (state.idx + 1) % state.data.snapshots.length;
    render(state.idx);
  }, period);
}

function pause(){
  clearInterval(state.timer);
  state.timer = null;
}

// fileInput.addEventListener('change', (e) => {
//   const file = e.target.files[0];
//   if (!file) return;
//   const fr = new FileReader();
//   fr.onload = () => {
//     try{
//       state.data = JSON.parse(fr.result);
//       initGrid();
//       stepRange.min = 0;
//       stepRange.max = state.data.snapshots.length - 1;
//       state.idx = 0;
//       render(0);
//       enableControls();
//     }catch(err){
//       alert("Failed to parse JSON: " + err.message);
//       disableControls();
//     }
//   };
//   fr.readAsText(file);
// });

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
prevBtn.addEventListener('click', () => { state.idx = Math.max(0, state.idx-1); render(state.idx); });
nextBtn.addEventListener('click', () => { state.idx = Math.min(state.data.snapshots.length-1, state.idx+1); render(state.idx); });
stepRange.addEventListener('input', (e) => { state.idx = parseInt(e.target.value, 10); render(state.idx); });

// initial
disableControls();

async function loadSnapshotsFrom(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function tryPaths(paths) {
  let lastErr;
  for (const p of paths) {
    try { return await loadSnapshotsFrom(p); }
    catch (e) { console.warn("Failed to load", p, e); lastErr = e; }
  }
  throw lastErr;
}

(async function boot() {
  try {
    // Try common locations relative to the page:
    const data = await tryPaths([
      './runs/mnist_mlp_viz/weights.json',
    ]);

    state.data = data;
    initGrid();
    stepRange.min = 0;
    stepRange.max = state.data.snapshots.length - 1;
    state.idx = 0;
    render(0);
    enableControls();
  } catch (err) {
    console.error(err);
    const msg = document.createElement('div');
    msg.style.cssText = 'margin:16px;padding:12px;border:1px solid #e0b4b4;background:#fff5f5;color:#912d2b;border-radius:8px;';
    msg.textContent = "Couldn't load snapshots. Check the JSON path and make sure the page is served over http(s). See Console for details.";
    document.body.prepend(msg);
    disableControls();
  }
})();
