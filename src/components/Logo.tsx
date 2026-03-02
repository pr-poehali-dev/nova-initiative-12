export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* CS2-style crosshair icon */}
      <circle cx="20" cy="20" r="14" stroke="#3B9EFF" strokeWidth="1.5" />
      <line x1="20" y1="6" x2="20" y2="11" stroke="#3B9EFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="29" x2="20" y2="34" stroke="#3B9EFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="20" x2="11" y2="20" stroke="#3B9EFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="20" x2="34" y2="20" stroke="#3B9EFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2.5" fill="#3B9EFF" />

      {/* NATUS text */}
      <text
        x="44"
        y="26"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="2"
      >
        NATUS
      </text>
      {/* VENTURES text */}
      <text
        x="44"
        y="36"
        fill="#3B9EFF"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="400"
        letterSpacing="3"
      >
        VENTURES
      </text>
    </svg>
  );
};
