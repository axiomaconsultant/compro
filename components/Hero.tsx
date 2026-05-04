import Link from "next/link";

const stats = [
  { value: "30+", label: "Layanan Analisis" },
  { value: "15+", label: "Software Statistik" },
  { value: "2–5", label: "Hari Pengerjaan" },
  { value: "100%", label: "Kerahasiaan Data" },
];

const SOFTWARE = ["SPSS","SmartPLS","AMOS","R","Stata","Python","NVivo","Tableau","EViews"];

const BAR_HEIGHTS = [40, 60, 45, 80, 55, 100];

const TESTIMONIALS = [
  {
    initials: "RA",
    // name: "Rizky A.",
    role: "Mahasiswa S2 · Malang",
    stars: 5,
    text: "Cepet banget prosesnya! File sudah dikirim lengkap untuk semua variabel. Analisis langsung bisa dipakai untuk bimbingan. Siap support sampai lulus!",
  },
  {
    initials: "DN",
    // name: "Dewi N.",
    role: "Mahasiswa S3 · Surabaya",
    stars: 5,
    text: "Amanah dan profesional. Kuesioner dijaga kerahasiaannya, tidak disebarkan ke siapapun. Analisis hanya bersama promotor sesuai etika penelitian.",
  },
  {
    initials: "FH",
    // name: "Farid H.",
    role: "Mahasiswa S1 · Malang",
    stars: 5,
    text: "Tim sampai lembur malam demi menyelesaikan file dan dikirim tepat jam 7 pagi. Komitmennya luar biasa. Overall good banget, mantap!",
  },
  {
    initials: "SA",
    // name: "Siti A.",
    role: "Peneliti · Surabaya",
    stars: 5,
    text: "Dikirim via email, ada 20-an jurnal (10 lama, 10 baru) lengkap dengan model dll. Sangat membantu untuk kebutuhan referensi penelitian saya.",
  },
  {
    initials: "MY",
    // name: "Maya Y.",
    role: "Mahasiswa S2 · Jember",
    stars: 5,
    text: "Sudah bimbingan dan hasilnya keren banget! Siap support sampai lulus, itu yang bikin tenang. Terima kasih banyak atas bantuannya.",
  },
  {
    initials: "LR",
    // name: "Linda R.",
    role: "Mahasiswa S1 · Kediri",
    stars: 5,
    text: "Tabel hasil analisis dibuatkan ulang dengan rapi dan mudah dipahami. Penjelasannya jelas, komunikasinya enak, dan selalu responsif.",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__wrap">
        {/* ── LEFT ── */}
        <div className="hero__left">
          <div className="hero__eyebrow animate-fadeUp delay-1">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Layanan Profesional Aktif
            </span>
          </div>

          <h1 className="hero__title animate-fadeUp delay-2">
            Pengolahan Data<br />
            <em>Statistik</em> Profesional<br />
            untuk Penelitian Anda
          </h1>

          <p className="hero__desc animate-fadeUp delay-3">
            Axioma Data Solutions menghadirkan layanan analisis kuantitatif
            dan kualitatif tingkat lanjut bagi mahasiswa, peneliti, dan
            institusi akademik di Indonesia. Akurat, terstandar, dan tepat waktu.
          </p>

          <div className="hero__software animate-fadeUp delay-4">
            {SOFTWARE.map((s) => (
              <span key={s} className="hero__software-tag">{s}</span>
            ))}
          </div>

          <div className="hero__actions animate-fadeUp delay-5">
            <Link href="/catalog" className="btn btn--primary">
              Lihat Katalog Layanan
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Konsultasi Gratis
            </Link>
          </div>
        </div>

       {/* ── RIGHT ── */}
<div className="hero__right animate-fadeUp delay-3">
  <p className="hero__chart-label">Apa Kata Klien Kami</p>
  <div className="hero__testi-track-wrap">
    <div className="hero__testi-track">
      {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
        <div key={i} className="hero__testi-card">
          <div className="hero__testi-stars">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
          <p className="hero__testi-text">"{t.text}"</p>
          <div className="hero__testi-footer">
            <div className="hero__testi-avatar">{t.initials}</div>
            <div>
              {/* <span className="hero__testi-name">{t.name}</span> */}
              <span className="hero__testi-role">{t.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
}