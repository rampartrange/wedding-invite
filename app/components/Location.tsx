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

const airports = [
  { name: 'Геленджик', note: '~30 мин до места', bg: '#2b52a3' },
  { name: 'Краснодар', note: '~3 часа на машине', bg: '#9ea84b' },
  { name: 'Сочи', note: '~5 часов на машине', bg: '#7b8fc7' },
]

const transport = [
  { label: '🚂 Поезд', badge: 'Рекомендуем', recommended: true },
  { label: '🚗 На машине', badge: 'Надёжно', recommended: false },
  { label: '✈️ Самолёт', badge: null, recommended: false },
]

export default function Location() {
  return (
    <section id="location" style={{ background: 'rgba(158,168,75,0.8)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,3.5rem)', color: '#ffffff', marginBottom: '15px', fontFamily: "'Comfortaa', cursive", fontWeight: 400, animation: 'fadeInUp 0.8s ease-out forwards', textAlign: 'center' }}>
          Как добраться
        </h2>
        <div className="doodle-line" style={{ marginBottom: '40px' }} />

        <div style={{ backgroundColor: '#f5f0e8', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', padding: '40px' }}>

          {/* Gratitude block */}
          <div style={{ background: '#b8505f', color: 'white', padding: '32px 36px', borderRadius: '16px', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '20px', top: '5px', fontSize: '80px', opacity: 0.12, pointerEvents: 'none' }}>♡</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.75, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              Мы безмерно благодарны вам за то, что вы готовы преодолеть такое расстояние, чтобы разделить с нами этот особенный день. Ваше присутствие — большой подарок для нас, и мы по-настоящему ценим вашу готовность приехать ❤️
            </p>
          </div>

          {/* Warning box */}
          <div style={{ background: '#fffbea', borderLeft: '5px solid #e8b860', padding: '20px 24px', borderRadius: '0 12px 12px 0', marginBottom: '28px' }}>
            <div style={{ fontFamily: "'Comfortaa', cursive", fontSize: '1rem', color: '#b8505f', marginBottom: '8px', fontWeight: 400 }}>⚠️ Важно знать</div>
            <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.95rem', lineHeight: 1.7, color: '#2c2c2c' }}>
              Учитывая, что на юге часто случаются отмены авиарейсов, мы рекомендуем <strong>приезжать за 1–2 дня до мероприятия</strong>. Также рассмотрите поезд или автомобиль — надёжнее и позволит насладиться красотами Краснодарского края.
            </p>
          </div>

          {/* Airports */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '16px', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#b8505f', marginBottom: '18px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>✈️ Аэропорты поблизости</h3>
            <div className="airports-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
              {airports.map(a => (
                <div
                  key={a.name}
                  style={{ background: a.bg, padding: '24px 16px', textAlign: 'center', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)' }}
                >
                  <span style={{ fontSize: '26px', display: 'block', marginBottom: '8px' }}>✈️</span>
                  <div style={{ fontFamily: "'Comfortaa', cursive", fontSize: '1.1rem', color: 'white', fontWeight: 400 }}>{a.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px', fontFamily: "'Nunito Sans', sans-serif" }}>{a.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transport pills */}
          <div style={{ borderLeft: '4px solid #e8b860', paddingLeft: '20px', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#2c2c2c', marginBottom: '14px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>Варианты транспорта</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {transport.map(t => (
                <div
                  key={t.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'white', border: `2px solid ${t.recommended ? '#b8505f' : '#2b52a3'}`,
                    borderRadius: '30px', padding: '10px 18px',
                    fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.95rem',
                    color: t.recommended ? '#b8505f' : '#2b52a3', fontWeight: 600,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.08)', transition: 'all 0.2s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = t.recommended ? '#b8505f' : '#2b52a3'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = t.recommended ? '#b8505f' : '#2b52a3'; e.currentTarget.style.transform = 'none' }}
                >
                  {t.label}
                  {t.badge && <span style={{ background: '#e8b860', color: '#2c2c2c', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px', fontWeight: 700 }}>{t.badge}</span>}
                </div>
              ))}
            </div>

            {/* Novorossiysk train tip */}
            <div style={{ marginTop: '18px', background: 'rgba(158,168,75,0.12)', border: '1px solid rgba(158,168,75,0.4)', borderRadius: '12px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>🚆</span>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.9rem', lineHeight: 1.65, color: '#2c2c2c' }}>
                <strong style={{ color: '#9ea84b' }}>Совет:</strong> есть поезда до <strong>Новороссийска</strong> — оттуда примерно <strong>30 минут на машине</strong> до площадки. Удобная альтернатива, если нет прямых рейсов в Геленджик.
              </p>
            </div>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: '#ffffff', borderRadius: '12px' }}>
            <span style={{ fontSize: '1.4rem' }}>📍</span>
            <a href={MAPS_WEB_URL} onClick={openMaps} rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: '#2c2c2c', textDecoration: 'none', borderBottom: '1px dashed #9ea84b', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              <strong>Адрес:</strong> Краснодарский край, г. Геленджик, ул. Стартовая, д. 1, корп. 2
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
