import Image from "next/image";

const ReviewSection: React.FC = () => {
  const reviews = [
    {
      logo: "/images/google-desktop.png", // Replace with actual Google logo path
      title: "",
      stars: 5,
      // reviewCount: "150+ Reviews",
    },
    {
      logo: "/images/clutch-desktop.png", // Replace with actual Clutch logo path
      title: "",
      stars: 5,
      // reviewCount: "150+ Reviews",
    },
    {
      logo: "/images/upcity-desktop.png", // Replace with actual UpCity logo path
      title: "",
      stars: 5,
      // reviewCount: "150+ Reviews",
    },
  ];

  return (
    <>
      {/* <div
        className={`bg-white rounded-[20px] shadow-lg p-6 border border-gray-200 md:hidden`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-[#37475B] mb-4">
          Get My Free Proposal
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-6">
          We just Need a little info to{" "}
          <span className="font-bold text-[#37475B]">Get Started</span>
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-secondary outline-none bg-[#FAF6F2]"
            required
          />
          <input
            type="email"
            placeholder="someone@example.com"
            className="w-full border border-gray-300 rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-secondary outline-none bg-[#FAF6F2]"
            required
          />
          <input
            type="tel"
            placeholder="+91 0000000000"
            className="w-full border border-gray-300 rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-secondary outline-none bg-[#FAF6F2]"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-[20px] py-3 px-6 text-sm focus:ring-2 focus:ring-secondary outline-none bg-[#FAF6F2] resize-none"
            rows={3}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-secondary w-full text-white py-3 px-6 rounded-full text-sm font-semibold hover:bg-secondary transition duration-300"
          >
            Get Report
          </button>
        </form>
      </div> */}
      <section className="bg-[#F9F9F9]  px-6 lg:px-24">
        <style> box-shadow:0px 0px 5px 0px
        </style>
        <div className="container mx-auto grid grid-cols-3 gap-6 items-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg flex flex-col items-center text-center"
            >
              {/* Logo */}
              <Image
                src={review.logo}
                alt={review.title}
                width={108}
                height={39}
                className="h-12 w-auto object-contain  mb-[-5px] max-w-auto  max-sm:max-w-[150%] max-sm:mb-[-10px]"
                loading="lazy"
                unoptimized
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {review.title}
              </h3>

              {/* Stars */}
              <div className="flex items-center justify-center mb-1">
                {"★"
                  .repeat(review.stars)
                  .split("")
                  .map((star, idx) => (
                    <span key={idx} className="text-[#9B5E35] text-lg" aria-hidden="true">
                      {star}
                    </span>
                  ))}
                {"☆"
                  .repeat(5 - review.stars)
                  .split("")
                  .map((star, idx) => (
                    <span key={idx} className="text-gray-300 text-lg">
                      {star}
                    </span>
                  ))}
              </div>

              {/* Reviews Count */}
              {/* <p className="text-gray-600 text-sm">{review.reviewCount}</p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
