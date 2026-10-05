const fs = require("fs");
const path = require("path");
const vm = require("vm");

const APP_DIR = path.join("src", "app");
const OUTPUT_FILE = "seo_metadata.md";
const SITE_URL = "https://skyhitmedia.com";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.name === "page.tsx" || entry.name === "layout.tsx") {
      files.push(fullPath);
    }
  }
  return files.sort();
}

function extractObjectLiteral(source) {
  const marker = "export const metadata";
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return null;

  const start = source.indexOf("{", markerIndex);
  if (start === -1) return null;

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = start; i < source.length; i += 1) {
    const char = source[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(start, i + 1);
      }
    }
  }

  return null;
}

function readMetadata(file) {
  const source = fs.readFileSync(file, "utf8");
  const objectLiteral = extractObjectLiteral(source);
  if (!objectLiteral) return null;

  try {
    return vm.runInNewContext(`(${objectLiteral})`, { URL });
  } catch (error) {
    return { parseError: error.message, raw: objectLiteral };
  }
}

function routeFromFile(file) {
  const relative = path.relative(APP_DIR, file).replace(/\\/g, "/");
  if (relative === "layout.tsx") return "(root layout)";
  if (relative === "page.tsx") return "/";
  return `/${relative.replace(/\/page\.tsx$/, "")}`;
}

function pageNameFromRoute(route) {
  if (route === "/") return "Home";
  if (route === "(root layout)") return "Root layout defaults";
  return route
    .replace(/^\//, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function escapeTable(value) {
  return String(value ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ")
    .trim();
}

function formatInline(value) {
  if (value === undefined || value === null || value === "") return "Not set";
  if (value instanceof URL) return value.toString();
  if (Array.isArray(value)) {
    return value.map((item) => formatInline(item)).join(", ");
  }
  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, nestedValue]) => `${key}: ${formatInline(nestedValue)}`)
      .join("; ");
  }
  return String(value);
}

function formatCode(value) {
  const formatted = formatInline(value);
  return formatted === "Not set" ? formatted : `\`${formatted}\``;
}

function canonicalFor(route, metadata) {
  if (metadata?.alternates?.canonical) return formatInline(metadata.alternates.canonical);
  if (metadata?.openGraph?.url) return formatInline(metadata.openGraph.url);
  if (route === "/") return `${SITE_URL}/`;
  if (route.startsWith("/")) return `${SITE_URL}${route}`;
  return "Not set";
}

function imageList(images) {
  if (!images) return "Not set";
  if (Array.isArray(images)) {
    return images
      .map((image) => {
        if (typeof image === "string") return image;
        return [image.url, image.width && image.height ? `${image.width}x${image.height}` : "", image.alt ? `alt: ${image.alt}` : ""]
          .filter(Boolean)
          .join(" | ");
      })
      .join("; ");
  }
  return formatInline(images);
}

const files = walk(APP_DIR);
const pages = files.filter((file) => file.endsWith("page.tsx"));
const records = files.map((file) => ({
  file,
  route: routeFromFile(file),
  name: pageNameFromRoute(routeFromFile(file)),
  metadata: readMetadata(file),
}));

const layoutRecord = records.find((record) => record.route === "(root layout)");
const pageRecords = records
  .filter((record) => record.file.endsWith("page.tsx"))
  .sort((a, b) => a.route.localeCompare(b.route));

let md = "# Skyhit Media Metadata Documentation\n\n";
md += "Generated from `src/app/**/page.tsx` and `src/app/layout.tsx`.\n\n";

md += "## Page Metadata Summary\n\n";
md += "| Route | Metadata Source | Title | Description | Canonical / OG URL |\n";
md += "| --- | --- | --- | --- | --- |\n";
for (const record of pageRecords) {
  const metadata = record.metadata;
  const source = metadata ? "Page export" : "Inherits root layout";
  md += `| \`${record.route}\` | ${source} | ${escapeTable(metadata?.title ?? layoutRecord?.metadata?.title ?? "Not set")} | ${escapeTable(metadata?.description ?? layoutRecord?.metadata?.description ?? "Not set")} | ${escapeTable(canonicalFor(record.route, metadata))} |\n`;
}

md += "\n## Root Layout Defaults\n\n";
if (layoutRecord?.metadata) {
  const metadata = layoutRecord.metadata;
  md += `- **File**: \`${layoutRecord.file.replace(/\\/g, "/")}\`\n`;
  md += `- **Metadata Base**: ${formatCode(metadata.metadataBase)}\n`;
  md += `- **Title**: ${formatCode(metadata.title)}\n`;
  md += `- **Description**: ${formatCode(metadata.description)}\n`;
  md += `- **Keywords**: ${formatCode(metadata.keywords)}\n`;
  md += `- **Icons**: ${formatCode(metadata.icons)}\n`;
  md += `- **OpenGraph**: ${formatCode(metadata.openGraph)}\n`;
  md += `- **Twitter**: ${formatCode(metadata.twitter)}\n`;
  md += `- **Robots**: ${formatCode(metadata.robots)}\n`;
  md += `- **Verification**: ${formatCode(metadata.verification)}\n`;
} else {
  md += "No root layout metadata export found.\n";
}

md += "\n## Page-by-Page Details\n\n";
for (const record of pageRecords) {
  const metadata = record.metadata;
  md += `### ${record.name} (\`${record.route}\`)\n\n`;
  md += `- **File**: \`${record.file.replace(/\\/g, "/")}\`\n`;

  if (!metadata) {
    md += "- **Page Metadata Export**: Not set. This page inherits the root layout metadata defaults.\n";
    md += `- **Inherited Title**: ${formatCode(layoutRecord?.metadata?.title)}\n`;
    md += `- **Inherited Description**: ${formatCode(layoutRecord?.metadata?.description)}\n\n`;
    continue;
  }

  if (metadata.parseError) {
    md += `- **Parse Error**: \`${metadata.parseError}\`\n`;
    md += "- **Raw Metadata**:\n\n";
    md += "```ts\n";
    md += metadata.raw;
    md += "\n```\n\n";
    continue;
  }

  md += `- **Title**: ${formatCode(metadata.title)}\n`;
  md += `- **Description**: ${formatCode(metadata.description)}\n`;
  md += `- **Keywords**: ${formatCode(metadata.keywords)}\n`;
  md += `- **Canonical**: ${formatCode(metadata.alternates?.canonical)}\n`;
  md += `- **OpenGraph Title**: ${formatCode(metadata.openGraph?.title)}\n`;
  md += `- **OpenGraph Description**: ${formatCode(metadata.openGraph?.description)}\n`;
  md += `- **OpenGraph URL**: ${formatCode(metadata.openGraph?.url)}\n`;
  md += `- **OpenGraph Images**: ${formatCode(imageList(metadata.openGraph?.images))}\n`;
  md += `- **Twitter**: ${formatCode(metadata.twitter)}\n`;
  md += `- **Robots**: ${formatCode(metadata.robots)}\n\n`;
}

const pagesWithoutMetadata = pageRecords.filter((record) => !record.metadata);
md += "## Coverage Notes\n\n";
md += `- Total page routes found: ${pages.length}\n`;
md += `- Page routes with their own metadata export: ${pageRecords.length - pagesWithoutMetadata.length}\n`;
md += `- Page routes inheriting root metadata only: ${pagesWithoutMetadata.length}`;
if (pagesWithoutMetadata.length > 0) {
  md += ` (${pagesWithoutMetadata.map((record) => `\`${record.route}\``).join(", ")})`;
}
md += "\n";

fs.writeFileSync(OUTPUT_FILE, md);
console.log(`Saved ${OUTPUT_FILE}`);
