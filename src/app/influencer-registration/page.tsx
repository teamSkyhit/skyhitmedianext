import type { Metadata } from "next";
import dynamic from "next/dynamic";

const InfluencerSignup = dynamic(() => import("@/components/InfluencerSignup/InfluencerSignup"));
const ClientSection = dynamic(() => import("@/components/ClientSection"));

export const metadata: Metadata = {title: "Join the Skyhit Creator Community | Influencer Registration",
  description:
    "Join Skyhit Media's influencer network to access paid brand campaigns, fair payouts, and transparent influencer collaborations across India.",
  openGraph: {
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Skyhit Media",
      }
    ],
    title: "Join the Skyhit Creator Community",
    description:
      "Join Skyhit Media's influencer network to access paid brand campaigns, fair payouts, and transparent influencer collaborations across India.",
  },
  alternates: { canonical: "https://skyhitmedia.com/influencer-registration" },
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
};

export default function InfluencerSignupPage() {
  return (
    <>
      <InfluencerSignup />
      <ClientSection />
    </>
  );
}
