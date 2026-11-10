import { useState } from "react";
import { Plus } from "lucide-react";
import { GENRES } from "../data/Movies";

const emptyForm = {
  title: "",
  year: new Date().getFullYear(),
  genre: GENRES[0],
  rating: 7,
  duration: 120,
  posterUrl: "",
  synopsis: "",
};

export default function MovieForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onAdd({
      ...form,
      title: form.title.trim(),
      year: Number(form.year),
      rating: Number(form.rating),
      duration: Number(form.duration),
      posterUrl: form.posterUrl.trim(),
      synopsis: form.synopsis.trim() || "Belum ada sinopsis.",
    });
    setForm(emptyForm);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <label className="form-field">
        Judul film
        <input
          name="title"
          placeholder="Contoh: Laskar Pelangi"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>
      <label className="form-field">
        Tahun rilis
        <input
          name="year"
          type="number"
          min="1900"
          max="2100"
          value={form.year}
          onChange={handleChange}
          required
        />
      </label>
      <label className="form-field">
        Genre
        <select name="genre" value={form.genre} onChange={handleChange}>
          {GENRES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>
      <label className="form-field">
        Rating (0-10)
        <input
          name="rating"
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
          required
        />
      </label>
      <label className="form-field">
        Durasi (menit)
        <input
          name="duration"
          type="number"
          min="1"
          value={form.duration}
          onChange={handleChange}
          required
        />
      </label>
      <label className="form-field form-field-wide">
        URL poster (opsional)
        <input
          name="posterUrl"
          type="url"
          placeholder="https://contoh.com/poster.jpg"
          value={form.posterUrl}
          onChange={handleChange}
        />
      </label>
      <label className="form-field form-field-wide">
        Sinopsis
        <textarea
          name="synopsis"
          placeholder="Tulis ringkasan cerita film..."
          value={form.synopsis}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        <Plus size={16} /> Tambah Film
      </button>
    </form>
  );
}