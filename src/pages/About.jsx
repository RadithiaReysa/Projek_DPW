export default function About() {
  return (
    <section>
      <h2 className="page-title">Tentang Aplikasi</h2>
      <p>
        Katalog Film adalah salah satu tema yang dibuat untuk tugas 
        sebelum pertemuan 12. Aplikasi ini dibuat menggunakan React, 
        React Router, dan Lucide Icon. Aplikasi ini menampilkan 
        daftar film yang dapat dicari, difilter berdasarkan genre, 
        dan ditandai sebagai favorit.
      </p>
      <ul className="about-list">
        <li>Props</li>
        <li>State & useEffect (localStorage)</li>
        <li>React Router (route dinamis /film/:id)</li>
        <li>Struktur folder bersih</li>
        <li>Lucide Icon</li>
      </ul>
      <p>Dibuat sebagai proyek pembelajaran React.</p>
    </section>
  );
}