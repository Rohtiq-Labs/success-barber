const pool = new Map<string, HTMLVideoElement>();

const configureVideo = (video: HTMLVideoElement): void => {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
};

export const attachPersistentVideo = (
  src: string,
  container: HTMLElement,
  className: string,
  preload: "none" | "metadata" | "auto",
): HTMLVideoElement => {
  let video = pool.get(src);

  if (!video) {
    video = document.createElement("video");
    configureVideo(video);
    video.preload = preload;
    video.src = src;
    pool.set(src, video);
  }

  video.className = className;

  if (video.parentNode !== container) {
    container.appendChild(video);
  }

  return video;
};

export const detachPersistentVideo = (
  video: HTMLVideoElement,
  container: HTMLElement,
): void => {
  if (video.parentNode === container) {
    container.removeChild(video);
  }
};
