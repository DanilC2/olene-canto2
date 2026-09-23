const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:/Users/User/.gemini/antigravity/brain/baedf77b-0ad6-497b-a937-ba9a8982a605/.user_uploaded/media_1790152175677.jpg';
const outputPath = path.resolve('public/visca-logo.png');

async function processLogo() {
  const image = sharp(inputPath);
  const trimmed = image.trim();
  const { data, info } = await trimmed.raw().toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    // Compute distance from white (255, 255, 255)
    // For pure white, diff is 0.
    const diffR = 255 - r;
    const diffG = 255 - g;
    const diffB = 255 - b;
    const maxDiff = Math.max(diffR, diffG, diffB);

    if (maxDiff <= 4) {
      // Background pixel
      rgba[i * 4] = 0;
      rgba[i * 4 + 1] = 0;
      rgba[i * 4 + 2] = 0;
      rgba[i * 4 + 3] = 0;
    } else {
      // Calculate alpha based on coverage
      // Threshold between pure background and anti-aliased edge
      const alphaNorm = Math.min(1, Math.max(0, (maxDiff - 4) / (255 - 4)));
      // Power curve for smoother text anti-aliasing
      const alpha = Math.min(255, Math.max(0, Math.round(Math.pow(alphaNorm, 0.85) * 255)));

      // De-matte the color against white
      const aFloat = alpha / 255;
      const trueR = Math.min(255, Math.max(0, Math.round((r - 255 * (1 - aFloat)) / aFloat)));
      const trueG = Math.min(255, Math.max(0, Math.round((g - 255 * (1 - aFloat)) / aFloat)));
      const trueB = Math.min(255, Math.max(0, Math.round((b - 255 * (1 - aFloat)) / aFloat)));

      rgba[i * 4] = trueR;
      rgba[i * 4 + 1] = trueG;
      rgba[i * 4 + 2] = trueB;
      rgba[i * 4 + 3] = alpha;
    }
  }

  // Also let's output a 2x scaled crisp version for retina displays
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log('Successfully generated clean transparent logo:', outputPath, `(${width}x${height})`);
}

processLogo().catch(console.error);
