const fs = require('fs');
const path = require('path');

const srcPath = path.resolve('src/data/destinations.ts');
let content = fs.readFileSync(srcPath, 'utf8');

// Let's write a node script that updates destinations.ts safely
console.log('Original length:', content.length);
