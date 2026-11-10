import { Link } from "react-router-dom";
import { HeartOff } from "lucide-react";
import MovieList from "../components/MovieList";

export default function Favorites({ movies, favorites, onToggleFavorite }) {
  const favMovies = movies.filter((m) => favorites.includes(m.id));

  return (
    <section>
      <h2 className="page-title">Film Favorit</h2>

      {favMovies.length === 0 ? (
        <div className="empty">
          <HeartOff size={40} />
          <p>Belum ada film favorit.</p>
          <Link to="/katalog" className="btn btn-primary">
            Cari Film
          </Link>
        </div>
      ) : (
        <MovieList
          movies={favMovies}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </section>
  );
}