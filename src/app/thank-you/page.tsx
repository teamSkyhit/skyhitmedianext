"use client";

import dynamic from "next/dynamic";

const ThankYou = dynamic(() => import("@/components/AdPage/ThankYou"));

export default function ThankYouPage() {
  return <ThankYou />;
}
