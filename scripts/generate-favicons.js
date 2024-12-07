const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  try {
    const svgBuffer = await fs.readFile(inputSvg);

    for (const [filename, size] of Object.entries(sizes)) {
      const outputPath = path.join(publicDir, filename);
      await sharp(svgBuffer)
        .resize(size, size)
        .toFormat('png')
        .toFile(outputPath);
      console.log(`Generated ${filename}`);
    }

    // Gerar favicon.ico a partir do PNG de 32x32
    const png32Buffer = await fs.readFile(path.join(publicDir, 'favicon-32x32.png'));
    await sharp(png32Buffer)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('Generated favicon.ico');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
