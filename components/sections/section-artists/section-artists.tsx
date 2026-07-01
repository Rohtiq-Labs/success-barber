import { en } from "@/data/dictionary/en";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

export const SectionArtists = (): React.JSX.Element => {
  return (
    <section id="artists" className="overflow-hidden bg-charcoal py-20">
      <div className="mx-auto mb-0 max-w-6xl border-b border-ivory/6 px-6 pb-12 md:px-10">
        <Reveal>
          <span className="mb-4 block text-[0.62rem] font-medium uppercase tracking-[0.35em] text-titanium">
            {en.artists.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(2.8rem,14vw,5rem)] leading-[0.88] text-ivory">
            {en.artists.headline}
            <br />
            {en.artists.headlineBreak}
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-[3px] px-6 py-12 md:grid-cols-4 md:px-10 md:pb-15">
        {images.artists.map((src, index) => (
          <Reveal
            key={src}
            delay={(index % 4) as 0 | 1 | 2 | 3}
            className="h-full"
          >
            <div className="relative aspect-3/4 overflow-hidden bg-concrete md:aspect-[4/5]">
              <SiteImage
                src={src}
                alt={en.artists.images[index]?.alt ?? "Success Barbershop team member"}
                sizes="(min-width: 768px) 288px, 50vw"
                className="artist-img object-cover object-center"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
