import { Link } from "react-router-dom";
import { Film, Star, Trophy } from "lucide-react";
import Poster from "../components/Poster";

export default function Home({ movies }) {
  const totalMovies = movies.length;
  let totalRating = 0;

  for (const movie of movies) {
    totalRating += movie.rating;
  }

  const averageRating = totalMovies
    ? (totalRating / totalMovies).toFixed(1)
    : 0;
  const topMovies = [...movies]
    .sort((movieA, movieB) => movieB.rating - movieA.rating)
    .slice(0, 3);

  return (
    <section>
      <h2 className="page-title">Selamat datang di CineKatalog 🎬</h2>
      <p className="subtitle">Jelajahi dan kelola koleksi film favoritmu.</p>

      <div className="stats">
        <div className="stat-card">
          <Film />
          <h2>{totalMovies}</h2>
          <p>Total Film</p>
        </div>
        <div className="stat-card">
          <Star />
          <h2>{averageRating}</h2>
          <p>Rata-rata Rating</p>
        </div>
      </div>

      <h3 className="section-title">
        <Trophy size={18} /> Rating Tertinggi
      </h3>
      <div className="top-list">
        {topMovies.map((movie) => (
          <Link key={movie.id} to={`/film/${movie.id}`} className="top-item">
            <Poster
              title={movie.title}
              colors={movie.colors}
              posterUrl={movie.posterUrl}
            />
            <p>{movie.title}</p>
            <small>⭐ {movie.rating}</small>
          </Link>
        ))}
      </div>

      <Link to="/katalog" className="btn btn-primary">
        Lihat Semua Film
      </Link>
    </section>
  );
}