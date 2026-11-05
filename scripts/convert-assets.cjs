const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const srcDir = path.join(__dirname, '..', 'assets', 'images');
const destDir = path.join(__dirname, '..', 'public', 'assets', 'images');

fs.mkdirSync(destDir, { recursive: true });

async function convertAll() {
  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} files in ${srcDir}`);

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, path.extname(file));

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {
      const destPath = path.join(destDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} -> ${destPath}`);
    } else if (ext === '.heic') {
      const destFile = `${base}.jpg`;
      const destPath = path.join(destDir, destFile);
      if (fs.existsSync(destPath)) {
        console.log(`Already exists: ${destFile}`);
        continue;
      }
      try {
        console.log(`Converting ${file}...`);
        const input = fs.readFileSync(srcPath);
        const output = await convert({ buffer: input, format: 'JPEG', quality: 0.92 });
        fs.writeFileSync(destPath, output);
        console.log(`✓ Converted ${file} -> ${destFile} (${(output.length / 1024 / 1024).toFixed(2)} MB)`);
      } catch (err) {
        console.error(`Failed ${file}:`, err.message);
      }
    }
  }

  const destFiles = fs.readdirSync(destDir);
  console.log(`All done! ${destFiles.length} images ready in ${destDir}`);
}

convertAll().catch(console.error);
