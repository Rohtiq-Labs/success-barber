import { en } from "@/data/dictionary/en";
import { images } from "@/data/images";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

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
        {en.visit.ctas.map((cta) => {
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
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory/15">
                <ArrowIcon />
              </span>
            </>
          );

          const className =
            "group flex items-center justify-between border border-ivory/7 bg-ivory/4 px-6 py-5.5 transition-colors hover:border-ivory/15 hover:bg-ivory/9";

          return cta.external ? (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <a key={cta.label} href={cta.href} className={className}>
              {content}
            </a>
          );
        })}
      </div>

      <div className="relative h-60 overflow-hidden bg-graphite">
        <SiteImage
          src={images.visitMap}
          alt={en.visit.mapAlt}
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(14,12,10,0.65)] to-[rgba(14,12,10,0.2)]"
          aria-hidden="true"
        />
        <div className="absolute top-1/2 left-1/2 z-3 flex -translate-x-1/2 -translate-y-[60%] flex-col items-center">
          <div className="relative h-2.5 w-2.5 rounded-full bg-ivory">
            <span className="absolute -inset-1 animate-pin-pulse rounded-full border border-ivory/30 motion-reduce:animate-none" />
          </div>
          <div className="h-5 w-px bg-ivory" />
          <p className="mt-2 text-center text-[0.6rem] uppercase tracking-[0.15em] whitespace-nowrap text-ivory/40">
            {en.visit.mapPin[0]}
            <br />
            {en.visit.mapPin[1]}
          </p>
        </div>
      </div>
    </section>
  );
};
