import { en } from "@/data/dictionary/en";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

export const SectionExperience = (): React.JSX.Element => {
  return (
    <section id="experience" className="overflow-hidden bg-charcoal pt-20">
      <div className="px-6 pb-15 md:px-10">
        <Reveal>
          <span className="mb-5 block text-[0.62rem] font-medium uppercase tracking-[0.35em] text-titanium">
            {en.experience.label}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-serif text-[clamp(2.4rem,10vw,4rem)] font-light leading-tight text-ivory">
            {en.experience.headline}
            <br />
            {en.experience.headlineJoin}{" "}
            <em className="text-titanium">{en.experience.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-xs text-[0.9rem] leading-[1.8] text-ivory/50">
            {en.experience.body}
          </p>
        </Reveal>
      </div>

      <div className="flex gap-0.5 overflow-x-auto px-6 pb-15 [scrollbar-width:none] md:gap-[3px] md:px-10 md:pb-15 [&::-webkit-scrollbar]:hidden">
        {en.experience.pillars.map((pillar) => (
          <div
            key={pillar.number}
            className="pillar group relative w-[72vw] max-w-[300px] shrink-0 border border-ivory/7 bg-ivory/4 p-9 transition-colors hover:bg-ivory/7"
          >
            <span className="mb-6 block font-display text-[5rem] leading-none text-titanium/15">
              {pillar.number}
            </span>
            <h3 className="mb-3 font-serif text-[1.4rem] font-normal leading-tight text-ivory">
              {pillar.title}
              <br />
              {pillar.titleBreak}
            </h3>
            <p className="text-[0.8rem] leading-[1.7] text-ivory/45">
              {pillar.desc}
            </p>
            <div className="pillar-bar absolute bottom-0 left-0 h-0.5 w-0 bg-titanium transition-[width] duration-600 ease-out" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Reveal className="relative aspect-4/3 overflow-hidden">
          <SiteImage
            src={images.experience}
            alt={en.experience.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 z-1 bg-linear-to-br from-[rgba(14,12,10,0.15)] to-[rgba(14,12,10,0.45)]"
            aria-hidden="true"
          />
        </Reveal>
        <Reveal delay={1} className="bg-stone px-6 py-12 md:px-10 md:py-15">
          <blockquote className="mb-6 border-l-2 border-titanium pl-5 font-serif text-[1.6rem] font-light leading-snug text-charcoal">
            {en.experience.quote}
          </blockquote>
          <p className="text-[0.82rem] leading-[1.8] text-titanium">
            {en.experience.detail}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
