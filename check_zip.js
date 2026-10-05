const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // Let's use PowerShell's Expand-Archive or simple .NET via node exec
  const psCommand = `powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::OpenRead('skyhitmedia_export.zip').Entries | ForEach-Object { $_.FullName } | Where-Object { $_ -like '*php*' -or $_ -like '*upload*' }"`;
  const output = execSync(psCommand, { encoding: 'utf-8' });
  console.log("ZIP Contents matching search:");
  console.log(output);
} catch (err) {
  console.error("Error executing command:", err.message);
}
