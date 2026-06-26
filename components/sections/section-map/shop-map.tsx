import { en } from "@/data/dictionary/en";
import { shopLocation } from "@/data/location";

export const ShopMap = (): React.JSX.Element => {
  return (
    <iframe
      title={en.map.title}
      src={shopLocation.embedUrl}
      className="map-embed-light absolute inset-0 h-full w-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};
