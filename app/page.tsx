import { SectionArtists } from "@/components/sections/section-artists/section-artists";
import { SectionBrand } from "@/components/sections/section-brand/section-brand";
import { SectionExperience } from "@/components/sections/section-experience/section-experience";
import { SectionFooter } from "@/components/sections/section-footer/section-footer";
import { SectionGallery } from "@/components/sections/section-gallery/section-gallery";
import { SectionHero } from "@/components/sections/section-hero/section-hero";
import { SectionNav } from "@/components/sections/section-nav/section-nav";
import { SectionProductBrands } from "@/components/sections/section-product-brands/section-product-brands";
import { SectionReviews } from "@/components/sections/section-reviews/section-reviews";
import { SectionServices } from "@/components/sections/section-services/section-services";
import { SectionSpace } from "@/components/sections/section-space/section-space";
import { SectionTicker } from "@/components/sections/section-ticker/section-ticker";
import { SectionMap } from "@/components/sections/section-map/section-map";
import { SectionVisit } from "@/components/sections/section-visit/section-visit";

const Home = (): React.JSX.Element => {
  return (
    <>
      <SectionNav />
      <main>
        <SectionHero />
        <SectionTicker />
        <SectionExperience />
        <SectionServices />
        <SectionProductBrands />
        <SectionGallery />
        <SectionArtists />
        <SectionReviews />
        <SectionBrand />
        <SectionSpace />
        <SectionVisit />
      </main>
      <SectionMap />
      <SectionFooter />
    </>
  );
};

export default Home;
