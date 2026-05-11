import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Services/HeroSection";
import ServiceHeroPreload from "@/components/Services/HeroPreload";

const AboutSection = dynamic(() => import("@/components/Services/AboutSection"));
const ServiceCardList = dynamic(() => import("@/components/ServiceCardList"));
const WhyChooseUsSection = dynamic(() => import("@/components/Services/WhyChooseUsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const ReviewSection = dynamic(() => import("@/components/Services/ReviewSection"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const LazySection = dynamic(() => import("@/components/LazySection"));

const serviceData = {
  deskImgLink: "/images/cyber-security-hero-section-skyhitmedia.webp",
  mobImgLink: "/images/cyber-security-hero-section-skyhitmedia-mob.webp",
  title: "Cyber Security Services",
  subTitle:
    "Cyber Security Services at SKYHIT Media - Advanced Solutions to Protect Your Business from Cyber Threats, Data Breaches & Online Vulnerabilities.",
};

const cardData = [
  {
    icon: "/images/network-security-icon.png",
    image: "/images/network-security-skyhitmedia.webp",
    title: "NetWork Security",
    description: "Network security protects systems from cyber threats by implementing firewalls, encryption, intrusion detection, and access controls to ensure data integrity. ",
    link: "#",
  },
  {
    icon: "/images/endpoint-security-icon.png",
    image: "/images/end-point-security-skyhitmedia.webp",
    title: "Source Code Review",
    description: "Source code review analyzes application code to detect security vulnerabilities, ensuring robust protection, compliance, and code integrity against potential threats. ",
    link: "#",
  },
  {
    icon: "/images/data-encryption-icon.png",
    image: "/images/data-encryption-skyhitmedia.webp",
    title: "Data Encryption",
    description: "Encrypt sensitive data to ensure it remains confidential and secure, even if intercepted, both in transit and at rest ",
    link: "#",
  },
  {
    icon: "/images/incident-response-icon.png",
    image: "/images/incident-response--skyhitmedia.webp",
    title: "BlockChain Security",
    description: "Blockchain security safeguards decentralized applications, smart contracts, and transactions by identifying vulnerabilities, ensuring data integrity, compliance, and protection against cyber threats. ",
    link: "#",
  },
  {
    icon: "/images/threat-hunting-icon.png",
    image: "/images/threat-hunting-skyhitmedia.webp",
    title: "Ransomware Data Recovery",
    description: "Ransomware data recovery restores encrypted files, mitigates damage, and strengthens security measures to prevent future cyberattacks and data loss incidents. ",
    link: "#",
  },
  {
    icon: "/images/cloud--security-icon.png",
    image: "/images/cloud-security-skyhitmedia.webp",
    title: "Cloud Security",
    description: "Protect cloud-based systems and data with secure access control, encryption, and monitoring to ensure safe cloud operations ",
    link: "#",
  },
  {
    icon: "/images/penetration-security-icon.png",
    image: "/images/penetration-testing-skyhitmedia.webp",
    title: "Web/ Mobile   Application Penetration Testing",
    description: "Web and mobile application penetration testing identifies vulnerabilities, ensuring security, compliance, and protection against cyber threats for businesses. ",
    link: "#",
  },
  {
    icon: "/images/iam--security-icon.png",
    image: "/images/identity-access-skyhitmedia.webp",
    title: "Identity and Access Management (IAM)",
    description: "Control user access to systems and data, ensuring that only authorized individuals can access sensitive resources ",
    link: "#",
  },
  {
    icon: "/images/siem-icon.png",
    image: "/images/siem-management--skyhitmedia.webp",
    title: "Security Information and Event Management (SIEM)",
    description: "Collect, analyze, and monitor security-related data from across your organization for early detection of potential threats ",
    link: "#",
  },
  {
    icon: "/images/compilance-risk--security-icon.png",
    image: "/images/risk-management-skyhitmedia.webp",
    title: "Automation & Artificial Intelligence",
    description: "Automation and artificial intelligence streamline processes, enhance efficiency, reduce errors, and enable data-driven decisions for smarter, faster business solutions.  ",
    link: "#",
  },
  {
    icon: "/images/vulnerability--security-icon.png",
    image: "/images/vulnerability-management-skyhitmedia.webp",
    title: "Vulnerability Management",
    description: "Identify, assess, and prioritize vulnerabilities in your systems to implement timely fixes before they can be exploited",
    link: "#",
  },
  {
    icon: "/images/managed--security-icon.png",
    image: "/images/managed-security-services-skyhitmedia.webp",
    title: "Managed Security Services",
    description: "Outsource security operations to experts who continuously monitor and manage your systems, ensuring constant protection from evolving threats ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Meghana",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Excellent cybersecurity solutions! They protected our website from attacks and improved our overall security. Great service!",
  },
  {
    name: "Rakesh",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Skyhit Media's security measures gave us peace of mind. Our systems are now safe from hackers and data breaches!",
  },
  {
    name: "Santhosh",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Their cybersecurity expertise is top-notch! Skyhit Media helped us prevent threats and strengthen our digital defenses. Excellent support!",
  },
];

const faqs = [
  {
    question: "Cyber Security Services by Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["At <b>Skyhit Media,</b> we specialize in providing top-notch Cyber Security Services to protect your business from digital threats. As a leading <b>cyber security agency</b> in Hyderabad, we understand the critical importance of safeguarding your online presence, data, and networks from potential risks."],
        },
        {
          headings: ["Why Choose Skyhit Media for Cyber Security Services?", ""],
          texts: ["In today's digital world, businesses face a growing number of cyber threats. <b>Skyhit Media</b> offers a range of <b>cyber security services</b> to keep your business safe and secure. Whether you're looking for <b>cyber security in Hyderabad</b> or across India, we have the expertise and experience to provide the best protection for your systems and data."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Cyber Security Services for Your Website | Skyhit Media",
  description:
    "Cyber Security Services by Skyhit Media protect your website from online threats. Ensure the safety of your data and users with our expert cyber security solutions.",
};

export default function CyberPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/cyber-security-hero-section-skyhitmedia.webp" mobImg="/images/cyber-security-hero-section-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Trusted Cyber Security Solutions"
          description1="Protect your business with top-tier cyber security services from leading companies in India and Hyderabad. We offer comprehensive cyber security solutions, including threat detection, data protection, and risk management."
          description2="Our expert team ensures your digital infrastructure is secure, with tailored services to meet your unique needs. As one of the top cyber security companies, we provide reliable, cutting-edge protection to safeguard your business from evolving cyber threats."
          imageUrl="/images/cyber-security-2ndsection-vector-skyhitmedia.webp"
          altText="Reliable Cyber Security Services"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Expert Cyber Security Services We Offer"
          sectionDescription="Comprehensive cyber security for every need"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Cybersecurity Services"
          subTitle="Expert solutions to safeguard your business from cyber threats"
          description1="Effective Cyber Security Marketing Strategies"
          description2="Our cyber security marketing strategies are designed to elevate your brand's presence in India and Hyderabad. We focus on building trust, showcasing top-tier services, and reaching potential clients with precision. As one of the top cyber security companies, we use targeted campaigns and proven techniques to position your business as a leader in digital security solutions."
          buttonText="Contact Us"
          videoUrl="/images/Best-DigitaI-Marketing-Agency-skyhit-media.mp4"
          videoLabel="Play Video"
        />
        <TestimonialsSection
          testimonials={testimonials}
          title="CLIENT REVIEWS"
          subtitle="What People Say About Us?"
        />
        <FAQ faqs={faqs} />
        <GetInTouch />
      </LazySection>
    </>
  );
}
