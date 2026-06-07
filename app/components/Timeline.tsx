'use client'

const timelineItems = [
  {
    time: '16:00',
    title: 'Welcome & Cocktails',
    description: 'Встреча гостей, приветственные коктейли и знакомство',
    icon: '🍸',
  },
  {
    time: '17:00',
    title: 'Церемония',
    description: 'Самый важный момент — торжественная церемония бракосочетания',
    icon: '💍',
  },
  {
    time: '18:00',
    title: 'Ужин под открытым небом',
    description: 'Вкусная еда, тёплые беседы и романтика вечернего неба',
    icon: '🌅',
  },
  {
    time: '23:00',
    title: 'Завершение вечера',
    description: 'Прощальные объятия и яркие воспоминания на всю жизнь',
    icon: '🌙',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#9ea84b',
            marginBottom: '15px',
            fontFamily: "'LoliCandy', cursive",
            fontWeight: 400,
            animation: 'fadeInUp 0.8s ease-out forwards',
            textAlign: 'center',
          }}>
            Программа дня
          </h2>

          <div className="doodle-line-olive" style={{ marginBottom: '50px' }} />

          <div style={{
            display: 'grid',
            gap: '25px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '25px',
                  padding: '25px 30px',
                  textAlign: 'left',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
                  opacity: 0,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  backgroundColor: '#f5f0e8',
                  borderRadius: '24px',
                  boxShadow: '0 4px 20px rgba(158, 168, 75, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(158, 168, 75, 0.15)'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '2rem',
                    color: '#2b52a3',
                    marginBottom: '5px',
                    fontFamily: "'LoliCandy', cursive",
                    fontWeight: 400,
                  }}>
                    {item.time}
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#2c2c2c',
                    marginBottom: '5px',
                    fontFamily: "'LoliCandy', cursive",
                    fontWeight: 400,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#2c2c2c',
                    lineHeight: 1.5,
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
