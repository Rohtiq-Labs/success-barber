type ArrowIconProps = {
  className?: string;
};

export const ArrowIcon = ({
  className = "h-3 w-3 stroke-titanium transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
}: ArrowIconProps): React.JSX.Element => {
  return (
    <svg
      viewBox="0 0 12 12"
      strokeWidth="1.2"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" />
    </svg>
  );
};
