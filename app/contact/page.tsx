export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">

          {/* LEFT — Heading & CTA */}
          <div className="contact__left">
            <p className="contact__label">Hubungi Kami</p>

            <h2 className="contact__title">
              Mulai<br />
              <em>Konsultasi</em><br />
              Hari Ini
            </h2>

            <p className="contact__desc">
              Ceritakan kebutuhan penelitian Anda dan tim ahli kami siap membantu
              menentukan metode analisis terbaik — tanpa biaya konsultasi awal.
            </p>

            <div className="contact__btns">
              <a href="https://wa.me/628xxxxxxxxx" className="contact__btn contact__btn--primary">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M15.5 12.5c0 .34-.08.67-.23.97-.15.3-.37.57-.64.78-.45.4-1.03.62-1.63.64H4.17L1.5 16.5V3.5c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v9z"
                    stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                Chat WhatsApp
              </a>
              <a href="mailto:axiomaconsultant@gmail.com" className="contact__btn contact__btn--ghost">
                Kirim Email
              </a>
            </div>

            <div className="contact__deco" aria-hidden="true" />
          </div>

          {/* RIGHT — Info Cards */}
          <div className="contact__right">

            {/* WhatsApp — Featured */}
            <div className="contact__card contact__card--featured">
              <div className="contact__card-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15.5 12.5c0 .34-.08.67-.23.97-.15.3-.37.57-.64.78-.45.4-1.03.62-1.63.64H4.17L1.5 16.5V3.5c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v9z"
                    stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="contact__card-body">
                <div className="contact__badge">
                  <span className="contact__badge-dot" />
                  Respon cepat
                </div>
                <div className="contact__card-label">WhatsApp</div>
                <a href="https://wa.me/628xxxxxxxxx" className="contact__card-val">
                  +62 8xx-xxxx-xxxx
                </a>
              </div>
              <svg className="contact__card-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Email */}
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1.5" y="4" width="15" height="10" rx="2"
                    stroke="var(--electric)" strokeWidth="1.4" />
                  <path d="M1.5 6.5L9 11l7.5-4.5"
                    stroke="var(--electric)" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="contact__card-body">
                <div className="contact__card-label">Email</div>
                <a href="mailto:axiomaconsultant@gmail.com" className="contact__card-val">
                  axiomaconsultant@gmail.com
                </a>
              </div>
              <svg className="contact__card-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Jam Operasional */}
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7.5" stroke="var(--electric)" strokeWidth="1.4" />
                  <path d="M9 5v4l2.5 2.5" stroke="var(--electric)" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="contact__card-body">
                <div className="contact__card-label">Jam Operasional</div>
                <div className="contact__card-val">Senin – Jumat</div>
                <div className="contact__card-val contact__card-val--sm">09.00 – 17.00 WIB</div>
                <div className="contact__card-val contact__card-val--sm">Sabtu: 09.00 – 13.00 WIB</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}