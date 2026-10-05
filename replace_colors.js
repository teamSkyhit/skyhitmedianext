const fs = require('fs');
const path = require('path');

const directories = [
  'd:/downloads/skyhitmedia-projects/skyhitmedianext/src/components/SEOCluster',
  'd:/downloads/skyhitmedia-projects/skyhitmedianext/src/components/DigitalMarketingAdPage'
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Replace main dark brand colors with #45556C
      content = content.replace(/#162032/g, '#45556C');
      content = content.replace(/#0f172a/g, '#45556C');
      
      // Replace heavy slate colors with #45556C or brighter alternatives
      content = content.replace(/text-slate-900/g, 'text-[#45556C]');
      content = content.replace(/bg-slate-900/g, 'bg-[#45556C]');
      content = content.replace(/text-slate-800/g, 'text-[#45556C]');
      
      // Make hover states bright blue/orange instead of dark slate
      content = content.replace(/group-hover:text-slate-700/g, 'group-hover:text-sky-600');
      content = content.replace(/group-hover:text-slate-800/g, 'group-hover:text-sky-600');
      content = content.replace(/group-hover:bg-slate-800/g, 'group-hover:bg-sky-500');
      
      // Replace dark background sections to make them brighter
      content = content.replace(/bg-slate-800/g, 'bg-[#3b4b61]'); // Slightly lighter variant of #45556C
      content = content.replace(/border-slate-700/g, 'border-[#5b6e87]');
      
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
}

directories.forEach(processDirectory);
console.log('Colors replaced successfully!');
