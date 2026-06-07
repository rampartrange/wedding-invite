'use client'

const MAPS_WEB_URL = 'https://yandex.ru/maps/org/gelendzhik_golf_rezort/112258572117'
const MAPS_APP_URL = 'yandexmaps://maps.yandex.ru/?oid=112258572117&ol=biz'

function openMaps(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    const fallback = setTimeout(() => { window.location.href = MAPS_WEB_URL }, 1500)
    window.addEventListener('blur', () => clearTimeout(fallback), { once: true })
    window.location.href = MAPS_APP_URL
  } else {
    window.open(MAPS_WEB_URL, '_blank')
  }
}

export default function WeddingDetails() {
  return (
    <section id="details" style={{ position: 'relative', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)', overflow: 'hidden' }}>
      {/* Background image */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <img src="/images/background.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'brightness(0.9)' }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

          {/* Left — text */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: '#c4405e', marginBottom: '15px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>
              Дорогие друзья!
            </h2>
            <div className="doodle-line" style={{ background: '#c4405e', margin: '0 0 28px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#2c2c2c', lineHeight: 1.8, marginBottom: '28px', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              С огромной радостью приглашаем вас разделить с нами самый важный и счастливый день в нашей жизни —
              день нашей свадьбы! Мечтаем, чтобы этот праздник прошёл в окружении самых близких и любимых людей.
            </p>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: '24px', boxShadow: '0 8px 30px rgba(43,82,163,0.15)', padding: '32px', marginBottom: '24px' }}>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '6px', color: '#2b52a3', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>Когда</h3>
                  <p style={{ fontSize: '1.1rem', color: '#2c2c2c', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>24 августа 2026 года</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#2b52a3', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>Где</h3>
                  <div style={{ background: '#f5f0e8', padding: '12px 16px', borderRadius: '12px' }}>
                    <a href={MAPS_WEB_URL} onClick={openMaps} rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: '#2c2c2c', textDecoration: 'none', borderBottom: '1px dashed #2b52a3', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
                      Краснодарский край, г. Геленджик, ул. Стартовая, д. 1, корп. 2
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#2c2c2c', lineHeight: 1.8, fontStyle: 'italic', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              Мы решили отпраздновать этот день ярко и незабываемо — в природной локации на свежем воздухе,
              с живописным видом на море и горы.
            </p>
          </div>

          {/* Right — circular visual */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: 'min(300px,70vw)', height: 'min(300px,70vw)', borderRadius: '50%',
              background: '#e8b860', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              color: '#2c2c2c', textAlign: 'center', padding: '40px',
              position: 'relative', boxShadow: '0 12px 40px rgba(232,184,96,0.4)',
            }}>
              {/* Rotating dashed ring */}
              <div style={{ position: 'absolute', inset: '-15px', border: '3px dashed rgba(184,80,95,0.35)', borderRadius: '50%', animationName: 'rotateRing', animationDuration: '20s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} />
              <div style={{ fontSize: '44px', marginBottom: '12px' }}>🌊</div>
              <div style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 400, fontSize: '1.2rem', lineHeight: 1.4, color: '#2b52a3' }}>
                Море, горы<br />и самые близкие
              </div>
              <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.9rem', marginTop: '10px', color: '#b8505f', fontWeight: 600 }}>
                Геленджик · 2026
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
