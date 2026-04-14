export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__left">
            <p className="section-label">Hubungi Kami</p>
            <h2 className="section-title">
              Mulai <em>Konsultasi</em>
              <br />
              Hari Ini
            </h2>
            <p className="contact__desc">
              Ceritakan kebutuhan penelitian Anda dan tim ahli kami siap membantu
              menentukan metode analisis terbaik — tanpa biaya konsultasi awal.
            </p>

            <div className="contact__info">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1.5" y="4" width="15" height="10" rx="2" stroke="var(--electric)" strokeWidth="1.3" />
                    <path d="M1.5 6.5L9 11l7.5-4.5" stroke="var(--electric)" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <a href="mailto:axiomaconsultant@gmail.com" className="contact__info-val">
                    axiomaconsultant@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15.5 12.5c0 .34-.08.67-.23.97-.15.3-.37.57-.64.78-.45.4-1.03.62-1.63.64H4.17L1.5 16.5V3.5c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v9z" stroke="var(--electric)" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">WhatsApp</div>
                  <a href="https://wa.me/628xxxxxxxxx" className="contact__info-val">
                    +62 8xx-xxxx-xxxx
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7.5" stroke="var(--electric)" strokeWidth="1.3" />
                    <path d="M9 5v4l2.5 2.5" stroke="var(--electric)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Jam Operasional</div>
                  <div className="contact__info-val">Senin – Jumat: 09.00 – 17.00 WIB</div>
                  <div className="contact__info-val contact__info-val--sm">Sabtu: 09.00 – 13.00 WIB</div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}