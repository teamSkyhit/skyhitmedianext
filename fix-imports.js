const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('page.tsx')) results.push(file);
    }
  });
  return results;
}

const pages = walk(path.join(__dirname, 'src/app'));

let changedFiles = 0;

pages.forEach(page => {
  let content = fs.readFileSync(page, 'utf8');
  let original = content;

  // Replace dynamic imports with static ones for key components
  content = content.replace(/const\s+AboutSection\s*=\s*dynamic\(\(\)\s*=>\s*import\(["']@\/components\/(?:Services\/)?AboutSection["']\)\);?/g, 'import AboutSection from "@/components/Services/AboutSection";');
  
  content = content.replace(/const\s+ServiceCardList\s*=\s*dynamic\(\(\)\s*=>\s*import\(["']@\/components\/ServiceCardList["']\)\);?/g, 'import ServiceCardList from "@/components/ServiceCardList";');

  // Also replace some general ones if they are always near top
  content = content.replace(/const\s+ClientSection\s*=\s*dynamic\(\(\)\s*=>\s*import\(["']@\/components\/ClientSection["']\)\);?/g, 'import ClientSection from "@/components/ClientSection";');
  
  if (content !== original) {
    fs.writeFileSync(page, content);
    changedFiles++;
  }
});

console.log(`Updated ${changedFiles} files with static imports for above-the-fold components.`);
