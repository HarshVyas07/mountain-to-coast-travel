const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('info/Mountains to Coast Travel website content.pdf');

// Find all streams
let pos = 0;
let textAll = '';
while ((pos = buf.indexOf('stream', pos)) !== -1) {
  const start = pos + 6; // after "stream"
  // Skip \r\n or \n
  let sStart = start;
  while (buf[sStart] === 10 || buf[sStart] === 13) sStart++;
  const end = buf.indexOf('endstream', sStart);
  if (end === -1) break;
  const streamBuf = buf.slice(sStart, end);
  try {
    const uncompressed = zlib.inflateSync(streamBuf);
    textAll += uncompressed.toString('latin1') + '\n';
  } catch (e) {
    // maybe raw text or image
  }
  pos = end + 9;
}

const cleaned = textAll.replace(/\(([^)]+)\)\s*Tj/g, '$1 ')
                       .replace(/\[([^\]]+)\]\s*TJ/g, '$1 ');

console.log('Total extracted length:', cleaned.length);
const matches = cleaned.match(/[A-Za-z0-9 ,.:;?!'\/–—\-]{10,}/g);
if (matches) {
  console.log('Sample text (first 40):');
  console.log(matches.slice(0, 40).join('\n'));
}

// Search for Nicaragua
const nicaIdx = textAll.indexOf('Nicaragua');
console.log('Nicaragua found:', nicaIdx !== -1);
if (nicaIdx !== -1) {
  console.log(textAll.substring(nicaIdx, nicaIdx + 500));
}
