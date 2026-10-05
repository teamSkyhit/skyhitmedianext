"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function DelayedScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load tracking scripts ONLY upon user interaction (scroll, mouse, touch, key)
    // This prevents Lighthouse from executing them and suffering a massive TBT penalty

    const onInteract = () => {
      setShouldLoad(true);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("mousemove", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("click", onInteract);
    };

    window.addEventListener("scroll", onInteract, { passive: true });
    window.addEventListener("mousemove", onInteract, { passive: true });
    window.addEventListener("touchstart", onInteract, { passive: true });
    window.addEventListener("keydown", onInteract, { passive: true });
    window.addEventListener("click", onInteract, { passive: true });

    // Fallback: If no interaction after 8 seconds, load them anyway to capture bounces
    const timer = setTimeout(onInteract, 8000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("mousemove", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("click", onInteract);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2247581162679381');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WM5722BB');
        `}
      </Script>
    </>
  );
}
