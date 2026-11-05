const fs = require('fs');
const path = require('path');

const srcPath = path.resolve('src/data/destinations.ts');
const raw = fs.readFileSync(srcPath, 'utf8');

// Let's extract Costa Rica, Guatemala, Honduras, El Salvador blocks
// Costa Rica starts at line 46: "  {\n    slug: 'costa-rica'," and ends before "  {\n    slug: 'guatemala',"
// Guatemala starts at "  {\n    slug: 'guatemala'," and ends before "  {\n    slug: 'nicaragua',"
// Nicaragua was at 418 to 589
// Honduras starts at "  {\n    slug: 'honduras'," and ends before "  {\n    slug: 'el-salvador',"
// El Salvador starts at "  {\n    slug: 'el-salvador'," and ends before the closing "];"

const costaRicaIdx = raw.indexOf("    slug: 'costa-rica'");
const guatemalaIdx = raw.indexOf("    slug: 'guatemala'");
const nicaraguaIdx = raw.indexOf("    slug: 'nicaragua'");
const hondurasIdx = raw.indexOf("    slug: 'honduras'");
const elSalvadorIdx = raw.indexOf("    slug: 'el-salvador'");

console.log({ costaRicaIdx, guatemalaIdx, nicaraguaIdx, hondurasIdx, elSalvadorIdx });

function getBlock(startPos, endPos) {
  let block = raw.slice(startPos, endPos).trim();
  // Ensure it starts with '{' and ends with '},'
  const firstBrace = block.indexOf('{');
  const lastBrace = block.lastIndexOf('}');
  return block.slice(firstBrace, lastBrace + 1);
}

let crBlock = getBlock(costaRicaIdx - 10, guatemalaIdx - 10);
let guatBlock = getBlock(guatemalaIdx - 10, nicaraguaIdx - 10);
let hondBlock = getBlock(hondurasIdx - 10, elSalvadorIdx - 10);
let elSalBlock = getBlock(elSalvadorIdx - 10, raw.lastIndexOf('];'));

console.log('CR length:', crBlock.length);
console.log('Guat length:', guatBlock.length);
console.log('Hond length:', hondBlock.length);
console.log('ElSal length:', elSalBlock.length);

// Now update Costa Rica
crBlock = crBlock.replace(/badge: '[^']+'/, "badge: 'Date Not Planned'");
crBlock = crBlock.replace(/departures: \[[^\]]+\]/, "departures: ['Date Not Planned']");
crBlock = crBlock.replace(/heroImage: '[^']+'/, "heroImage: '/assets/webimg/19.jpg'");
crBlock = crBlock.replace(/url: '[^']+',/g, (match, offset) => {
  return match; // We will replace individually
});
// Replace CR gallery images
const crImgs = ['/assets/webimg/20.jpg', '/assets/webimg/21.jpg', '/assets/webimg/22.jpg', '/assets/webimg/23.jpg'];
let crCount = 0;
crBlock = crBlock.replace(/url: '[^']+'/g, (m) => {
  return `url: '${crImgs[crCount++]}'`;
});

// Update Guatemala
guatBlock = guatBlock.replace(/badge: '[^']+'/, "badge: 'Date Not Planned'");
guatBlock = guatBlock.replace(/departures: \[[^\]]+\]/, "departures: ['Date Not Planned']");
guatBlock = guatBlock.replace(/heroImage: '[^']+'/, "heroImage: '/assets/webimg/24.jpg'");
const guatImgs = ['/assets/webimg/25.jpg', '/assets/webimg/26.jpg', '/assets/webimg/27.jpg', '/assets/webimg/28.jpg'];
let guatCount = 0;
guatBlock = guatBlock.replace(/url: '[^']+'/g, (m) => {
  return `url: '${guatImgs[guatCount++]}'`;
});

// Update Honduras
hondBlock = hondBlock.replace(/badge: '[^']+'/, "badge: 'Date Not Planned'");
hondBlock = hondBlock.replace(/departures: \[[^\]]+\]/, "departures: ['Date Not Planned']");
hondBlock = hondBlock.replace(/heroImage: '[^']+'/, "heroImage: '/assets/webimg/29.jpg'");
const hondImgs = ['/assets/webimg/30.jpg', '/assets/webimg/2.jpg', '/assets/webimg/4.jpg', '/assets/webimg/8.jpg'];
let hondCount = 0;
hondBlock = hondBlock.replace(/url: '[^']+'/g, (m) => {
  return `url: '${hondImgs[hondCount++]}'`;
});

// Update El Salvador
elSalBlock = elSalBlock.replace(/badge: '[^']+'/, "badge: 'Date Not Planned'");
elSalBlock = elSalBlock.replace(/departures: \[[^\]]+\]/, "departures: ['Date Not Planned']");
elSalBlock = elSalBlock.replace(/heroImage: '[^']+'/, "heroImage: '/assets/webimg/6.jpg'");
const elSalImgs = ['/assets/webimg/5.jpg', '/assets/webimg/7.jpg', '/assets/webimg/9.jpg', '/assets/webimg/10.jpg'];
let elSalCount = 0;
elSalBlock = elSalBlock.replace(/url: '[^']+'/g, (m) => {
  return `url: '${elSalImgs[elSalCount++]}'`;
});

const template = fs.readFileSync('scratch/gen_template.cjs', 'utf8');
const headerAndNic = template.slice(template.indexOf('export interface'), template.lastIndexOf('console.log') - 2);

const finalFile = headerAndNic + '\n  ' + crBlock + ',\n  ' + guatBlock + ',\n  ' + hondBlock + ',\n  ' + elSalBlock + '\n];\n';

fs.writeFileSync(srcPath, finalFile, 'utf8');
console.log('Successfully wrote updated destinations.ts, new length:', finalFile.length);
