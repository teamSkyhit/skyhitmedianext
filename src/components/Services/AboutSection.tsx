import Image from "next/image";

type AboutSectionProps = {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  imageUrl: string;
  altText: string;
  buttonText?: string;      // optional
  buttonLink?: string;
};

// const AboutSection: React.FC<AboutSectionProps> = ({
//   title,
//   subtitle,
//   description1,
//   description2,
//   imageUrl,
//   altText,
// }) => {
//   return (
//     <section className="bg-[#FAF6F2] py-12 px-6 lg:px-24">
//       <div className="container mx-auto grid-cols-1 md:grid-cols-2 gap-8 items-center flex flex-col-reverse sm:grid sm:grid-cols-3 sm:gap-4">
//         {/* Left Section - Image */}
//         <div className="flex justify-center">
//           <Image
//             src={imageUrl}
//             alt={altText}
//             width={676}
//             height={440}
//             className="w-full max-w-md md:max-w-lg object-contain"
//             loading="lazy"
//           />
//         </div>

//         {/* Right Section - Content */}
//         <div>
//           <h3 className="text-secondary font-medium text-lg mb-2 lg:text-[22.4px] lg:leading-[43.4px]">
//             {title}
//           </h3>
//           <h2 className="text-secondary text-2xl md:text-4xl lg:text-4xl font-bold mb-4">
//             {subtitle}
//           </h2>
//           <p className="text-[#666] leading-relaxed mb-4">{description1}</p>
//           <p className="text-[#666] leading-relaxed">{description2}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  description1,
  description2,
  imageUrl,
  altText,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-[#FAF6F2] py-12 px-6 lg:px-24">
      <div className="container mx-auto grid-cols-1 md:grid-cols-2 gap-8 items-center flex flex-col-reverse sm:grid sm:grid-cols-2 sm:gap-8">

        {/* Left Section - Image */}
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={altText}
            width={676}
            height={440}
            className="w-full max-w-md md:max-w-lg object-contain"
            loading="lazy"
            unoptimized
          />
        </div>

        {/* Right Section - Content */}
        <div>
          <h3 className="text-[#7D4E28] font-medium text-lg mb-2 lg:text-[22.4px] lg:leading-[43.4px]">
            {title}
          </h3>

          <h2 className="text-[#7D4E28] text-2xl md:text-4xl lg:text-4xl font-bold mb-4">
            {subtitle}
          </h2>

          <p className="text-[#666] leading-relaxed mb-4">{description1}</p>
          <p className="text-[#666] leading-relaxed mb-6">{description2}</p>

          {/* Optional Button */}
          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="inline-block bg-[#9B5E35] text-white px-6 py-3 rounded-md hover:bg-[#7D4E28] transition"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
