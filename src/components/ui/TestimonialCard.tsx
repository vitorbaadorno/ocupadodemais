import { Star } from "lucide-react";

type Testimonial = { name: string; text: string; source: string; url?: string; rating?: number };

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="reader-card">
      {item.rating && (
        <div className="reader-rating" aria-label={`${item.rating} de 5 estrelas`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={17}
              fill={index < item.rating! ? "currentColor" : "none"}
              aria-hidden="true"
            />
          ))}
          <span aria-hidden="true">{item.rating}/5</span>
        </div>
      )}
      <blockquote>“{item.text}”</blockquote>
      <figcaption>
        <strong>{item.name}</strong>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.source} · Ler resenha
          </a>
        ) : (
          <span>{item.source}</span>
        )}
      </figcaption>
    </figure>
  );
}
