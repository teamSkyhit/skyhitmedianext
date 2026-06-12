import Image from "next/image";

interface BannerProps {
  title: string;
  imgSrc: string;
}

const Banner: React.FC<BannerProps> = ({ title, imgSrc }) => {
  return (
    <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      <Image
        src={imgSrc}
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-cover object-left -z-10"
        priority
        unoptimized
        aria-hidden="true"
      />
      <div className="mx-auto max-w-screen-xl pt-40 px-4 py-24 lg:flex lg:pt-48 lg:items-center relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold sm:text-5xl text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
