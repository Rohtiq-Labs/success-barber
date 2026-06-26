import { en } from "@/data/dictionary/en";
import { ShopMap } from "@/components/sections/section-map/shop-map";

export const SectionMap = (): React.JSX.Element => {
  return (
    <section
      id="location"
      aria-label={en.map.ariaLabel}
      className="border-t border-concrete bg-stone"
    >
      <div className="relative h-80 md:h-[28rem]">
        <ShopMap />
      </div>
    </section>
  );
};
