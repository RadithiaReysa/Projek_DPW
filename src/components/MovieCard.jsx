import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import Poster from "./Poster";

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article className="card">
      <Link to={`/film/${movie.id}`}>
        <Poster title={movie.title} colors={movie.colors} posterUrl={movie.posterUrl} />
      </Link>

      <div className="card-body">
        <Link to={`/film/${movie.id}`} className="card-title">
          {movie.title}
        </Link>
        <p className="meta">
          {movie.year} • {movie.genre}
        </p>

        <div className="card-footer">
          <span className="rating">
            <Star size={14} fill="currentColor" /> {movie.rating}
          </span>
          <button
            className={`btn-heart ${isFavorite ? "active" : ""}`}
            onClick={() => onToggleFavorite(movie.id)}
            aria-label={isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}
            aria-pressed={isFavorite}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}