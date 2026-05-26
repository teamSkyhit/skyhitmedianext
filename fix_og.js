const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (name.endsWith('page.tsx')) {
        files.push(name);
      }
    }
  }
  return files;
}

const allFiles = getFiles('src/app');
let count = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  
  const stringImageRegex = /\s*images:\s*\[\"https:\/\/skyhitmedia\.com\/images\/Digital-Marketing-og-\.png\"\]\,?/g;
  
  if (stringImageRegex.test(content)) {
    content = content.replace(stringImageRegex, '');
    fs.writeFileSync(file, content, 'utf-8');
    count++;
    console.log('Removed images from: ' + file);
  }
}

console.log('Updated ' + count + ' files.');
