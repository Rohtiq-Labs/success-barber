import { en } from "@/data/dictionary/en";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

export const SectionGallery = (): React.JSX.Element => {
  return (
    <section id="gallery" className="bg-stone py-20">
      <div className="flex items-end justify-between px-6 pb-12 md:px-10">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,16vw,5.5rem)] leading-[0.9] text-charcoal">
            {en.gallery.headline}
            <br />
            {en.gallery.headlineBreak}
          </h2>
        </Reveal>
        <Reveal>
          <span className="font-serif text-[0.8rem] italic tracking-widest text-titanium">
            {en.gallery.count}
          </span>
        </Reveal>
      </div>

      <Reveal className="grid grid-cols-2 gap-[3px] px-[3px] md:px-0">
        <div className="group relative col-span-2 aspect-video overflow-hidden bg-concrete">
          <div className="relative h-full w-full overflow-hidden">
            <SiteImage
              src={images.gallery[0]}
              alt={en.gallery.cells[0].alt}
              sizes="100vw"
              className="gallery-img object-cover object-center transition-transform duration-800 ease-out"
            />
            <span className="absolute bottom-3 left-4 z-2 text-[0.6rem] uppercase tracking-[0.25em] text-ivory/75">
              {en.gallery.cells[0].label}
            </span>
          </div>
        </div>

        <div className="group relative aspect-3/4 overflow-hidden bg-concrete">
          <div className="relative h-full w-full overflow-hidden">
            <SiteImage
              src={images.gallery[1]}
              alt={en.gallery.cells[1].alt}
              sizes="50vw"
              className="gallery-img object-cover object-center transition-transform duration-800 ease-out"
            />
            <span className="absolute bottom-3 left-3 z-2 text-[0.6rem] uppercase tracking-[0.25em] text-ivory/75">
              {en.gallery.cells[1].label}
            </span>
          </div>
        </div>

        <div className="group relative aspect-3/4 overflow-hidden bg-concrete">
          <div className="relative flex h-full w-full items-end overflow-hidden p-6">
            <SiteImage
              src={images.gallery[2]}
              alt={en.gallery.cells[2].alt}
              sizes="50vw"
              className="gallery-img object-cover object-center transition-transform duration-800 ease-out"
            />
            <div
              className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(14,12,10,0.75)] via-[rgba(14,12,10,0.15)] to-transparent"
              aria-hidden="true"
            />
            <p className="relative z-2 font-serif text-[1.1rem] italic leading-snug text-ivory/85">
              {en.gallery.quote}
            </p>
          </div>
        </div>

        <div className="group relative col-span-2 aspect-3/2 overflow-hidden bg-concrete">
          <div className="relative h-full w-full overflow-hidden">
            <SiteImage
              src={images.gallery[3]}
              alt={en.gallery.cells[3].alt}
              sizes="100vw"
              className="gallery-img object-cover object-center transition-transform duration-800 ease-out"
            />
            <div
              className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(14,12,10,0.55)] to-transparent"
              aria-hidden="true"
            />
            <span className="absolute bottom-4 left-5 z-2 text-[0.6rem] uppercase tracking-[0.25em] text-ivory/75">
              {en.gallery.cells[3].label}
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-6 mt-10 flex items-center gap-4 md:mx-10">
        <div className="h-px flex-1 bg-concrete" />
        <a
          href="https://www.instagram.com/successbarberdxb/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-titanium transition-colors hover:text-charcoal"
        >
          {en.gallery.instagramCta}
        </a>
        <div className="h-px flex-1 bg-concrete" />
      </Reveal>
    </section>
  );
};
