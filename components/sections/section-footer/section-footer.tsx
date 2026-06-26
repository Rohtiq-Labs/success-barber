import Link from "next/link";
import { en } from "@/data/dictionary/en";

export const SectionFooter = (): React.JSX.Element => {
  return (
    <footer className="flex flex-col gap-6 border-t border-ivory/6 bg-charcoal px-6 py-10 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8 md:px-10 md:py-12">
      <div>
        <div className="font-serif text-[1.1rem] uppercase tracking-[0.2em] text-ivory">
          {en.footer.logo}
        </div>
        <p className="mt-1 font-serif text-[0.85rem] italic text-titanium">
          {en.footer.tagline}
        </p>
      </div>

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
              className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/30 transition-colors hover:text-titanium"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/30 transition-colors hover:text-titanium"
            >
              {link.label}
            </Link>
          ),
        )}
      </nav>

      <p className="text-[0.62rem] tracking-widest text-ivory/20">
        {en.footer.copy}
      </p>
    </footer>
  );
};
