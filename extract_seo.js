const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (name.endsWith('page.tsx') || name.endsWith('layout.tsx')) {
        files.push(name);
      }
    }
  }
  return files;
}

const allFiles = getFiles('src/app');

function extractValue(content, field) {
  const metaMatch = content.match(/export const metadata.*?=.*?\{([\s\S]*?)\};/);
  let metaContent = content;
  if (metaMatch) {
     metaContent = metaMatch[1];
  }

  // Try string match (single, double or backtick quotes)
  const strRegex = new RegExp(field + '\\s*:\\s*(["\'`])([\\s\\S]*?)\\1');
  const strMatch = metaContent.match(strRegex);
  if (strMatch) return strMatch[2].replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();

  // Try array match
  const arrRegex = new RegExp(field + '\\s*:\\s*\\[([\\s\\S]*?)\\]');
  const arrMatch = metaContent.match(arrRegex);
  if (arrMatch) {
     return arrMatch[1].replace(/["'`\r\n]/g, '').split(',').map(s => s.trim()).filter(Boolean).join(', ');
  }

  // Try object match (e.g. for title)
  const objRegex = new RegExp(field + '\\s*:\\s*\\{([\\s\\S]*?)\\}');
  const objMatch = metaContent.match(objRegex);
  if (objMatch) {
     return '{ ' + objMatch[1].replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim() + ' }';
  }

  return '';
}

const results = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  if (content.includes('export const metadata')) {
    let route = file.replace(path.normalize('src/app'), '').replace(path.normalize('/page.tsx'), '').replace(path.normalize('\\page.tsx'), '');
    if (route === '' || route === '\\' || route === '/') route = '/ (Home)';
    if (file.endsWith('layout.tsx')) route = route.replace(/layout\.tsx/g, '') + ' (Layout)';
    
    // clean up slashes
    route = route.replace(/\\/g, '/');

    const title = extractValue(content, 'title');
    const description = extractValue(content, 'description');
    const keywords = extractValue(content, 'keywords');
    
    results.push({ route, title, description, keywords });
  }
}

let md = '| Page Route | Title | Description | Keywords |\n';
md += '|---|---|---|---|\n';
results.forEach(r => {
  md += `| ${r.route} | ${r.title} | ${r.description} | ${r.keywords} |\n`;
});

fs.writeFileSync('seo_metadata.md', md);
console.log('Saved to seo_metadata.md');
