import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <section className="empty">
      <TriangleAlert size={48} />
      <h2>404 - Halaman tidak ditemukan</h2>
      <Link to="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </section>
  );
}