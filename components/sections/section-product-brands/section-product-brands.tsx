import { en } from "@/data/dictionary/en";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

const brandLogoById = {
  stmt: images.productBrands.stmt,
  philipMartins: images.productBrands.philipMartins,
} as const;

export const SectionProductBrands = (): React.JSX.Element => {
  return (
    <section id="product-brands" className="overflow-hidden bg-stone py-20">
      <div className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <Reveal>
          <span className="mb-5 block text-[0.62rem] font-medium uppercase tracking-[0.35em] text-titanium">
            {en.productBrands.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(3rem,14vw,5.5rem)] leading-[0.88] text-charcoal">
            {en.productBrands.headline}
            <br />
            {en.productBrands.headlineBreak}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-md font-serif text-[1rem] italic leading-[1.7] text-titanium">
            {en.productBrands.intro}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-[3px] px-6 md:grid-cols-2 md:px-10">
        {en.productBrands.brands.map((brand, index) => (
          <Reveal
            key={brand.id}
            delay={(index % 2) as 0 | 1}
            className="h-full"
          >
            <article className="group flex h-full flex-col border border-concrete bg-ivory transition-colors duration-500 hover:border-titanium/35">
              <div className="flex items-center justify-center px-8 py-10 md:px-12 md:py-12">
                <div className="relative h-24 w-full max-w-[18rem] md:h-28">
                  <SiteImage
                    src={brandLogoById[brand.id]}
                    alt={brand.alt}
                    sizes="(min-width: 768px) 288px, 100vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col border-t border-concrete px-6 py-8 md:px-8 md:py-9">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[1.5rem] font-normal leading-tight text-charcoal">
                    {brand.name}
                  </h3>
                  <span className="shrink-0 text-[0.62rem] uppercase tracking-[0.28em] text-titanium">
                    {brand.tagline}
                  </span>
                </div>
                <p className="text-[0.82rem] leading-[1.75] text-titanium">
                  {brand.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
