import { en } from "@/data/dictionary/en";
import { images, videos } from "@/data/images";
import { LuxuryImageFrame } from "@/components/ui/luxury-image-frame";
import { Reveal } from "@/components/ui/reveal";
import { SpaceFeatureVideo } from "@/components/sections/section-space/space-feature-video";

export const SectionBrand = (): React.JSX.Element => {
  return (
    <section id="brand" className="overflow-hidden bg-charcoal">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Reveal className="group relative aspect-3/4 overflow-hidden md:aspect-auto md:min-h-[32rem]">
          <LuxuryImageFrame className="absolute inset-0">
            <SpaceFeatureVideo
              src={videos.brand}
              poster={images.gallery[3]}
              alt={en.brand.videoAlt}
              className="brand-img object-cover object-center"
            />
          </LuxuryImageFrame>
          <div
            className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(14,12,10,0.45)] via-transparent to-[rgba(14,12,10,0.15)]"
            aria-hidden="true"
          />
        </Reveal>

        <Reveal
          delay={1}
          className="flex flex-col justify-center px-6 py-14 md:px-10 md:py-20"
        >
          <span className="mb-5 block text-[0.62rem] font-medium uppercase tracking-[0.35em] text-titanium">
            {en.brand.eyebrow}
          </span>
          <h2 className="font-display text-[clamp(3rem,14vw,5.5rem)] leading-[0.88] text-ivory">
            {en.brand.headline}
            <br />
            <em className="font-serif text-[0.55em] font-light not-italic tracking-[0.04em] text-titanium">
              {en.brand.headlineEm}
            </em>
          </h2>
          <p className="mt-6 max-w-sm font-serif text-[1.05rem] italic leading-[1.7] text-ivory/55">
            {en.brand.body}
          </p>
          <a
            href={en.brand.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury mt-10 inline-flex w-fit items-center bg-ivory px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-titanium hover:text-ivory"
          >
            {en.brand.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
};
