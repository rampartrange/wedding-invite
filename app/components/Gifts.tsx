'use client'

export default function Gifts() {
  return (
    <section id="gifts" style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)', position: 'relative', overflow: 'hidden' }}>
      <img src="/images/gifts-background.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', userSelect: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,3.5rem)', color: '#f5f0e8', marginBottom: '15px', fontFamily: "'Comfortaa', cursive", fontWeight: 400, animation: 'fadeInUp 0.8s ease-out forwards', textAlign: 'center' }}>
          Подарки
        </h2>
        <div className="doodle-line-olive" style={{ marginBottom: '40px' }} />

        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>

          {/* Left — visual */}
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '24px', padding: '48px 32px', textAlign: 'center', backdropFilter: 'blur(4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
            <span style={{ fontSize: '68px', display: 'block', marginBottom: '20px' }}>🎁</span>
            <p style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 400, fontSize: '1.15rem', color: '#f5f0e8', lineHeight: 1.6, fontStyle: 'italic' }}>
              «Главный подарок — это вы.<br />Всё остальное — приятный бонус»
            </p>
          </div>

          {/* Right — text */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.93)', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', padding: '36px' }}>
            <p style={{ fontSize: '1.05rem', color: '#2c2c2c', lineHeight: 1.8, marginBottom: '20px', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              Мы понимаем, что путь до нашего мероприятия не близкий, и поэтому для нас главным подарком будет ваше присутствие. Ваш приезд — это уже огромный сюрприз и настоящий подарок!
            </p>

            <div style={{ backgroundColor: 'rgba(184,80,95,0.08)', padding: '18px', borderRadius: '14px', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#b8505f', marginBottom: '8px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>Если хотите что-то подарить</h3>
              <p style={{ fontSize: '0.95rem', color: '#2c2c2c', lineHeight: 1.7, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
                Мы будем благодарны за вклад в наш совместный бюджет — это поможет нам воплотить наши планы и мечты.
              </p>
            </div>

            <div style={{ borderLeft: '4px solid #e8b860', paddingLeft: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#b8505f', marginBottom: '8px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>🌸 Просьба без цветов</h3>
              <p style={{ fontSize: '0.95rem', color: '#2c2c2c', lineHeight: 1.7, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
                К сожалению, мы не сможем забрать их с собой домой. Вместо букетов — улыбки и тёплые слова!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
