import { en } from "@/data/dictionary/en";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

export const SectionArtists = (): React.JSX.Element => {
  return (
    <section id="artists" className="overflow-hidden bg-charcoal py-20">
      <div className="mb-0 border-b border-ivory/6 px-6 pb-12 md:px-10">
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

      <div className="flex gap-[3px] overflow-x-auto px-6 py-12 [scrollbar-width:none] md:px-10 md:pb-15 [&::-webkit-scrollbar]:hidden">
        {en.artists.members.map((artist, index) => (
          <article
            key={artist.num}
            className="group w-[72vw] max-w-[280px] shrink-0 md:max-w-xs"
          >
            <div className="relative mb-5 aspect-3/4 overflow-hidden bg-concrete">
              <SiteImage
                src={images.artists[index]}
                alt={artist.alt}
                sizes="280px"
                className="artist-img object-cover object-center transition-transform duration-800 ease-out"
              />
              <span className="absolute top-4 right-4 z-2 font-serif text-[0.7rem] italic text-ivory/25">
                {artist.num}
              </span>
            </div>
            <h3 className="mb-1 font-serif text-[1.4rem] font-normal text-ivory">
              {artist.name}
            </h3>
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-titanium">
              {artist.role}
            </p>
            <p className="text-[0.78rem] leading-[1.7] text-ivory/35">
              {artist.spec}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
