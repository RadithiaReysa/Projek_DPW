import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import MovieDetail from "./pages/MovieDetail";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { initialMovies } from "./data/Movies";

function loadData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return fallback;

    const value = JSON.parse(stored);
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

const PALETTE = [
  ["#1e3a8a", "#6366f1"],
  ["#9f1239", "#fb923c"],
  ["#14532d", "#65a30d"],
  ["#581c87", "#f472b6"],
];

export default function App() {
  const [movies, setMovies] = useState(() => loadData("movies", initialMovies));
  const [favorites, setFavorites] = useState(() => loadData("favorites", []));

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [movies, favorites]);

  const addMovie = (data) => {
    const colors = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    setMovies((prev) => [{ id: Date.now(), colors, ...data }, ...prev]);
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
    setFavorites((prev) => prev.filter((f) => f !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Navbar favoriteCount={favorites.length} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/katalog"
            element={
              <Catalog
                movies={movies}
                favorites={favorites}
                onAdd={addMovie}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/film/:id"
            element={
              <MovieDetail
                movies={movies}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onDelete={deleteMovie}
              />
            }
          />
          <Route
            path="/favorit"
            element={
              <Favorites
                movies={movies}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/tentang" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}