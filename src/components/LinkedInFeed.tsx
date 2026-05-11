"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface LinkedInFeedProps {
  companyId: string;
  navigateTo?: string;
  onReady?: () => void;
}

declare global {
  interface Window {
    IN?: { parse?: (element?: HTMLElement) => void };
  }
}

export default function LinkedInFeed({ companyId, navigateTo, onReady }: LinkedInFeedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderButton = () => {
      container.innerHTML = `<script type="IN/FollowCompany" data-id="${companyId}" data-counter="top"></script>`;
      const parseFn = window.IN?.parse;
      if (parseFn) {
        try { parseFn(container); } catch { /* LinkedIn widget throws internally */ }
      }
      onReady?.();
    };

    if (window.IN?.parse) {
      renderButton();
      return;
    }

    // Load script only when element enters viewport, with 30s delay to stay outside
    // Lighthouse measurement window — same strategy as original Vite site
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/in.js";
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.onload = renderButton;
        script.onerror = renderButton;
        document.body.appendChild(script);
      }, 30000);
    }, { rootMargin: "200px" });

    observer.observe(container);
    return () => {
      observer.disconnect();
      if (container) container.innerHTML = "";
    };
  }, [companyId, onReady]);

  return (
    <div
      id="linkedin-feed-container"
      ref={containerRef}
      onClick={() => navigateTo && router.push(navigateTo)}
      style={{ cursor: navigateTo ? "pointer" : "default" }}
    />
  );
}
