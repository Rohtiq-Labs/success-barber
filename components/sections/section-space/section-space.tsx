import { en } from "@/data/dictionary/en";
import { images, videos } from "@/data/images";
import { LuxuryImageFrame } from "@/components/ui/luxury-image-frame";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";
import { SpaceFeatureVideo } from "@/components/sections/section-space/space-feature-video";

export const SectionSpace = (): React.JSX.Element => {
  return (
    <section id="space" className="overflow-hidden bg-stone py-20">
      <div className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,16vw,5.5rem)] leading-[0.88] text-charcoal">
            {en.space.headline}
            <br />
            {en.space.headlineBreak}
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-6 max-w-[310px] font-serif text-[1.05rem] italic leading-[1.7] text-titanium">
            {en.space.desc}
          </p>
        </Reveal>
      </div>

      <Reveal className="mx-auto flex max-w-6xl flex-col gap-[3px] px-[3px] md:px-10">
        <div className="group relative aspect-video overflow-hidden md:aspect-[16/10]">
          <LuxuryImageFrame className="h-full w-full">
            <SpaceFeatureVideo
              src={videos.space}
              poster={images.space[0]}
              alt={en.space.panels[0].alt}
            />
          </LuxuryImageFrame>
          <div
            className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(14,12,10,0.5)] to-transparent"
            aria-hidden="true"
          />
          <span className="absolute bottom-4 left-4 z-2 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/30">
            {en.space.panels[0].caption}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-[3px]">
          {en.space.panels.slice(1).map((panel, index) => (
            <Reveal
              key={panel.caption}
              delay={(index % 2) as 0 | 1}
              className="group relative aspect-3/4 overflow-hidden md:aspect-[4/5]"
            >
              <LuxuryImageFrame className="h-full w-full">
                <SiteImage
                  src={images.space[index + 1]}
                  alt={panel.alt}
                  sizes="(min-width: 768px) 576px, 50vw"
                  className="space-img object-cover object-center"
                />
              </LuxuryImageFrame>
              <div
                className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(14,12,10,0.35)] to-transparent"
                aria-hidden="true"
              />
              <span className="absolute bottom-4 left-4 z-2 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/30">
                {panel.caption}
              </span>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-[3px] grid max-w-6xl grid-cols-2 gap-px border border-concrete bg-concrete px-[3px] md:px-10">
        {en.space.attributes.map((attr) => (
          <div key={attr.label} className="bg-stone px-5 py-7">
            <span className="mb-2.5 block text-[0.58rem] uppercase tracking-[0.3em] text-titanium">
              {attr.label}
            </span>
            <div className="font-serif text-[1.1rem] font-normal leading-snug text-charcoal">
              {attr.value.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < attr.value.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};
