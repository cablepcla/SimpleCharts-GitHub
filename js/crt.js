const canvas = document.querySelector('.crt-noise');
const ctx = canvas.getContext('2d');

const grainSize = 3; // 👈 change this (1 = fine, 3–4 = nice CRT, 6+ = chunky)

let noiseCanvas = document.createElement('canvas');
let noiseCtx = noiseCanvas.getContext('2d');

function resize() {
  canvas.width = canvas.offsetWidth * devicePixelRatio;
  canvas.height = canvas.offsetHeight * devicePixelRatio;

  noiseCanvas.width = canvas.width / grainSize;
  noiseCanvas.height = canvas.height / grainSize;

  ctx.imageSmoothingEnabled = false;
}

window.addEventListener('resize', resize);
resize();

function noise() {
  const img = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);

  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = v;
    img.data[i + 1] = v;
    img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }

  noiseCtx.putImageData(img, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(noiseCanvas, 0, 0, canvas.width, canvas.height);

  requestAnimationFrame(noise);
}

noise();