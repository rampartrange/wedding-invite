'use client'

const items = [
  { time: '16:00', icon: '🥂', title: 'Welcome & Cocktails', desc: 'Встреча гостей, живая музыка и лёгкие закуски', timeColor: '#2b52a3', hover: 'rgba(232,184,96,0.2)' },
  { time: '17:00', icon: '💍', title: 'Церемония', desc: 'Самый важный момент этого дня', timeColor: '#b8505f', hover: 'rgba(184,80,95,0.1)' },
  { time: '18:00', icon: '🍽️', title: 'Ужин под открытым небом', desc: 'Еда, вино, музыка и танцы', timeColor: '#9ea84b', hover: 'rgba(158,168,75,0.15)' },
  { time: '23:00', icon: '🌙', title: 'Завершение вечера', desc: 'Финальный тост и прощальные объятия', timeColor: '#7b8fc7', hover: 'rgba(123,143,199,0.15)' },
]

export default function Timeline() {
  return (
    <section id="timeline" style={{ background: 'rgba(255,255,255,0.8)', padding: 'clamp(60px,8vw,100px) 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,3.5rem)', color: '#9ea84b', marginBottom: '15px', fontFamily: "'Comfortaa', cursive", fontWeight: 400, textAlign: 'center', animation: 'fadeInUp 0.8s ease-out forwards' }}>
          Программа дня
        </h2>
        <div className="doodle-line-olive" style={{ marginBottom: '48px' }} />
      </div>

      {/* 4-column horizontal grid */}
      <div className="timeline-4col">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '36px 28px',
              borderRight: i < 3 ? '3px solid #e8b860' : 'none',
              transition: 'background 0.25s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = item.hover)}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>{item.icon}</span>
            <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: item.timeColor, display: 'block', marginBottom: '10px', lineHeight: 1, fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>
              {item.time}
            </div>
            <h3 style={{ fontSize: '1.1rem', color: '#2c2c2c', marginBottom: '6px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.55, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
