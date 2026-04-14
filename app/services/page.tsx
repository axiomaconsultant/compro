const categories = [
  {
    icon: "📊",
    title: "Analisis Deskriptif",
    desc: "Statistik deskriptif, distribusi frekuensi, visualisasi multi-format, EFA-CFA.",
    tags: ["SPSS", "R", "Excel"],
    color: "#2585d4",
  },
  {
    icon: "📈",
    title: "Regresi & Uji Asumsi",
    desc: "Regresi linear sederhana & berganda, uji asumsi klasik, uji validitas & reliabilitas, moderasi.",
    tags: ["SPSS", "JASP", "R"],
    color: "#00aaff",
  },
  {
    icon: "🔗",
    title: "SEM-PLS (SmartPLS)",
    desc: "SEM PLS 1st & 2nd Order, blindfold, moderasi tunggal dan multi-moderasi mediasi.",
    tags: ["SmartPLS", "R"],
    color: "#c9a84c",
  },
  {
    icon: "🧩",
    title: "SEM-CB (AMOS/LISREL)",
    desc: "Confirmatory Factor Analysis, path analysis, multi-moderasi, modifikasi model.",
    tags: ["AMOS", "LISREL", "Mplus"],
    color: "#3fa0e8",
  },
  {
    icon: "🔬",
    title: "Analisis Lanjutan",
    desc: "MANOVA, Cluster, Diskriminan, data panel, time series, ekonometrika.",
    tags: ["Stata", "Python", "EViews", "SAS"],
    color: "#7ec4f5",
  },
  {
    icon: "💬",
    title: "Analisis Kualitatif",
    desc: "Coding tematik, analisis konten, manajemen referensi dan kategori data.",
    tags: ["NVivo", "ATLAS.ti"],
    color: "#e8c96b",
  },
  {
    icon: "📉",
    title: "Visualisasi Data",
    desc: "Dashboard interaktif, visualisasi multidimensi, laporan visual profesional.",
    tags: ["Tableau", "Power BI"],
    color: "#00d4ff",
  },
  {
    icon: "⚙️",
    title: "Kualitas & Proses",
    desc: "Pengendalian kualitas, kapabilitas proses, analisis statistik industri.",
    tags: ["Minitab", "Statistica"],
    color: "#4dc3a8",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <p className="section-label">Layanan Kami</p>
          <h2 className="section-title">
            Analisis <em>Lengkap</em>
            <br />
            untuk Semua Kebutuhan
          </h2>
          <p className="services__subtitle">
            Dari statistik deskriptif hingga SEM kompleks — kami siap mendampingi
            setiap tahap penelitian Anda.
          </p>
        </div>

        <div className="services__grid">
          {categories.map((cat, i) => (
            <div
              className="services__card"
              key={i}
              style={{ "--card-color": cat.color } as React.CSSProperties}
            >
              <div className="services__card-icon">{cat.icon}</div>
              <h3 className="services__card-title">{cat.title}</h3>
              <p className="services__card-desc">{cat.desc}</p>
              <div className="services__card-tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="services__tag">{tag}</span>
                ))}
              </div>
              <div className="services__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}