import type { Metadata } from "next";
import ThankYou from "@/components/AdPage/ThankYou";

export const metadata: Metadata = {
  title: "Thank You | Skyhit Media",
  description: "Thank you for contacting Skyhit Media. We have received your inquiry and our team will get in touch with you shortly.",
  alternates: {
    canonical: "https://skyhitmedia.com/thank-you/",
  },
  openGraph: {
    title: "Thank You | Skyhit Media",
    description: "Thank you for contacting Skyhit Media. We have received your inquiry and our team will get in touch with you shortly.",
    url: "https://skyhitmedia.com/thank-you/",
    images: ["https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYou />;
}
