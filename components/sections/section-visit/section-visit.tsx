import { en } from "@/data/dictionary/en";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";

export const SectionVisit = (): React.JSX.Element => {
  return (
    <section id="visit" className="bg-charcoal pt-20">
      <div className="mb-13 border-b border-ivory/7 px-6 pb-13 md:px-10">
        <Reveal>
          <span className="mb-5 block text-[0.62rem] font-medium uppercase tracking-[0.35em] text-titanium">
            {en.visit.label}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-serif text-[clamp(2rem,9vw,3.5rem)] font-light leading-snug text-ivory">
            {en.visit.headline[0]}
            <br />
            {en.visit.headline[1]}
            <br />
            <em className="text-titanium">{en.visit.headlineEm}</em>
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-10 px-6 md:px-10">
        <Reveal>
          <div>
            <span className="mb-3 block text-[0.6rem] uppercase tracking-[0.3em] text-ivory/25">
              {en.visit.address.label}
            </span>
            <p className="font-serif text-[1.15rem] leading-snug text-ivory">
              {en.visit.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div>
            <span className="mb-3 block text-[0.6rem] uppercase tracking-[0.3em] text-ivory/25">
              {en.visit.hours.label}
            </span>
            <div className="mt-1 grid grid-cols-2 gap-x-5 gap-y-1.5">
              {en.visit.hours.rows.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between border-b border-ivory/5 py-1.5 text-[0.8rem] text-ivory/45"
                >
                  <span>{row.day}</span>
                  <span className="text-ivory/70">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div>
            <span className="mb-3 block text-[0.6rem] uppercase tracking-[0.3em] text-ivory/25">
              {en.visit.contact.label}
            </span>
            <p className="font-serif text-[1.15rem] text-ivory">
              {en.visit.contact.phone}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-[3px] px-6 py-13 md:px-10">
        {en.visit.ctas.map((cta, index) => {
          const className =
            "visit-cta group flex items-center justify-between border border-ivory/7 bg-ivory/4 px-6 py-5.5 hover:border-ivory/15 hover:bg-ivory/9";

          const content = (
            <>
              <div className="flex flex-col gap-1">
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-ivory/30">
                  {cta.label}
                </span>
                <span className="font-serif text-[1.1rem] text-ivory">
                  {cta.text}
                </span>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory/15 transition-colors duration-300 group-hover:border-ivory/30 group-hover:bg-ivory/5">
                <ArrowIcon />
              </span>
            </>
          );

          return (
            <Reveal key={cta.label} delay={(index % 4) as 0 | 1 | 2 | 3}>
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <a href={cta.href} className={className}>
                  {content}
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
