import { NavLink } from "react-router-dom";
import { Clapperboard, House, Film, Heart, Info } from "lucide-react";

export default function Navbar({ favoriteCount = 0 }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <h1 className="logo">
          <Clapperboard size={24} /> CineKatalog
        </h1>
        <nav className="nav-links">
          <NavLink to="/" end>
            <House size={16} /> Beranda
          </NavLink>
          <NavLink to="/katalog">
            <Film size={16} /> Katalog
          </NavLink>
          <NavLink to="/favorit">
            <Heart size={16} /> Favorit
            {favoriteCount > 0 && <span className="count">{favoriteCount}</span>}
          </NavLink>
          <NavLink to="/tentang">
            <Info size={16} /> Tentang
          </NavLink>
        </nav>
      </div>
    </header>
  );
}