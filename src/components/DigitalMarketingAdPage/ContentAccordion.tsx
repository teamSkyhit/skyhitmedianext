import FAQ from "@/components/FAQ";
import { getLocationSEOContent } from "@/data/locationSEOContent";

interface ContentAccordionProps {
  locationName?: string;
  customIntro?: string;
}

export default function ContentAccordion({ locationName, customIntro }: ContentAccordionProps) {
  const loc = locationName || "Hyderabad";
  const defaultSections = getLocationSEOContent(loc);

  let finalSections = defaultSections;
  let customTitle = "";
  let finalIntroText = customIntro;

  if (customIntro) {
    // If customIntro contains <br><br>, split it to use the first part as the title
    if (customIntro.includes("<br><br>")) {
      const parts = customIntro.split("<br><br>");
      customTitle = parts[0];
      finalIntroText = parts.slice(1).join("<br><br>");
    }

    // Replace the first section's texts with the custom intro text
    finalSections = [
      { texts: [finalIntroText as string] },
      ...defaultSections.slice(1)
    ];
  }

  const contentData = [
    {
      question: customTitle || `Why Businesses in ${loc} Choose SKYHIT Media`,
      answer: {
        sections: finalSections
      }
    }
  ];

  return (
    <section className="bg-slate-50 relative z-10 -mb-10">
      <FAQ faqs={contentData} />
    </section>
  );
}
