import { useEffect, useRef, type CSSProperties } from "react";

const elements: [string, number, number, number][] = [
  ["escrita-01", 3, 5, 44],
  ["mente-07", 88, 4, 48],
  ["papeis-01", 15, 9, 38],
  ["escrita-04", 94, 18, 60],
  ["mente-01", 2, 24, 60],
  ["escrita-07", 89, 30, 34],
  ["pessoas-01", 5, 42, 78],
  ["pessoas-02", 89, 45, 72],
  ["mente-08", 22, 48, 44],
  ["escrita-03", 72, 49, 45],
  ["papeis-03", 44, 50, 32],
  ["mente-06", 60, 46, 40],
  ["escrita-02", 2, 57, 42],
  ["mente-04", 93, 58, 58],
  ["papeis-02", 10, 68, 45],
  ["escrita-05", 91, 72, 40],
  ["pessoas-03", 2, 83, 70],
  ["pessoas-05", 87, 90, 85],
  ["pessoas-04", 13, 94, 57],
  ["escrita-06", 34, 93, 38],
  ["escrita-08", 68, 94, 55],
  ["mente-02", 5, 15, 37],
  ["mente-03", 92, 38, 40],
  ["mente-05", 78, 52, 40],
  ["mente-09", 5, 75, 38],
  ["papeis-04", 93, 82, 36],
  ["papeis-05", 29, 52, 34],
  ["papeis-06", 56, 95, 43],
];

export function ReadingArtwork() {
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const images = Array.from(layer.current?.querySelectorAll("img") ?? []);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("artwork-visible");
            observer.unobserve(target);
          }
        });
      },
      { rootMargin: "0px 0px -20px 0px" },
    );
    const cleanups = images.map((image) => {
      const loaded = () => image.classList.add("artwork-loaded");
      image.addEventListener("load", loaded);
      if (image.complete && image.naturalWidth) loaded();
      observer.observe(image);
      return () => {
        image.removeEventListener("load", loaded);
        image.classList.remove("artwork-visible", "artwork-loaded");
      };
    });
    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
  return (
    <div ref={layer} className="reading-artwork" aria-hidden="true">
      {elements.map(([name, x, y, size], index) => (
        <img
          key={name}
          src={`/artwork/reading/${name}.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          style={
            {
              "--x": `${x}%`,
              "--y": `${y}%`,
              "--size": `${size}px`,
              "--opacity": 0.18 + (index % 4) * 0.1,
              "--delay": `${120 + (index % 8) * 100}ms`,
              "--rotation": `${((index % 3) - 1) * 8}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
