import { en } from "@/data/dictionary/en";
import { WHATSAPP_URL } from "@/data/images";
import { Reveal } from "@/components/ui/reveal";

type ServiceItemProps = {
  name: string;
  price: string;
  description: string;
};

const ServiceItem = ({
  name,
  price,
  description,
}: ServiceItemProps): React.JSX.Element => {
  return (
    <li className="group relative border-b border-concrete/80 py-7 last:border-b-0 md:py-8">
      <span
        className="absolute top-1/2 left-0 h-0 w-px -translate-y-1/2 bg-titanium transition-all duration-500 ease-out group-hover:h-10"
        aria-hidden="true"
      />
      <div className="flex items-baseline justify-between gap-6 pl-0 transition-[padding] duration-500 group-hover:pl-3 md:gap-10">
        <h4 className="font-serif text-[1.15rem] font-normal leading-snug text-charcoal transition-colors duration-300 group-hover:text-graphite md:text-[1.35rem]">
          {name}
        </h4>
        <span className="shrink-0 text-[0.72rem] font-medium tracking-[0.12em] text-titanium tabular-nums uppercase transition-all duration-300 group-hover:tracking-[0.18em] group-hover:text-charcoal">
          {price}
        </span>
      </div>
      <p className="mt-2.5 max-w-md text-[0.82rem] leading-[1.75] text-titanium/75 transition-colors duration-300 group-hover:text-titanium md:pl-0 md:transition-[padding] md:duration-500 md:group-hover:pl-3">
        {description}
      </p>
    </li>
  );
};

type CategoryBlockProps = {
  index: string;
  title: string;
  items: readonly ServiceItemProps[];
  reversed?: boolean;
};

const CategoryBlock = ({
  index,
  title,
  items,
  reversed = false,
}: CategoryBlockProps): React.JSX.Element => {
  const header = (
    <header className={`md:col-span-4 ${reversed ? "md:text-right md:pt-2" : "md:pt-2"}`}>
      <span className="mb-4 block font-sans text-[0.58rem] font-medium tracking-[0.38em] text-titanium uppercase">
        {index}
      </span>
      <h3 className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-light leading-tight text-charcoal">
        {title}
      </h3>
    </header>
  );

  const list = (
    <ul className="md:col-span-8" aria-label={title}>
      {items.map((item) => (
        <ServiceItem key={item.name} {...item} />
      ))}
    </ul>
  );

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
      {reversed ? (
        <>
          {list}
          {header}
        </>
      ) : (
        <>
          {header}
          {list}
        </>
      )}
    </div>
  );
};

export const SectionServices = (): React.JSX.Element => {
  return (
    <section id="services" className="overflow-hidden bg-ivory">
      <div className="px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-8">
            <span className="mb-6 block text-[0.62rem] font-medium tracking-[0.35em] text-titanium uppercase">
              {en.services.label}
            </span>
            <h2 className="font-display text-[clamp(3.2rem,14vw,6.5rem)] leading-[0.88] tracking-[0.04em] text-charcoal uppercase">
              {en.services.headline}
              <br />
              {en.services.headlineBreak}
            </h2>
          </Reveal>

          <Reveal
            delay={1}
            className="flex items-end md:col-span-4 md:col-start-9 md:pb-2"
          >
            <p className="max-w-xs font-serif text-[1rem] italic leading-[1.7] text-titanium md:text-right">
              {en.services.intro}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-concrete">
        {en.services.categories.map((category, index) => (
          <Reveal key={category.index} delay={index % 3 === 0 ? 0 : 1}>
            <div className="px-6 py-16 md:px-10 md:py-20">
              <CategoryBlock
                index={category.index}
                title={category.title}
                items={category.items}
                reversed={index % 2 === 1}
              />
            </div>
            {index < en.services.categories.length - 1 && (
              <div className="mx-6 md:mx-10" aria-hidden="true">
                <div className="h-px bg-concrete" />
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal className="border-t border-concrete bg-charcoal px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-xl">
            <h3 className="font-serif text-[clamp(1.75rem,5vw,2.75rem)] font-light leading-snug text-ivory">
              {en.services.cta.headline}
            </h3>
            <p className="mt-5 max-w-md font-serif text-[1rem] italic leading-[1.7] text-titanium">
              {en.services.cta.sub}
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-flex shrink-0 items-center justify-center self-start bg-ivory px-8 py-4 text-[0.7rem] font-medium tracking-[0.22em] text-charcoal uppercase hover:bg-titanium hover:text-ivory md:self-auto"
          >
            {en.services.cta.button}
          </a>
        </div>
      </Reveal>
    </section>
  );
};
