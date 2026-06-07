'use client'

export default function Dresscode() {
  return (
    <section id="dresscode" style={{ background: 'rgba(245, 240, 232, 0.8)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#b8505f',
            marginBottom: '15px',
            fontFamily: "'LoliCandy', cursive",
            fontWeight: 400,
            animation: 'fadeInUp 0.8s ease-out forwards',
            textAlign: 'center',
          }}>
            Дресс-код
          </h2>

          <div className="doodle-line" style={{ marginBottom: '40px' }} />

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(184, 80, 95, 0.15)',
            padding: '40px',
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#2c2c2c',
              lineHeight: 1.8,
              marginBottom: '30px',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
              textAlign: 'center',
            }}>
              Яркие цвета одежды и эксперименты приветствуются! 
              Мы никак не ограничиваем ваш выбор — одевайтесь так, как чувствуете себя комфортно и креативно.
            </p>

            <div style={{
              marginBottom: '30px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}>
              <img 
                src="/images/dresscode.jpg" 
                alt="Вдохновение для нарядов"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>

            <div style={{
              backgroundColor: 'rgba(184, 80, 95, 0.1)',
              padding: '20px',
              borderRadius: '16px',
              marginBottom: '30px',
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#b8505f',
                marginBottom: '15px',
                fontFamily: "'LoliCandy', cursive",
                fontWeight: 400,
              }}>
                Важные моменты
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                fontSize: '1rem',
                color: '#2c2c2c',
                lineHeight: 1.8,
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}>
                <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#b8505f', fontWeight: 700 }}>*</span>
                  <span>Вечером может быть прохладно — возьмите лёгкую накидку или пиджак</span>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#b8505f', fontWeight: 700 }}>*</span>
                  <span>Выбирайте устойчивую обувь — мероприятие пройдёт на лужайке</span>
                </li>
              </ul>
            </div>

            <div style={{
              border: '3px dashed #e8b860',
              borderRadius: '16px',
              padding: '30px',
              background: '#ffffff',
            }}>
              <p style={{
                fontSize: '0.95rem',
                color: '#2c2c2c',
                marginBottom: '15px',
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}>
                Ещё больше вдохновения — в нашем Pinterest:
              </p>
              <div style={{
                padding: '15px',
                background: '#f5f0e8',
                borderRadius: '12px',
                border: '1px solid #f0ece6',
              }}>
                <a
                  href="#"
                  style={{
                    fontSize: '1rem',
                    color: '#b8505f',
                    textDecoration: 'none',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Ссылка на Pinterest (добавьте свою ссылку)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
