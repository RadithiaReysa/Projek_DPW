import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Heart, Trash2 } from "lucide-react";
import Poster from "../components/Poster";
import NotFound from "./NotFound";

export default function MovieDetail({ movies, favorites, onToggleFavorite, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <NotFound />;

  const isFavorite = favorites.includes(movie.id);

  const handleDelete = () => {
    if (window.confirm(`Hapus film "${movie.title}"?`)) {
      onDelete(movie.id);
      navigate("/katalog");
    }
  };

  return (
    <section>
      <Link to="/katalog" className="back">
        <ArrowLeft size={16} /> Kembali
      </Link>

      <div className="detail">
        <Poster
          title={movie.title}
          colors={movie.colors}
          posterUrl={movie.posterUrl}
          size="lg"
        />

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="meta">
            {movie.year} • {movie.genre}
          </p>
          <div className="detail-stats">
            <span><Star size={16} fill="currentColor" /> {movie.rating}</span>
            <span><Clock size={16} /> {movie.duration} menit</span>
          </div>
          <p className="synopsis">{movie.synopsis}</p>

          <div className="actions">
            <button
              className={`btn ${isFavorite ? "btn-danger-soft" : "btn-primary"}`}
              onClick={() => onToggleFavorite(movie.id)}
            >
              <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? "Hapus dari Favorit" : "Tambah ke Favorit"}
            </button>
            <button className="btn btn-outline-danger" onClick={handleDelete}>
              <Trash2 size={16} /> Hapus Film
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}