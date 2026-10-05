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
  
  const metaRegex = /export const metadata\s*:\s*Metadata\s*=\s*\{([\s\S]*?)\};/m;
  const match = content.match(metaRegex);
  
  if (match) {
    const metaBody = match[1];
    
    // Only process if it lacks keywords or openGraph
    if (!metaBody.includes('keywords:') || !metaBody.includes('openGraph:')) {
      
      let titleMatch = metaBody.match(/title:\s*(["'`])([\s\S]*?)\1/);
      let descMatch = metaBody.match(/description:\s*(["'`])([\s\S]*?)\1/);
      
      if (titleMatch && descMatch) {
        let title = titleMatch[2].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        let desc = descMatch[2].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        
        let newMetaBody = metaBody;
        
        if (!newMetaBody.includes('keywords:')) {
          const defaultKeywords = '["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"]';
          // insert before the end of the metadata block
          newMetaBody = newMetaBody.trim() + `\n  keywords: ${defaultKeywords},`;
        }
        
        if (!newMetaBody.includes('openGraph:')) {
          let route = file.replace(path.normalize('src/app'), '').replace(path.normalize('/page.tsx'), '').replace(path.normalize('\\page.tsx'), '');
          route = route.replace(/\\/g, '/');
          const url = `https://skyhitmedia.com${route}`;
          
          const ogString = `\n  openGraph: {\n    title: "${title.replace(/"/g, '\\"')}",\n    description: "${desc.replace(/"/g, '\\"')}",\n    url: "${url}",\n    images: ["/images/header%20skyhit%20logo%20desktop.png"],\n  },`;
          
          newMetaBody = newMetaBody + ogString;
        }

        if (!newMetaBody.includes('alternates:')) {
          let route = file.replace(path.normalize('src/app'), '').replace(path.normalize('/page.tsx'), '').replace(path.normalize('\\page.tsx'), '');
          route = route.replace(/\\/g, '/');
          const url = `https://skyhitmedia.com${route}`;
          newMetaBody = newMetaBody + `\n  alternates: { canonical: "${url}" },`;
        }
        
        const newMetaBlock = `export const metadata: Metadata = {${newMetaBody}\n};`;
        content = content.replace(match[0], newMetaBlock);
        
        fs.writeFileSync(file, content, 'utf-8');
        console.log('Updated metadata in ' + file);
      }
    }
  }
}
