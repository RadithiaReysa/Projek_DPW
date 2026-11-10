import { SearchX } from "lucide-react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, favorites, onToggleFavorite }) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        <SearchX size={40} />
        <p>Film tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}