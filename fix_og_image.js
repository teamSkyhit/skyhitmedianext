const sharp = require('sharp');

async function fixImage() {
  await sharp('public/images/Digital-Marketing-og-.png')
    .resize({
      width: 600, // Safe zone is 630x630, so 600 is perfectly safe
      fit: sharp.fit.contain,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .extend({
      top: 150, // Roughly center it vertically to make it 630 high. If original was 1200x630, resizing to 600 makes it 600x315.
      bottom: 165, // 315 + 150 + 165 = 630
      left: 300, // To make width 1200
      right: 300,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toFile('public/images/Digital-Marketing-og-padded.png');

  console.log('Successfully created Digital-Marketing-og-padded.png');
}

fixImage();
