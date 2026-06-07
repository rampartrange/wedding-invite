'use client'

export default function WeddingDetails() {
  return (
    <section id="details" style={{ position: 'relative', padding: '80px 20px', overflow: 'hidden' }}>
      {/* Background image layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}>
        <img
          src="/images/background.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7,
            filter: 'brightness(0.9)',
          }}
        />
        {/* Image overlay removed */}
      </div>

      {/* Content */}
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#2b52a3',
            marginBottom: '15px',
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 400,
            textAlign: 'center',
          }}>
            Дорогие друзья!
          </h2>

          <div className="doodle-line" />

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            color: '#2c2c2c',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto 30px',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
            textAlign: 'center',
          }}>
            С огромной радостью приглашаем вас разделить с нами самый важный и счастливый день в нашей жизни —
            день нашей свадьбы! Мечтаем, чтобы этот праздник прошёл в окружении самых близких и любимых людей.
          </p>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(43, 82, 163, 0.15)',
            padding: '40px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'grid',
              gap: '25px',
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.6rem',
                  marginBottom: '8px',
                  color: '#2b52a3',
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 400,
                }}>
                  Когда
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#2c2c2c',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  24 августа 2026 года
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.6rem',
                  marginBottom: '8px',
                  color: '#2b52a3',
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 400,
                }}>
                  Где
                </h3>
                <div style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  background: '#f5f0e8',
                  padding: '15px 20px',
                  borderRadius: '12px',
                }}>
                  <p style={{
                    fontSize: '1rem',
                    color: '#2c2c2c',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}>
                    <a href="https://yandex.ru/maps/org/gelendzhik_golf_rezort/112258572117?si=vzup2y74ufbvhdnhkc4343715m" target="_blank" rel="noopener noreferrer" style={{ color: '#2c2c2c', textDecoration: 'none', borderBottom: '1px dashed #2b52a3' }}>
                      Краснодарский край, г. Геленджик, ул. Стартовая, д. 1, корп. 2
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#2c2c2c',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '30px auto 0',
            fontStyle: 'italic',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
            textAlign: 'center',
          }}>
            Мы решили отпраздновать этот день ярко и незабываемо — в природной локации на свежем воздухе,
            с живописным видом на море и горы. Где-то между зелёными холмами и бескрайней синевой
            мы найдём наш особенный момент.
          </p>
        </div>
      </div>
    </section>
  )
}
