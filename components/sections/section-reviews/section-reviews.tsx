import { en } from "@/data/dictionary/en";
import { Reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";

const StarRating = ({
  label,
}: {
  label: string;
}): React.JSX.Element => {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={label}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 text-titanium"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
};

export const SectionReviews = (): React.JSX.Element => {
  const [featuredReview, ...reviews] = en.reviews.items;

  return (
    <section id="reviews" className="overflow-hidden bg-stone py-20">
      <div className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal>
              <span className="mb-5 block text-[0.62rem] font-medium uppercase tracking-[0.35em] text-titanium">
                {en.reviews.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-[clamp(3rem,14vw,5.5rem)] leading-[0.88] text-charcoal">
                {en.reviews.headline}
                <br />
                {en.reviews.headlineBreak}
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-md font-serif text-[1rem] italic leading-[1.7] text-titanium">
                {en.reviews.intro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={2} className="md:pb-2">
            <div className="inline-flex flex-col gap-3 border border-concrete bg-ivory px-6 py-5">
              <StarRating label={en.reviews.starLabel} />
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[2.4rem] leading-none text-charcoal">
                  {en.reviews.rating}
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.28em] text-titanium">
                  {en.reviews.source}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mx-auto mb-10 max-w-6xl px-6 md:px-10">
        <article className="review-featured group relative overflow-hidden border border-concrete bg-charcoal px-8 py-10 md:px-12 md:py-14">
          <span
            className="pointer-events-none absolute top-4 right-6 font-display text-[6rem] leading-none text-ivory/6 md:top-6 md:right-10 md:text-[8rem]"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <StarRating label={en.reviews.starLabel} />
          <blockquote className="relative z-1 mt-6 max-w-3xl font-serif text-[clamp(1.35rem,3.5vw,2rem)] font-light italic leading-snug text-ivory/90">
            &ldquo;{featuredReview.text}&rdquo;
          </blockquote>
          <footer className="relative z-1 mt-8 flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-ivory/15">
              <SiteImage
                src={featuredReview.avatar}
                alt={featuredReview.alt}
                sizes="48px"
                className="object-cover object-center"
              />
            </div>
            <div>
              <cite className="not-italic">
                <span className="block font-serif text-[1.1rem] text-ivory">
                  {featuredReview.name}
                </span>
              </cite>
              <time
                dateTime={featuredReview.dateIso}
                className="text-[0.65rem] uppercase tracking-[0.22em] text-titanium"
              >
                {featuredReview.date}
              </time>
            </div>
          </footer>
          <div
            className="review-bar pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-titanium"
            aria-hidden="true"
          />
        </article>
      </Reveal>

      <div className="mx-auto flex max-w-6xl gap-[3px] overflow-x-auto px-6 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
        {reviews.map((review, index) => (
          <Reveal
            key={review.name}
            delay={(index % 4) as 0 | 1 | 2 | 3}
            className="w-[78vw] max-w-[320px] shrink-0 md:w-[calc(33.333%-2px)] md:max-w-none md:shrink"
          >
            <article className="review-card group flex h-full flex-col border border-concrete bg-ivory p-7 transition-colors duration-500 hover:border-titanium/35">
              <StarRating label={en.reviews.starLabel} />
              <blockquote className="mt-5 flex-1 font-serif text-[1.05rem] font-light italic leading-[1.65] text-charcoal">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-7 flex items-center gap-3 border-t border-concrete pt-5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-concrete">
                  <SiteImage
                    src={review.avatar}
                    alt={review.alt}
                    sizes="40px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <cite className="not-italic">
                    <span className="block truncate font-serif text-[1rem] text-charcoal">
                      {review.name}
                    </span>
                  </cite>
                  <time
                    dateTime={review.dateIso}
                    className="text-[0.6rem] uppercase tracking-[0.2em] text-titanium"
                  >
                    {review.date}
                  </time>
                </div>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-12 flex max-w-6xl items-center justify-center px-6 md:px-10">
        <div className="hidden h-px flex-1 bg-concrete md:block" />
        <a
          href={en.reviews.viewAllHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-luxury mx-8 shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-titanium hover:text-charcoal"
        >
          {en.reviews.viewAllCta}
        </a>
        <div className="hidden h-px flex-1 bg-concrete md:block" />
      </Reveal>
    </section>
  );
};
