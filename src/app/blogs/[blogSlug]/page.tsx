import { notFound } from "next/navigation";
import SingleBlogClient from "./SingleBlogClient";
import { preload } from "react-dom";
import { getOptimizedImageUrl } from "@/utils/imageProxy";

async function getBlogData(slug: string) {
  try {
    const response = await fetch(
      "https://blog.dxbhost.agency/api/public/blogs?limit=500",
      {
        headers: {
          Authorization: "Bearer 48669a42-6c64-4a7b-88bc-9636ad959fb2",
        },
      },
    );
    if (!response.ok) return null;
    const data = await response.json();
    const blogs = data.blogs || [];
    return blogs.find((b: any) => b.slug === slug);
  } catch (err) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;
  const blog = await getBlogData(blogSlug);
  if (!blog) return {};
  return {
    title: `${blog.metaTitle || blog.title} | Skyhit Media`,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [
        blog.featuredImage?.url ||
          "https://skyhitmedia.com/images/Ramee-logo.png",
      ],
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
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
    const blogs = data.blogs || [];
    return blogs.map((blog: any) => ({
      blogSlug: blog.slug,
    }));
  } catch (err) {
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;
  const blog = await getBlogData(blogSlug);
  if (!blog) {
    notFound();
  }
  // Preload the featured image for LCP
  const featuredImageUrl = blog.featuredImage?.url;
  if (featuredImageUrl) {
    const optimizedMobileImg = getOptimizedImageUrl(featuredImageUrl, 380, 45);
    const optimizedDesktopImg = getOptimizedImageUrl(
      featuredImageUrl,
      1200,
      55,
    );
    if (optimizedMobileImg) {
      preload(optimizedMobileImg, {
        as: "image",
        fetchPriority: "high",
        media: "(max-width: 768px)",
      });
    }
    if (optimizedDesktopImg) {
      preload(optimizedDesktopImg, {
        as: "image",
        fetchPriority: "high",
        media: "(min-width: 769px)",
      });
    }
  }
  return <SingleBlogClient blog={blog} />;
}
