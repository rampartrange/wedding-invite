'use client'

export default function Location() {
  return (
    <section id="location" style={{ background: 'rgba(158, 168, 75, 0.8)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '15px',
            fontFamily: "'LoliCandy', cursive",
            fontWeight: 400,
            animation: 'fadeInUp 0.8s ease-out forwards',
            textAlign: 'center',
          }}>
            Как добраться
          </h2>

          <div className="doodle-line" style={{ marginBottom: '40px' }} />

          <div style={{
            backgroundColor: '#f5f0e8',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            padding: '40px',
            textAlign: 'left',
          }}>
            <p style={{
              fontSize: '1.05rem',
              color: '#2c2c2c',
              lineHeight: 1.8,
              marginBottom: '25px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
            }}>
              Мы безмерно благодарны вам за то, что вы готовы преодолеть такое расстояние,
              чтобы разделить с нами этот особенный день. Ваше присутствие — большой подарок для нас,
              и мы очень ценим вашу готовность приехать!
            </p>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              padding: '20px',
              borderRadius: '16px',
              marginBottom: '25px',
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#b8505f',
                marginBottom: '15px',
                fontFamily: "'LoliCandy', cursive",
                fontWeight: 400,
              }}>
                ✈️ Аэропорты поблизости
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
              }}>
                {['Геленджик', 'Краснодар', 'Минеральные Воды'].map((airport, i) => (
                  <li key={i} style={{
                    fontSize: '1rem',
                    color: '#2c2c2c',
                    padding: '8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}>
                    <span style={{ color: '#e8b860', fontSize: '1.2rem' }}>●</span> {airport}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              borderLeft: '4px solid #e8b860',
              paddingLeft: '20px',
              marginBottom: '25px',
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#2c2c2c',
                marginBottom: '10px',
                fontFamily: "'LoliCandy', cursive",
                fontWeight: 400,
              }}>
                Важные рекомендации
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#2c2c2c',
                lineHeight: 1.7,
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}>
                Учитывая, что на юге часто случаются отмены авиарейсов, мы рекомендуем приезжать
                за 1–2 дня до мероприятия. Также вы можете рассмотреть в качестве альтернативы авиаперелёту
                поезд или автомобиль — это надёжнее и позволит насладиться красотами Краснодарского края.
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px',
              background: '#ffffff',
              borderRadius: '12px',
            }}>
              <span style={{ fontSize: '1.5rem' }}>📍</span>
              <p style={{
                fontSize: '0.95rem',
                color: '#2c2c2c',
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}>
                <strong>Адрес:</strong>{' '}
                <a href="https://yandex.ru/maps/-/CPdGR49Y" target="_blank" rel="noopener noreferrer" style={{ color: '#2c2c2c', textDecoration: 'none', borderBottom: '1px dashed #9ea84b', cursor: 'pointer' }}>
                  Краснодарский край, г. Геленджик, ул. Стартовая, д. 1, корп. 2
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
