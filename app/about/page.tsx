const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="var(--electric)" strokeWidth="1.4" />
        <path
          d="M7 11l2.5 2.5L15 8"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Pengerjaan Cepat & Tepat Waktu",
    desc: "File dikirim sesuai deadline, bahkan tim siap lembur malam demi memastikan hasil sampai ke tangan Anda tepat waktu.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="var(--electric)" strokeWidth="1.4" />
        <path
          d="M7 8h5M7 11h8M7 14h4"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="16" cy="7" r="2.5" fill="var(--electric)" opacity="0.15" stroke="var(--electric)" strokeWidth="1.2" />
        <path d="M15.2 7l.6.6 1.2-1.2" stroke="var(--electric)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Hasil Lengkap & Terstruktur",
    desc: "Output mencakup semua variabel, laporan naratif, tabel analisis yang rapi, dan referensi jurnal siap pakai.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3C7 3 4 6 4 10c0 2.5 1.2 4.7 3 6.1V19l2.5-1.5L11 19l1.5-1.5L15 19v-2.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7Z"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 10.5l1.5 1.5 3-3"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Data & Privasi Terjaga",
    desc: "Kuesioner dan data penelitian dijaga kerahasiaannya — tidak disebarkan ke pihak lain, hanya dianalisis bersama promotor.",
  },
];
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-divider" />
      <div className="container">
        <div className="about__layout">
          <div className="about__left">
            <p className="section-label">Tentang Kami</p>
            <h2 className="section-title">
              Mitra Analitik
              <br />
              <em>Terpercaya</em> untuk
              <br />
              Penelitian Anda
            </h2>

            <p className="about__desc">
              Axioma Data Solutions adalah penyedia jasa pengolahan data statistik
              profesional yang melayani kebutuhan analisis kuantitatif bagi
              mahasiswa, peneliti, dan institusi akademik di Indonesia.
            </p>

            <p className="about__desc">
              Didirikan dengan misi membantu para akademisi menghasilkan penelitian
              berkualitas tinggi, Axioma menghadirkan layanan mulai dari analisis
              deskriptif dasar hingga Structural Equation Modeling (SEM) tingkat
              lanjut.
            </p>

            <div className="about__software-grid">
              {[
                "SPSS","SmartPLS","AMOS","R","Excel","Stata","Python","LISREL",
                "NVivo","Tableau","JASP","Mplus","Minitab","Statistica","EViews","SAS",
              ].map((s) => (
                <span key={s} className="about__sw-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="about__right">
            <div className="about__card-stack">
              <div className="about__bg-card" />
              <div className="about__main-card">
                <div className="about__card-header">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect width="36" height="36" rx="8" fill="rgba(0,170,255,0.1)" />
                    <rect x="5" y="24" width="6" height="8" rx="1.5" fill="var(--blue-400)" opacity="0.5" />
                    <rect x="13" y="18" width="6" height="14" rx="1.5" fill="var(--blue-400)" opacity="0.7" />
                    <rect x="21" y="10" width="6" height="22" rx="1.5" fill="var(--blue-300)" />
                    <path d="M7 26 L15 20 L23 14 L28 9" stroke="var(--electric)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
                    <circle cx="28" cy="9" r="2.5" fill="var(--electric)" />
                  </svg>
                  <div>
                    <div className="about__card-title">Axioma Data Solutions</div>
                    <div className="about__card-sub">Konsultan Statistik Profesional</div>
                  </div>
                </div>
                {pillars.map((p, i) => (
                  <div key={i} className="about__pillar">
                    <div className="about__pillar-icon">{p.icon}</div>
                    <div>
                      <div className="about__pillar-title">{p.title}</div>
                      <div className="about__pillar-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}