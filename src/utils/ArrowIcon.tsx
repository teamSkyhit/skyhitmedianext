interface ArrowProps {
  bold?: boolean;
  reverse?: boolean;
  size?: number;
  className?: string;
}

const ArrowIcon: React.FC<ArrowProps> = ({
  bold = false,
  reverse = false,
  className = "",
}) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      style={{
        transform: reverse ? "rotate(180deg)" : "none",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={bold ? 3 : 2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

export default ArrowIcon;
