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

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace the old local image path with the new fully qualified URL
  if (content.includes('images: ["/images/header%20skyhit%20logo%20desktop.png"]')) {
    content = content.replace(
      'images: ["/images/header%20skyhit%20logo%20desktop.png"]',
      'images: ["https://skyhitmedia.com/images/Digital-Marketing-og-.png"]'
    );
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated OG Image in ' + file);
  }
}
