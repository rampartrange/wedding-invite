'use client'

export default function Gifts() {
  return (
    <section id="gifts" style={{ background: 'rgba(184, 80, 95, 0.8)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#f5f0e8',
            marginBottom: '15px',
            fontFamily: "'LoliCandy', cursive",
            fontWeight: 400,
            animation: 'fadeInUp 0.8s ease-out forwards',
            textAlign: 'center',
          }}>
            Подарки
          </h2>

          <div className="doodle-line-olive" style={{ marginBottom: '40px' }} />

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            padding: '40px',
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#2c2c2c',
              lineHeight: 1.8,
              marginBottom: '25px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              textAlign: 'center',
            }}>
              Мы понимаем, что путь до нашего мероприятия не близкий, и поэтому для нас
              главным подарком будет ваше присутствие. Ваш приезд — это уже огромный сюрприз
              и настоящий подарок, который мы ценим выше всего!
            </p>

            <div style={{
              backgroundColor: 'rgba(184, 80, 95, 0.1)',
              padding: '20px',
              borderRadius: '16px',
              marginBottom: '25px',
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#b8505f',
                marginBottom: '10px',
                fontFamily: "'LoliCandy', cursive",
                fontWeight: 400,
              }}>
                Если хотите что-то подарить
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#2c2c2c',
                lineHeight: 1.7,
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}>
                Если вы всё же хотите сделать нам подарок, мы будем благодарны за вклад в наш
                совместный бюджет — это поможет нам воплотить наши планы и мечты в жизнь.
              </p>
            </div>

            <div style={{
              borderLeft: '4px solid #e8b860',
              paddingLeft: '20px',
              textAlign: 'left',
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#b8505f',
                marginBottom: '10px',
                fontFamily: "'LoliCandy', cursive",
                fontWeight: 400,
              }}>
                Просьба без цветов
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#2c2c2c',
                lineHeight: 1.7,
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}>
                Мы очень просим не дарить цветы — к сожалению, мы не сможем забрать их с собой домой
                и полюбоваться. Вместо букетов дарите нам свои улыбки и тёплые слова —
                это самое ценное!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
