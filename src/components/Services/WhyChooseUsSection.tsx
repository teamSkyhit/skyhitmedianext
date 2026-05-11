interface WhyChooseUsSectionProps {
  title: string;
  subTitle: string;
  description1: string;
  description2: string;
  buttonText: string;
  videoUrl: string;
  videoLabel: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  title,
  subTitle,
  description1,
  description2,
  buttonText,
  videoUrl,
  videoLabel
}) => {
  return (
    <section className="bg-[#5F6B70] text-white py-12 px-6 lg:py-18 lg:px-20">
      <div className="flex flex-col text-center">
        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">{title}</h4>
        <p className="text-white/90 mb-6">{subTitle}</p>
      </div>
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-12 items-center justify-between max-sm:flex-col-reverse">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          <h5 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            {description1}
          </h5>
          <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed mb-6">
            {description2}
          </p>
          <a href="/contact" rel="noopener noreferrer">
            <button className="bg-[#DCBE9E] text-[#5F6B70] py-3 px-8 rounded-full font-medium hover:bg-[#c5a987] transition-colors">
              {buttonText}
            </button>
          </a>
        </div>

        {/* Right Content */}
        <div className="relative w-full flex justify-center items-center flex-1">
          {/* Video that plays immediately */}
          <video
            src={videoUrl}
            controls
            autoPlay
            muted // Optionally mute the video by default
            className="w-full h-auto rounded-md"
            aria-label={videoLabel}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
