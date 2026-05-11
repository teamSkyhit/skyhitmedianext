import ArrowIcon from "../utils/ArrowIcon";

interface ArrowHeaderProps {
  title: string;
}

const ArrowHeader: React.FC<ArrowHeaderProps> = ({ title }) => {
  return (
    <div
      className={`text-[#7D4E28] flex flex-row items-center ${
        title === "About SkyHit Media" ? "justify-center md:justify-start" : "justify-center"
      } space-x-2 mb-4`}
    >
      <div className="flex space-x-[0.5]">
        <ArrowIcon className="h-3 w-3 md:h-4 md:w-4"  />
        <ArrowIcon className="h-3 w-3 md:h-4 md:w-4"  />
        <ArrowIcon className="h-3 w-3 md:h-4 md:w-4"  />
      </div>
      <span className="text-[10px] md:text-xs lg:text-xl font-bold uppercase tracking-wide">
        {title}
      </span>
      <div className="flex space-x-[0.5]">
        <ArrowIcon className="h-3 w-3 md:h-4 md:w-4" reverse/>
        <ArrowIcon className="h-3 w-3 md:h-4 md:w-4" reverse/>
        <ArrowIcon className="h-3 w-3 md:h-4 md:w-4" reverse/>
      </div>
    </div>
  );
};

export default ArrowHeader;
