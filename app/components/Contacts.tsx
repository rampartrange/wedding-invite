'use client'

export default function Contacts() {
  return (
    <section id="contacts" style={{ background: '#4E8FA8', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '15px',
            fontFamily: "'Zhizn', sans-serif",
            fontWeight: 400,
            animation: 'fadeInUp 0.8s ease-out forwards',
            textAlign: 'center',
          }}>
            Контакты
          </h2>

          <div className="doodle-line" style={{ marginBottom: '40px' }} />

          <p style={{
            fontSize: '1.05rem',
            color: '#ffffff',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 40px',
            fontFamily: "'Zhizn', sans-serif",
            fontWeight: 400,
            textAlign: 'center',
          }}>
            Присоединяйтесь к нашим чатам, чтобы получать актуальную информацию о мероприятии,
            задавать вопросы и быть в курсе всех деталей!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            maxWidth: '700px',
            margin: '0 auto 40px',
          }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                padding: '30px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            >
              <div style={{ marginBottom: '15px' }}>
                <img src="/images/telegram.jpeg" alt="Telegram" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#2c2c2c',
                marginBottom: '10px',
                fontFamily: "'Zhizn', sans-serif",
                fontWeight: 400,
              }}>
                Telegram
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#2c2c2c',
                marginBottom: '15px',
                fontFamily: "'Zhizn', sans-serif",
                fontWeight: 400,
              }}>
                Общий чат для гостей
              </p>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: '#f5f0e8',
                borderRadius: '20px',
                fontSize: '0.9rem',
              }}>
                <a
                  href="https://t.me/+oUcytHt1wYk5OTYy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.9rem',
                    color: '#2c2c2c',
                    textDecoration: 'none',
                    fontFamily: "'Zhizn', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Ссылка на Telegram чат
                </a>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                padding: '30px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            >
              <div style={{ marginBottom: '15px' }}>
                <img src="/images/max.jpeg" alt="MAX" style={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#2c2c2c',
                marginBottom: '10px',
                fontFamily: "'Zhizn', sans-serif",
                fontWeight: 400,
              }}>
                MAX
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#2c2c2c',
                marginBottom: '15px',
                fontFamily: "'Zhizn', sans-serif",
                fontWeight: 400,
              }}>
                Альтернативный чат
              </p>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: '#f5f0e8',
                borderRadius: '20px',
                fontSize: '0.9rem',
              }}>
                <a
                  href="https://max.ru/join/1I7UhDzsufWDQk33EPWmBFeO_20D-dy1jx1hcXsaadk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.9rem',
                    color: '#2c2c2c',
                    textDecoration: 'none',
                    fontFamily: "'Zhizn', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Ссылка на MAX чат
                </a>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            padding: '30px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              👩‍💼
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2c2c2c',
              marginBottom: '10px',
              fontFamily: "'Zhizn', sans-serif",
              fontWeight: 400,
            }}>
              Эля — наш организатор
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#2c2c2c',
              lineHeight: 1.6,
              marginBottom: '15px',
              fontFamily: "'Zhizn', sans-serif",
              fontWeight: 400,
            }}>
              По любым дополнительным вопросам вы всегда можете обратиться к нашей wonderful организатору Эле.
              Она с радостью поможет со всем, что касается логистики, программы и других деталей мероприятия.
            </p>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#b8505f',
              borderRadius: '20px',
              fontSize: '1rem',
            }}>
              <a
                href="https://t.me/emtemnikova"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontFamily: "'Zhizn', sans-serif",
                  fontWeight: 400,
                }}
              >
                Связаться с Элей
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
