import Link from "next/link";
import { en } from "@/data/dictionary/en";
import { Reveal } from "@/components/ui/reveal";

export const SectionFooter = (): React.JSX.Element => {
  return (
    <footer className="flex flex-col gap-8 border-t border-ivory/6 bg-charcoal px-6 py-10 md:px-10 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
        <Reveal>
          <div>
            <div className="font-serif text-[1.1rem] uppercase tracking-[0.2em] text-ivory">
              {en.footer.logo}
            </div>
            <p className="mt-1 font-serif text-[0.85rem] italic text-titanium">
              {en.footer.tagline}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <nav
            className="flex flex-wrap gap-6"
            aria-label="Footer navigation"
          >
            {en.footer.links.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-luxury text-[0.65rem] uppercase tracking-[0.2em] text-ivory/30 hover:text-titanium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="link-luxury text-[0.65rem] uppercase tracking-[0.2em] text-ivory/30 hover:text-titanium"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </Reveal>
      </div>

      <Reveal delay={2} className="w-full border-t border-ivory/6 pt-6">
        <p className="text-[0.62rem] tracking-widest text-ivory/45">
          {en.footer.copy.prefix}
          <a
            href={en.footer.copy.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ivory/40 underline-offset-[3px] transition-colors hover:text-ivory/70 hover:decoration-ivory/60"
          >
            {en.footer.copy.credit.label}
          </a>
          {en.footer.copy.suffix}
        </p>
      </Reveal>
    </footer>
  );
};
