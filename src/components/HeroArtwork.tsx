import { useEffect, useRef, type CSSProperties } from "react";

// Small illustrations frame the copy; positions stay outside the central reading area.
const positions = [
  [5, 30, 68],
  [91, 57, 60],
  [16, 4, 35],
  [83, 5, 38],
  [30, 4, 18],
  [9, 78, 62],
  [71, 89, 20],
  [66, 6, 18],
  [94, 18, 38],
  [84, 79, 58],
  [3, 59, 60],
  [15, 49, 26],
  [91, 40, 44],
  [18, 79, 45],
  [76, 91, 44],
  [2, 13, 35],
  [22, 17, 26],
  [98, 74, 16],
  [75, 15, 40],
  [5, 5, 30],
  [87, 25, 16],
  [81, 49, 28],
  [13, 20, 27],
  [96, 4, 25],
  [29, 88, 57],
  [61, 88, 50],
  [41, 90, 33],
  [1, 86, 22],
  [49, 3, 18],
  [95, 90, 21],
  [56, 9, 20],
  [80, 34, 18],
];

export function HeroArtwork() {
  const artwork = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cleanup = Array.from(artwork.current?.querySelectorAll("img") ?? []).map((image) => {
      const reveal = () => image.classList.add("artwork-loaded");
      image.addEventListener("load", reveal);
      if (image.complete && image.naturalWidth) reveal();
      return () => {
        image.removeEventListener("load", reveal);
        image.classList.remove("artwork-loaded");
      };
    });
    return () => cleanup.forEach((remove) => remove());
  }, []);
  return (
    <div className="hero-artwork" aria-hidden="true" ref={artwork}>
      {positions.map(([x, y, size], index) => (
        <img
          key={index}
          src={`/artwork/elemento-${String(index + 1).padStart(2, "0")}-2x.webp`}
          alt=""
          draggable={false}
          decoding="async"
          style={
            {
              "--x": `${x}%`,
              "--y": `${y}%`,
              "--size": `${size}px`,
              "--opacity": 0.18 + (index % 4) * 0.12,
              "--delay": `${120 + (index % 8) * 100}ms`,
              "--rotation": `${((index % 3) - 1) * 8}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
