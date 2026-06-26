import { en } from "@/data/dictionary/en";

export const SectionTicker = (): React.JSX.Element => {
  const items = [...en.ticker, ...en.ticker];

  return (
    <div className="overflow-hidden bg-charcoal py-3.5" aria-hidden="true">
      <div className="ticker-track flex animate-ticker whitespace-nowrap motion-reduce:animate-none">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 px-10 font-serif text-[0.85rem] italic text-titanium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
