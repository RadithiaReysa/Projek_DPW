import { Clapperboard } from "lucide-react";

export default function Poster({ title, colors, posterUrl, size = "md" }) {
  return (
    <div
      className={`poster poster-${size}${posterUrl ? " has-image" : ""}`}
      style={{ background: `linear-gradient(160deg, ${colors[0]}, ${colors[1]})` }}
    >
      {posterUrl && (
        <img
          className="poster-image"
          src={posterUrl}
          alt={`Poster film ${title}`}
          loading="lazy"
          onError={(event) => event.currentTarget.remove()}
        />
      )}
      {!posterUrl && <Clapperboard size={size === "lg" ? 48 : 28} />}
      <span>{title}</span>
    </div>
  );
}