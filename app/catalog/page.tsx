"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    name: "Analisis Deskriptif (Multi Visual)",
    category: "Deskriptif",
    desc: "Menyajikan ringkasan data menggunakan berbagai visualisasi: histogram, pie chart, boxplot, dan tabel frekuensi. Cocok sebagai bab pembuka analisis penelitian kuantitatif.",
    tools: ["SPSS", "Excel", "R"],
  },
  {
    id: 2,
    name: "Regresi Linear (Sederhana, Berganda, Logistik)",
    category: "Regresi",
    desc: "Menganalisis hubungan antara satu atau lebih variabel independen terhadap variabel dependen. Mencakup interpretasi koefisien, R², dan signifikansi model.",
    tools: ["SPSS", "R", "Python"],
  },
  {
    id: 3,
    name: "Uji Asumsi Klasik (3–5 Variabel)",
    category: "Regresi",
    desc: "Pengujian normalitas, multikolinearitas, heteroskedastisitas, dan autokorelasi untuk memastikan model regresi memenuhi syarat BLUE.",
    tools: ["SPSS", "R"],
  },
  {
    id: 4,
    name: "Uji Asumsi Klasik (6–7 Variabel)",
    category: "Regresi",
    desc: "Sama dengan paket 3–5 variabel namun mencakup lebih banyak prediktor. Setiap uji asumsi dilaporkan lengkap dengan interpretasi dan solusi bila asumsi dilanggar.",
    tools: ["SPSS", "R"],
  },
  {
    id: 5,
    name: "Uji Validitas & Reliabilitas (3–5 Variabel)",
    category: "Regresi",
    desc: "Pengujian corrected item-total correlation untuk validitas dan Cronbach's Alpha untuk reliabilitas. Disertai rekomendasi item yang perlu dihapus atau dipertahankan.",
    tools: ["SPSS"],
  },
  {
    id: 6,
    name: "Uji Validitas & Reliabilitas (6–7 Variabel)",
    category: "Regresi",
    desc: "Paket lengkap validitas dan reliabilitas untuk instrumen dengan lebih banyak konstruk. Output mencakup tabel summary per variabel beserta interpretasinya.",
    tools: ["SPSS"],
  },
  {
    id: 7,
    name: "Regresi Berganda dengan Moderasi",
    category: "Regresi",
    desc: "Analisis pengaruh variabel moderator menggunakan moderated regression analysis (MRA). Dilengkapi simple slope analysis untuk interpretasi interaksi.",
    tools: ["SPSS", "R"],
  },
  {
    id: 8,
    name: "Regresi Berganda dengan Moderasi & Faktor Kontrol",
    category: "Regresi",
    desc: "Perluasan analisis moderasi dengan memasukkan covariat seperti usia, pendidikan, atau pengalaman agar estimasi lebih akurat.",
    tools: ["SPSS", "R"],
  },
  {
    id: 9,
    name: "SEM PLS 1st & 2nd Order (3–5 Var): Inner, Outer, Blindfold",
    category: "SEM-PLS",
    desc: "Pemodelan persamaan struktural berbasis partial least square untuk model reflektif/formatif. Meliputi pengujian outer model, inner model, dan Q² blindfolding.",
    tools: ["SmartPLS"],
  },
  {
    id: 10,
    name: "SEM PLS 1st & 2nd Order (6–8 Var): Inner, Outer, Blindfold",
    category: "SEM-PLS",
    desc: "Versi lebih kompleks dengan lebih banyak konstruk laten. Cocok untuk penelitian dengan model teoritis yang kaya variabel mediasi dan moderasi.",
    tools: ["SmartPLS"],
  },
  {
    id: 11,
    name: "SEM PLS 1st & 2nd Order Moderasi Tunggal (3–5 Var)",
    category: "SEM-PLS",
    desc: "Pengujian efek moderasi dalam kerangka SEM-PLS menggunakan interaksi produk atau orthogonalisasi. Dilengkapi analisis slope untuk interpretasi interaksi.",
    tools: ["SmartPLS"],
  },
  {
    id: 12,
    name: "SEM PLS Multi Moderasi dan Mediasi (6–8 Var)",
    category: "SEM-PLS",
    desc: "Paket paling lengkap untuk model SEM-PLS kompleks. Ideal untuk disertasi dan jurnal internasional dengan beberapa variabel moderator dan mediator.",
    tools: ["SmartPLS"],
  },
  {
    id: 13,
    name: "SEM CB-AMOS 1st & 2nd Order (3–5 Variabel)",
    category: "SEM-CB",
    desc: "Structural equation modeling berbasis covariance menggunakan AMOS. Meliputi CFA, uji kecocokan model (GOF), dan path diagram lengkap.",
    tools: ["AMOS"],
  },
  {
    id: 14,
    name: "SEM CB-AMOS 1st & 2nd Order (6–8 Variabel)",
    category: "SEM-CB",
    desc: "Paket CB-SEM untuk model yang lebih kompleks. Mencakup analisis modification index dan model trimming.",
    tools: ["AMOS"],
  },
  {
    id: 15,
    name: "SEM CB-AMOS 1st & 2nd Order, Moderasi (3–5 Var)",
    category: "SEM-CB",
    desc: "Pengujian moderasi dalam CB-SEM menggunakan multi-group analysis (MGA) atau produk interaksi laten. Dilengkapi chi-square difference test.",
    tools: ["AMOS"],
  },
  {
    id: 16,
    name: "SEM CB-AMOS 1st & 2nd Order, Multi Moderasi (6–8 Var)",
    category: "SEM-CB",
    desc: "Model CB-SEM dengan beberapa kelompok atau kondisi moderasi. Cocok untuk penelitian komparatif antar kelompok.",
    tools: ["AMOS"],
  },
  {
    id: 17,
    name: "Analisis SEM + Modifikasi Model",
    category: "SEM-CB",
    desc: "Layanan iteratif yang mencakup estimasi awal, diagnosis, modifikasi berdasarkan MI dan teori, hingga model final yang fit. Direkomendasikan untuk revisi skripsi/tesis.",
    tools: ["AMOS", "SmartPLS"],
  },
  {
    id: 18,
    name: "Paket TA Regresi: Deskriptif, Asumsi, Regresi Berganda",
    category: "Paket TA",
    desc: "Paket all-in-one untuk tugas akhir berbasis regresi. Mencakup statistik deskriptif, uji asumsi klasik, regresi berganda, dan interpretasi hasil siap tulis.",
    tools: ["SPSS", "R"],
  },
  {
    id: 19,
    name: "Paket TA VB-SEM/SmartPLS: Deskriptif, Inner, Outer, Blindfold",
    category: "Paket TA",
    desc: "Paket lengkap tugas akhir berbasis SmartPLS. Dari deskriptif hingga pelaporan model struktural. Output dalam format tabel dan gambar siap tempel di bab hasil.",
    tools: ["SmartPLS", "SPSS"],
  },
  {
    id: 20,
    name: "Paket TA CB-SEM/AMOS: Deskriptif, Inner, Outer, Smoothing",
    category: "Paket TA",
    desc: "Paket tugas akhir berbasis AMOS yang meliputi seluruh tahapan analisis. Termasuk pembahasan fit index, AVE, CR, dan path coefficient siap ditulis.",
    tools: ["AMOS", "SPSS"],
  },
  {
    id: 21,
    name: "EFA-CFA",
    category: "Deskriptif",
    desc: "Exploratory Factor Analysis untuk menemukan struktur laten, dilanjutkan Confirmatory Factor Analysis untuk menguji kesesuaian model pengukuran.",
    tools: ["SPSS", "R", "AMOS"],
  },
  {
    id: 22,
    name: "Analisis Data Panel & Time Series (Stata / Python)",
    category: "Lanjutan",
    desc: "Regresi data panel (fixed/random effect), uji Hausman, serta analisis deret waktu (ARIMA, VAR, VECM). Cocok untuk penelitian ekonomi dan keuangan.",
    tools: ["Stata", "Python", "EViews"],
  },
  {
    id: 23,
    name: "Analisis Multivariat Lanjutan (MANOVA, Cluster, Diskriminan)",
    category: "Lanjutan",
    desc: "Analisis lanjutan untuk data dengan banyak variabel dependen, pengelompokan objek, dan klasifikasi. Meliputi MANOVA, K-means clustering, dan analisis diskriminan.",
    tools: ["SPSS", "R"],
  },
  {
    id: 24,
    name: "Analisis Kualitatif dan Coding Tematik (NVivo / ATLAS.ti)",
    category: "Kualitatif",
    desc: "Pengkodean dan analisis tematik data wawancara, observasi, atau dokumen. Menghasilkan tema, kategori, dan mind map menggunakan software riset kualitatif.",
    tools: ["NVivo", "ATLAS.ti"],
  },
  {
    id: 25,
    name: "Visualisasi dan Dasbor Data (Tableau / Power BI)",
    category: "Visualisasi",
    desc: "Pembuatan dashboard interaktif dan infografis data untuk presentasi, laporan manajerial, atau publikasi. Data dapat berasal dari Excel, database, atau API.",
    tools: ["Tableau", "Power BI"],
  },
  {
    id: 26,
    name: "Uji SEM LISREL dan Mplus (CFA, Path Analysis, SEM Lanjutan)",
    category: "SEM-CB",
    desc: "Analisis CFA dan SEM menggunakan LISREL atau Mplus, termasuk model multilevel, bifactor, dan growth curve. Cocok untuk penelitian psikologi dan pendidikan tingkat lanjut.",
    tools: ["LISREL", "Mplus"],
  },
  {
    id: 27,
    name: "Pengendalian Kualitas dan Kapabilitas Proses (Minitab)",
    category: "Kualitas",
    desc: "Analisis capability process (Cp, Cpk), control chart (I-MR, Xbar-R), dan Gage R&R. Digunakan dalam penelitian teknik industri dan manajemen operasi.",
    tools: ["Minitab"],
  },
  {
    id: 28,
    name: "Analisis Statistik Lanjutan dan Eksploratori (Statistica)",
    category: "Lanjutan",
    desc: "Eksplorasi mendalam menggunakan Statistica untuk ANOVA multifaktorial, neural network dasar, dan analisis eksploratori seperti nonparametric tests.",
    tools: ["Statistica"],
  },
  {
    id: 29,
    name: "Analisis Ekonometrika dan Deret Waktu (EViews)",
    category: "Lanjutan",
    desc: "Pemodelan ekonometrika seperti OLS, GLS, ARCH/GARCH, kointegrasi, dan uji kausalitas Granger. Standar baku untuk penelitian ekonomi makro dan keuangan.",
    tools: ["EViews"],
  },
  {
    id: 30,
    name: "Analisis Data Skala Besar dan Pemodelan Prediktif (SAS)",
    category: "Lanjutan",
    desc: "Pengolahan dataset besar menggunakan SAS, termasuk regresi logistik, decision tree, dan pemodelan prediktif. Cocok untuk riset perusahaan dan lembaga skala besar.",
    tools: ["SAS"],
  },
];

// ─── Category config: warna selaras design system Axioma ──────────────────────

const catConfig: Record<
  string,
  { bg: string; border: string; tx: string; dot: string }
> = {
  Deskriptif: {
    bg: "rgba(0,115,204,0.07)",
    border: "rgba(0,115,204,0.20)",
    tx: "var(--electric-dark)",
    dot: "var(--electric)",
  },
  Regresi: {
    bg: "rgba(20,81,163,0.07)",
    border: "rgba(20,81,163,0.20)",
    tx: "var(--blue-700)",
    dot: "var(--blue-600)",
  },
  "SEM-PLS": {
    bg: "rgba(160,120,32,0.08)",
    border: "rgba(160,120,32,0.22)",
    tx: "var(--gold-dark)",
    dot: "var(--gold)",
  },
  "SEM-CB": {
    bg: "rgba(26,107,200,0.07)",
    border: "rgba(26,107,200,0.20)",
    tx: "var(--blue-600)",
    dot: "var(--blue-500)",
  },
  "Paket TA": {
    bg: "rgba(160,120,32,0.10)",
    border: "rgba(160,120,32,0.26)",
    tx: "var(--gold)",
    dot: "var(--gold-light)",
  },
  Lanjutan: {
    bg: "rgba(83,74,183,0.07)",
    border: "rgba(83,74,183,0.20)",
    tx: "#3C3489",
    dot: "#534AB7",
  },
  Kualitatif: {
    bg: "rgba(153,53,86,0.07)",
    border: "rgba(153,53,86,0.20)",
    tx: "#72243E",
    dot: "#993556",
  },
  Visualisasi: {
    bg: "rgba(15,110,86,0.07)",
    border: "rgba(15,110,86,0.20)",
    tx: "#0B6B50",
    dot: "#1D9E75",
  },
  Kualitas: {
    bg: "rgba(59,109,17,0.07)",
    border: "rgba(59,109,17,0.20)",
    tx: "#27500A",
    dot: "#3B6D11",
  },
};

const fallbackCat = {
  bg: "rgba(0,115,204,0.07)",
  border: "rgba(0,115,204,0.20)",
  tx: "var(--electric-dark)",
  dot: "var(--electric)",
};

const allCategories = [
  "Semua",
  ...Array.from(new Set(services.map((s) => s.category))),
];

const stats = [
  { num: "30", label: "Layanan Tersedia", icon: "M4 6h16M4 10h16M4 14h10" },
  {
    num: "9",
    label: "Kategori Analisis",
    icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  },
  {
    num: "15+",
    label: "Software Didukung",
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  },
  {
    num: "100%",
    label: "Konsultasi Gratis",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

// ─── Animated counter ─────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let frame = 0;
          const total = Math.ceil(duration / 16);
          const t = setInterval(() => {
            frame++;
            setVal(Math.round((1 - Math.pow(1 - frame / total, 3)) * target));
            if (frame >= total) clearInterval(t);
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function StatCard({
  num,
  label,
  icon,
}: {
  num: string;
  label: string;
  icon: string;
}) {
  const isNum = /^\d+/.test(num);
  const numVal = isNum ? parseInt(num) : 0;
  const suffix = num.replace(/^\d+/, "");
  const { val, ref } = useCountUp(numVal);

  return (
    <div className="cl-stat">
      <div className="cl-stat__icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d={icon}
            stroke="var(--electric)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="cl-stat__val"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {isNum ? `${val}${suffix}` : num}
      </div>
      <div className="cl-stat__label">{label}</div>
    </div>
  );
}

// ─── Accordion item ───────────────────────────────────────────────────────────

function ServiceRow({
  svc,
  isOpen,
  onToggle,
}: {
  svc: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const color = catConfig[svc.category] ?? fallbackCat;
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`cl-row ${isOpen ? "cl-row--open" : ""}`}>
      <button
        className="cl-row__head"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Number */}
        <span className="cl-row__num">{String(svc.id).padStart(2, "0")}</span>

        {/* Dot indicator */}
        <span className="cl-row__dot" style={{ background: color.dot }} />

        {/* Name */}
        <span className="cl-row__name">{svc.name}</span>

        {/* Badge */}
        <span
          className="cl-row__badge"
          style={{
            background: color.bg,
            borderColor: color.border,
            color: color.tx,
          }}
        >
          {svc.category}
        </span>

        {/* Chevron */}
        <span className="cl-row__chev" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Expandable body */}
      {isOpen && (
        <div ref={bodyRef} className="cl-row__body">
          <p className="cl-row__desc">{svc.desc}</p>

          <div className="cl-row__footer">
            <div className="cl-row__tools">
              {svc.tools.map((t) => (
                <span key={t} className="cl-row__tool">
                  {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="cl-row__cta">
              Tanya layanan ini
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2.5 6.5h8M6.5 2.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CatalogPage() {
  const [active, setActive] = useState("Semua");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    active === "Semua"
      ? services
      : services.filter((s) => s.category === active);

  const catCount = Object.fromEntries(
    allCategories.map((c) => [
      c,
      c === "Semua"
        ? services.length
        : services.filter((s) => s.category === c).length,
    ]),
  );

  function handleFilter(cat: string) {
    setActive(cat);
    setOpenId(null);
  }

  return (
    <>
      <style>{`
        /* ══ STATS ══════════════════════════════════════════ */
        .cl-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin: 0 0 52px;
        }
        .cl-stat {
          background: linear-gradient(135deg, #ffffff 0%, var(--navy-900) 100%);
          border: 1px solid var(--navy-600);
          border-radius: var(--radius);
          padding: 22px 18px 18px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: transform .2s, box-shadow .2s;
        }
        .cl-stat:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .cl-stat__icon {
          width: 36px; height: 36px;
          background: rgba(0,115,204,0.08);
          border: 1px solid rgba(0,115,204,0.16);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 12px;
        }
        .cl-stat__val {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 700;
          color: var(--electric-dark);
          line-height: 1; margin-bottom: 5px;
          letter-spacing: -.01em;
        }
        .cl-stat__label {
          font-size: 11.5px; color: var(--gray-300);
          letter-spacing: .04em; line-height: 1.4;
        }

        /* ══ DIVIDER ════════════════════════════════════════ */
        .cl-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--navy-600), transparent);
          margin: 0 0 36px;
        }

        /* ══ FILTER PILLS ═══════════════════════════════════ */
        .cl-filters {
          display: flex; flex-wrap: wrap; gap: 8px;
          justify-content: center; margin-bottom: 40px;
        }
        .cl-filter {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-body);
          font-size: 12.5px; font-weight: 600; letter-spacing: .02em;
          color: var(--gray-200);
          background: rgba(255,255,255,.75);
          border: 1px solid var(--navy-600);
          padding: 7px 16px; border-radius: 100px;
          cursor: pointer; transition: all .2s ease;
        }
        .cl-filter:hover {
          color: var(--white); background: #ffffff;
          border-color: var(--navy-700);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        .cl-filter--active {
          color: var(--electric-dark);
          background: rgba(0,115,204,0.09);
          border-color: var(--electric);
        }
        .cl-filter--active:hover {
          background: rgba(0,115,204,0.13);
          border-color: var(--electric-hover);
          color: var(--electric-dark);
        }
        .cl-filter__count {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 20px; height: 18px; padding: 0 5px;
          border-radius: 100px; font-size: 10px; font-weight: 700;
          background: rgba(0,0,0,.07); color: var(--gray-300);
          transition: background .2s, color .2s;
        }
        .cl-filter--active .cl-filter__count {
          background: rgba(0,115,204,0.15); color: var(--electric-dark);
        }

        /* ══ ROW (accordion item) ════════════════════════════ */
        .cl-list {
          display: flex; flex-direction: column; gap: 5px;
          margin-bottom: 60px;
        }
        .cl-row {
          background: linear-gradient(135deg, #ffffff 0%, var(--navy-900) 100%);
          border: 1px solid var(--navy-600);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color .22s ease, box-shadow .22s ease;
        }
        .cl-row:hover {
          border-color: rgba(0,115,204,0.30);
          box-shadow: var(--shadow-sm);
        }
        .cl-row--open {
          border-color: var(--electric);
          box-shadow: var(--shadow-md);
        }

        /* Row head */
        .cl-row__head {
          display: grid;
          grid-template-columns: 40px 10px 1fr auto 24px;
          align-items: center; gap: 12px;
          padding: 14px 20px;
          background: transparent; border: none;
          width: 100%; text-align: left; cursor: pointer;
          font-family: var(--font-body);
          transition: background .15s;
          -webkit-tap-highlight-color: transparent;
        }
        .cl-row__head:hover {
          background: rgba(0,115,204,0.025);
        }
        .cl-row--open .cl-row__head {
          background: rgba(0,115,204,0.04);
        }
        .cl-row__num {
          font-size: 11px; font-weight: 700; letter-spacing: .08em;
          color: var(--gray-400); font-variant-numeric: tabular-nums;
        }
        .cl-row__dot {
          width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
          opacity: .8;
        }
        .cl-row__name {
          font-size: 13.5px; font-weight: 600; color: var(--white);
          line-height: 1.45; transition: color .15s;
        }
        .cl-row__head:hover .cl-row__name,
        .cl-row--open .cl-row__name { color: var(--electric); }
        .cl-row__badge {
          font-size: 10.5px; font-weight: 600; letter-spacing: .05em;
          padding: 3px 10px; border-radius: 4px;
          border-width: 1px; border-style: solid; white-space: nowrap;
        }
        .cl-row__chev {
          display: flex; align-items: center; justify-content: center;
          color: var(--gray-400);
          transition: transform .25s ease, color .15s;
        }
        .cl-row--open .cl-row__chev {
          transform: rotate(180deg); color: var(--electric);
        }

        /* Row body */
        .cl-row__body {
          border-top: 1px solid rgba(0,0,0,0.05);
          padding: 18px 20px 20px calc(40px + 10px + 12px + 12px);
          animation: cl-in .2s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes cl-in {
          from { opacity: 0; transform: translateY(-5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cl-row__desc {
          font-size: 13.5px; color: var(--gray-200);
          line-height: 1.78; margin-bottom: 16px;
        }
        .cl-row__footer {
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px; flex-wrap: wrap;
        }
        .cl-row__tools {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .cl-row__tool {
          font-size: 11px; font-weight: 600; letter-spacing: .04em;
          color: var(--blue-600);
          background: rgba(20,81,163,0.07);
          border: 1px solid rgba(20,81,163,0.18);
          padding: 3px 10px; border-radius: 4px;
        }
        .cl-row__cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600; letter-spacing: .02em;
          color: var(--electric); text-decoration: none;
          padding: 7px 16px; border-radius: var(--radius-sm);
          border: 1px solid rgba(0,115,204,0.25);
          background: rgba(0,115,204,0.06);
          transition: background .2s, border-color .2s, transform .2s;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
        }
        .cl-row__cta:hover {
          background: rgba(0,115,204,0.13);
          border-color: var(--electric);
          transform: translateX(2px);
        }
        .cl-row__cta svg { flex-shrink: 0; }

        /* ══ BOTTOM CTA ═════════════════════════════════════ */
        .cl-cta {
          background: linear-gradient(135deg, var(--navy) 0%, var(--blue-700) 100%);
          border-radius: var(--radius-lg);
          padding: 48px 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 32px;
          flex-wrap: wrap;
          box-shadow: var(--shadow-lg);
        }
        .cl-cta__left {}
        .cl-cta__eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: .16em;
          text-transform: uppercase; color: rgba(255,255,255,.5);
          margin-bottom: 8px;
        }
        .cl-cta__title {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700; color: #ffffff; line-height: 1.3;
          margin-bottom: 6px;
        }
        .cl-cta__sub {
          font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.6;
        }
        .cl-cta__actions {
          display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0;
        }
        .cl-cta__btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-body);
          font-size: 14px; font-weight: 600; color: var(--navy);
          text-decoration: none; padding: 12px 24px;
          background: #ffffff; border-radius: var(--radius);
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          transition: transform .2s, box-shadow .2s;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
        }
        .cl-cta__btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.20);
        }
        .cl-cta__btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-body);
          font-size: 14px; font-weight: 600; color: rgba(255,255,255,.85);
          text-decoration: none; padding: 12px 24px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: var(--radius);
          transition: background .2s, border-color .2s, transform .2s;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
        }
        .cl-cta__btn-ghost:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
        }

        /* ══ RESPONSIVE ══════════════════════════════════════ */
        @media (max-width: 700px) {
          .cl-stats { grid-template-columns: repeat(2, 1fr); }
          .cl-row__head {
            grid-template-columns: 32px 8px 1fr 20px;
            padding: 12px 14px; gap: 8px;
          }
          .cl-row__badge { display: none; }
          .cl-row__body {
            padding: 14px 14px 18px 14px;
          }
          .cl-row__footer { flex-direction: column; align-items: flex-start; }
          .cl-cta { padding: 32px 24px; }
          .cl-cta__actions { width: 100%; }
          .cl-cta__btn-primary, .cl-cta__btn-ghost { flex: 1; justify-content: center; }
        }
        @media (max-width: 420px) {
          .cl-stats { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .cl-stat__val { font-size: 22px; }
        }
      `}</style>

      <section className="catalog section" id="catalog">
        <div className="container">
          {/* ── Header ─────────────────────────────────────── */}
          <div className="catalog__header animate-fadeUp">
            <p className="section-label">Katalog Lengkap</p>
            <h2 className="section-title">
              30 Layanan Analisis
              <br />
              <em>Siap Dikerjakan</em>
            </h2>
            <p className="catalog__sub">
              Klik pada layanan untuk melihat deskripsi lengkap dan software
              yang digunakan. Konsultasi awal <strong>gratis</strong> untuk
              menentukan metode terbaik.
            </p>
          </div>

          {/* ── Stats ──────────────────────────────────────── */}
          <div className="cl-stats animate-fadeUp delay-1">
            {stats.map((s) => (
              <StatCard
                key={s.label}
                num={s.num}
                label={s.label}
                icon={s.icon}
              />
            ))}
          </div>

          <div className="cl-divider" />

          {/* ── Filter pills ───────────────────────────────── */}
          <div className="cl-filters animate-fadeUp delay-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                className={`cl-filter ${active === cat ? "cl-filter--active" : ""}`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
                <span className="cl-filter__count">{catCount[cat]}</span>
              </button>
            ))}
          </div>

          {/* ── Service list ───────────────────────────────── */}
          <div className="cl-list animate-fadeUp delay-3">
            {filtered.map((svc) => (
              <ServiceRow
                key={svc.id}
                svc={svc}
                isOpen={openId === svc.id}
                onToggle={() => setOpenId(openId === svc.id ? null : svc.id)}
              />
            ))}
          </div>

          {/* ── Bottom CTA ─────────────────────────────────── */}
          <div className="cl-cta animate-fadeUp delay-4">
            <div className="cl-cta__left">
              <p className="cl-cta__eyebrow">Tidak ada yang cocok?</p>
              <h3 className="cl-cta__title">
                Ceritakan kebutuhan
                <br />
                penelitian Anda
              </h3>
              <p className="cl-cta__sub">
                Tim kami siap merancang solusi analisis yang sesuai. Mulai dari
                konsultasi metode hingga pelaporan akhir.
              </p>
            </div>
            <div className="cl-cta__actions">
              <Link href="/contact" className="cl-cta__btn-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 4.5A1.5 1.5 0 013.5 3h9A1.5 1.5 0 0114 4.5v7A1.5 1.5 0 0112.5 13h-9A1.5 1.5 0 012 11.5v-7z"
                    stroke="var(--navy)"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M2 5l6 4 6-4"
                    stroke="var(--navy)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                Konsultasi Sekarang
              </Link>
              <a
                href="https://wa.me/62812xxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="cl-cta__btn-ghost"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.5 2.5A7 7 0 002.1 11.3L1 15l3.8-1A7 7 0 1013.5 2.5z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6.5c.2.5.6 1.3 1.2 1.8.6.6 1.4 1 1.8 1.2.1 0 .2 0 .3-.1l.8-.8c.1-.1.3-.1.4 0l1.5 1c.1.1.1.3 0 .4-.4.6-1.1 1.2-1.9 1.1C8 11 5 8 4.9 6.3c0-.8.5-1.5 1.1-1.9.1-.1.3-.1.4 0l1 1.5c.1.1.1.3 0 .4l-.4.2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
