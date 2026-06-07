'use client'

export default function Final() {
  return (
    <section id="final" style={{ background: 'rgba(184, 80, 95, 0.8)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '25px',
            animation: 'float 3s ease-in-out infinite',
          }}>
            💕
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#e8b860',
            marginBottom: '25px',
            lineHeight: 1.3,
            fontFamily: "'LoliCandy', cursive",
            fontWeight: 400,
          }}>
            Мы вас ждём!
          </h2>

          <div className="doodle-line" style={{ marginBottom: '30px' }} />

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            color: '#f5f0e8',
            lineHeight: 1.9,
            maxWidth: '700px',
            margin: '0 auto 40px',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}>
            Мы так сильно ждём нашу встречу с вами! Этот день станет для нас особенным,
            ведь мы соберёмся вместе, чтобы отпраздновать любовь, счастье и начало нашей
            совместной истории. Спасибо, что вы есть в нашей жизни, и спасибо, что готовы
            разделить с нами этот волшебный момент. До встречи 24 августа в Геленджике!
          </p>

          <div style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: '#e8b860',
            marginTop: '20px',
            fontFamily: "'LoliCandy', cursive",
            fontWeight: 400,
          }}>
            С любовью, Артём и Вита
          </div>

          <div style={{
            marginTop: '40px',
            fontSize: '1.5rem',
            letterSpacing: '5px',
            color: '#e8b860',
            animation: 'pulse 2s ease-in-out infinite',
          }}>
            ✦ ✦ ✦
          </div>
        </div>
      </div>
    </section>
  )
}
