"use client";

interface FloatingCTAProps {
  setIsFloatingFormActive: (active: boolean) => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ setIsFloatingFormActive }) => {
  return (
    <button
      className="fixed right-5 top-1/2 transform -translate-y-1/2 bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-4 px-6 rounded-l-full shadow-lg z-40 transition-all duration-300 hover:scale-110 animate-pulse"
      onClick={() => setIsFloatingFormActive(true)}
    >
      💬 Get Quote
    </button>
  );
};

export default FloatingCTA;
