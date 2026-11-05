const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/pages/gallery.astro');
let content = fs.readFileSync(filePath, 'utf8');

// Replace each image: '/assets/images/IMG_*.jpg' with a distinct /assets/webimg/N.jpg
let imgIndex = 1;
content = content.replace(/image:\s*'\/assets\/images\/IMG_[^']+'/g, () => {
  const replacement = `image: '/assets/webimg/${imgIndex}.jpg'`;
  imgIndex++;
  return replacement;
});

// Also check hero or other background images
content = content.replace(/background-image:\s*url\('https:\/\/images\.unsplash\.com\/[^']+'\)/g, () => {
  return `background-image: url('/assets/webimg/${imgIndex++}.jpg')`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated gallery.astro with distinct webimg items. Total used:', imgIndex - 1);
