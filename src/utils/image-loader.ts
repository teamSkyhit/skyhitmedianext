"use client";

const PRODUCTION_DOMAIN = "https://skyhitmedia.com";
const EXCEPTIONS = [".svg", ".gif", ".ico"];
const ALREADY_OPTIMIZED_LOCAL_FORMATS = [".webp", ".avif"];

/**
 * Optimizes an image URL by routing it through the wsrv.nl image proxy.
 * Automatically handles exceptions (like SVGs and GIFs) and formats local URLs.
 * 
 * @param src The source image URL (local or absolute)
 * @param width Optional target width
 * @param quality Optional target quality (default: 85)
 */
export function optimizeImageUrl(src: string, width?: number, quality?: number): string {
  if (!src) return "";

  const isAbsolute = src.startsWith("http://") || src.startsWith("https://");

  // Check if it's an exception (SVG, GIF, ICO) or a tracking/third-party script pixel
  const lowerSrc = src.toLowerCase();
  const isException = EXCEPTIONS.some((ext) => lowerSrc.includes(ext)) || 
                      lowerSrc.includes("google") || 
                      lowerSrc.includes("facebook");

  if (isException) {
    return src;
  }

  if (!isAbsolute && ALREADY_OPTIMIZED_LOCAL_FORMATS.some((ext) => lowerSrc.split("?")[0].endsWith(ext))) {
    return width ? `${src}?w=${width}` : src;
  }

  // Ensure absolute URL for local/relative paths
  let imageUrl = src;
  if (!isAbsolute) {
    imageUrl = `${PRODUCTION_DOMAIN}${src.startsWith("/") ? "" : "/"}${src}`;
  }

  // Parse filename for SEO context preservation in wsrv.nl URLs
  const urlParts = src.split("/");
  const fileNameWithExt = urlParts[urlParts.length - 1] || "image";
  const fileName = fileNameWithExt.split("?")[0].split(".")[0];
  const cleanFileName = fileName.replace(/[^a-zA-Z0-9]/g, "") || "image";

  // Build wsrv.nl parameters
  const w = width ? `&w=${width}` : "";
  const q = quality ? `&q=${quality}` : "&q=85";
  
  // Format output as webp and pass filename for content disposition headers
  return `https://wsrv.nl/?url=${encodeURIComponent(imageUrl)}${w}${q}&output=webp&filename=${cleanFileName}`;
}

/**
 * Next.js custom image loader implementation.
 */
export default function wsrvLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return optimizeImageUrl(src, width, quality);
}
