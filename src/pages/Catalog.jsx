import { useState } from "react";
import { Search } from "lucide-react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import { GENRES } from "../data/Movies";

export default function Catalog({ movies, favorites, onAdd, onToggleFavorite }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("Semua");

  const visible = movies
    .filter((m) => genre === "Semua" || m.genre === genre)
    .filter((m) => m.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section>
      <h2 className="page-title">Katalog Film</h2>

      <MovieForm onAdd={onAdd} />

      <div className="toolbar">
        <div className="search">
          <Search size={16} />
          <input
            type="text"
            placeholder="Cari judul film..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="filters">
          {["Semua", ...GENRES].map((g) => (
            <button
              key={g}
              className={`chip ${genre === g ? "active" : ""}`}
              onClick={() => setGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <MovieList
        movies={visible}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </section>
  );
}