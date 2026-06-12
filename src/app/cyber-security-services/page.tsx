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
          texts: ["At <b>Skyhit Media,</b> we specialize in providing top-notch Cyber Security Services to protect your business from digital threats. As a leading <b>cyber security agency</b> in Hyderabad, we understand the critical importance of safeguarding your online presence, data, and networks from potential risks. Our team of experts delivers comprehensive <b>cyber security solutions</b> designed to ensure the safety and integrity of your business in the ever-evolving digital landscape."]

        },
        {
          headings: ["Why Choose Skyhit Media for Cyber Security Services?", ""],
          texts: ["In today’s digital world, businesses face a growing number of cyber threats. From data breaches to ransomware attacks, it’s essential to protect your sensitive information and online systems. <b>Skyhit Media</b> offers a range of <b>cyber security services</b> to keep your business safe and secure. Whether you’re looking for <b>cyber security in Hyderabad</b> or across India, we have the expertise and experience to provide the best protection for your systems and data. <br></br>", "As one of the <b>top cyber security companies in India</b>, we offer tailored solutions to meet the unique needs of your business. Our services are designed to address various cyber threats and vulnerabilities, ensuring that your business remains protected at all times."],
        },
        {
          headings: ["Our Cyber Security Services", ""],
          texts: ["We provide a wide range of <b>cyber security services</b> to safeguard your business against potential risks. Here’s an overview of the services we offer: <br></br>"],
          list: ["<b>Network Security: </b> Our <b>network security</b> solutions help protect your business's internal network from unauthorized access, attacks, and data breaches. We ensure that your data and communication systems remain secure from external and internal threats .<br></br>", "<b>Source Code Review: </b> A comprehensive <b>source code review</b> helps identify vulnerabilities in your software’s code. We thoroughly analyze your application’s code to detect and fix security flaws, ensuring your software is protected from cyber attacks.<br></br>", "<b>Data Encryption:</b>  We provide <b>data encryption</b> services to ensure that your sensitive information is kept safe from hackers. With our encryption techniques, your data remains protected even if it’s intercepted during transmission.<br></br>", "<b>Blockchain Security:</b>  As blockchain technology becomes more widespread, securing blockchain systems is critical. We offer <b>blockchain security</b> services to safeguard your digital transactions and prevent potential fraud or data manipulation.<br></br>", "<b>Ransomware Data Recovery: </b> Ransomware attacks can be devastating to your business. We provide ransomware data recovery services to help recover your files and data in the event of an attack, minimizing downtime and restoring your operations quickly.<br></br>", "<b>Cloud Security: </b> With more businesses shifting to the cloud, cloud security has become essential. Our services help secure your cloud infrastructure, applications, and data, ensuring that your business is protected from cyber threats.<br></br>", "<b>Web/Mobile Application Penetration Testing: </b> Our <b>web and mobile application penetration testing</b> services simulate real-world cyber-attacks to identify vulnerabilities in your applications. We help you fix these vulnerabilities before they can be exploited by malicious actors.<br></br>", "<b>Identity and Access Management (IAM):</b> We offer <b>Identity and Access Management (IAM)</b> solutions to ensure that only authorized users have access to your sensitive data and systems. Our IAM services help mitigate the risk of insider threats and unauthorized access.<br></br>", "<b>Security Information and Event Management (SIEM): </b>Our <b>Security Information and Event Management (SIEM)</b> services provide real-time monitoring and analysis of your security systems. SIEM helps detect and respond to security threats faster, reducing the risk of potential breaches.<br></br>", "<b>Automation & Artificial Intelligence: </b>We use <b>automation</b> and <b>artificial intelligence</b> to improve the efficiency and effectiveness of our <b>cyber security services.</b> AI-powered tools help identify patterns and threats faster, allowing us to provide proactive security measures for your business.<br></br>", "<b>Vulnerability Management: </b> Our <b>vulnerability management</b> services involve continuously scanning and monitoring your systems for weaknesses. We identify potential vulnerabilities and provide solutions to fix them, reducing the risk of attacks on your business.<br></br>", "<b>Managed Security Services:</b> We offer <b>managed security services</b> to monitor and manage your cyber security on an ongoing basis. Our team ensures your business is continuously protected, helping you stay ahead of <a href='https://en.wikipedia.org/wiki/Cyberattack' target=_'blanket'><b>cyber threats</b></a>.<br></br>"]
        },
        {
          headings: ["Why Skyhit Media is the Best Cyber Security Company", ""],
          texts: ["As a trusted <b>cyber security company in Hyderabad</b>, we pride ourselves on offering the best <b>cyber security solutions</b> for businesses of all sizes. We have a team of highly skilled professionals who are committed to providing personalized security strategies to meet your specific needs. Our services are designed to give you peace of mind, knowing that your data and networks are fully protected.<br></br>", "We are also recognized as one of the <b>top cyber security companies in India</b>, offering cutting-edge technology and innovative solutions. Whether you’re a small business looking for basic protection or a large enterprise requiring advanced security measures, <b>Skyhit Media</b> has the expertise to secure your systems effectively."]
        },
        {
          headings: ["Get in Touch with Skyhit Media for Cyber Security Services", ""],
          texts: ["If you’re looking for reliable <b>cyber security services, Skyhit Media</b> is your go-to partner. We provide a comprehensive range of <b>cyber security services</b> designed to protect your business from online threats and data breaches. Our team is ready to help you safeguard your systems and ensure the safety of your sensitive data.<br></br>", "Contact us today to learn more about how our <b>cyber security services</b> can help protect your business from cyber threats and keep your data secure.<br></br>", "At <a href='/' ><b>Skyhit Media</b></a>, we understand the importance of having strong <b>cyber security solutions</b> in place. From <b>network security</b> to <b>managed security services</b>, we offer comprehensive solutions tailored to your business’s unique needs. Whether you’re looking for <b>cyber security companies near me</b> or need <b>cyber security in Hyderabad</b>, we are here to provide you with the best protection."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {
  title: "#1 Cyber Security Services for Your Website | Skyhit Media",
  description:
    "Cyber Security Services by Skyhit Media protect your website from online threats. Ensure the safety of your data and users with our expert cyber security solutions.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    images: [
      {
        url: "https://www.skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Skyhit Media",
      }
    ],
    title: "#1 Cyber Security Services for Your Website | Skyhit Media",
    description: "Cyber Security Services by Skyhit Media protect your website from online threats. Ensure the safety of your data and users with our expert cyber security solutions.",
    url: "https://www.skyhitmedia.com/cyber-security-services",
  },
  alternates: { canonical: "https://www.skyhitmedia.com/cyber-security-services" },
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
