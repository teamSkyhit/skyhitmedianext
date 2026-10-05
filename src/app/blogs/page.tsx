import BlogsClient from "./BlogsClient";
import { preload } from "react-dom";
import { getOptimizedImageUrl } from "@/utils/imageProxy";

export const metadata = {
  title: "Blogs | Skyhit Media - Official Website",
  description:
    "Explore the Skyhit Media blog for insights into digital marketing, web design, and SEO.",
  alternates: {
    canonical: "https://skyhitmedia.com/blogs/",
  },
};

export const dynamic = "auto";

async function getBlogs() {
  try {
    const response = await fetch(
      "https://blog.dxbhost.agency/api/public/blogs?limit=500",
      {
        headers: {
          Authorization: "Bearer 48669a42-6c64-4a7b-88bc-9636ad959fb2",
        },
      },
    );
    if (!response.ok) return [];
    const data = await response.json();
    return data.blogs || [];
  } catch (err) {
    return [];
  }
}

export default async function Page() {
  const blogs = await getBlogs();
  // 1. Preload the top banner image
  const bannerImage = "https://rameehotels.com/images/ramee-blogs-banner.webp";
  const optimizedMobileBanner = getOptimizedImageUrl(bannerImage, 380, 35);
  const optimizedDesktopBanner = getOptimizedImageUrl(bannerImage, 1200, 45);

  if (optimizedMobileBanner) {
    preload(optimizedMobileBanner, {
      as: "image",
      fetchPriority: "high",
      media: "(max-width: 768px)",
    });
  }
  if (optimizedDesktopBanner) {
    preload(optimizedDesktopBanner, {
      as: "image",
      fetchPriority: "high",
      media: "(min-width: 769px)",
    });
  }

  // 2. Preload the first blog post card image
  const firstBlogImage = blogs[0]?.featuredImage?.url;
  if (firstBlogImage) {
    const optimizedFirstBlogImg = getOptimizedImageUrl(firstBlogImage, 400, 50);
    if (optimizedFirstBlogImg) {
      preload(optimizedFirstBlogImg, {
        as: "image",
        fetchPriority: "high",
      });
    }
  }
  return <BlogsClient initialBlogs={blogs} />;
}
