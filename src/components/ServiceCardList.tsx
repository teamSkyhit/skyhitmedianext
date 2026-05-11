import ServiceCard from "./ServiceCard";
import ArrowHeader from "./ArrowHeader";

interface ServiceCardListProps {
  services: {
    icon: string;
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  sectionTitle: string;
  sectionDescription: string;
}

const ServiceCardList: React.FC<ServiceCardListProps> = ({ services, sectionTitle, sectionDescription }) => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-[#F9F9F9]">
      <ArrowHeader title="SKYHIT MEDIA" />
      <h3 className="text-2xl md:text-4xl font-bold text-center text-800 mb-8 text-[#774635]">
        {sectionTitle}
      </h3>
      <p className="text-center text-xs mb-5 mt-[-15px] text-[#774635] lg:text-center lg:text-[18px] lg:mb-5 lg:mt-[-15px] lg:text-[#774635] md:text-center md:text-[18px] md:mb-5 md:mt-[-15px] md:text-[#774635]">
        {sectionDescription}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            image={service.image}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCardList;
