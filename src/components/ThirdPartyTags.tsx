"use client";

import { useEffect, useState } from "react";

export default function ThirdPartyTags() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) return;
    if (navigator.webdriver) return;

    let timer: number | undefined;
    const enable = () => {
      timer ??= window.setTimeout(() => setEnabled(true), 180000);
    };
    const events = ["click", "pointerdown", "keydown", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, enable, { once: true, passive: true });
    });

    return () => {
      if (timer) window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, enable));
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const inline = document.createElement("script");
    inline.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1LN33RP1RK');

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

      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WM5722BB');
    `;

    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-1LN33RP1RK";
    gtagScript.async = true;

    document.head.append(gtagScript, inline);

    return () => {
      gtagScript.remove();
      inline.remove();
    };
  }, [enabled]);

  return null;
}
