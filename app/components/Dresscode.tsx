'use client'

export default function Dresscode() {
  return (
    <section id="dresscode" style={{ background: 'rgba(245,240,232,0.8)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,3.5rem)', color: '#b8505f', marginBottom: '15px', fontFamily: "'Comfortaa', cursive", fontWeight: 400, animation: 'fadeInUp 0.8s ease-out forwards', textAlign: 'center' }}>
          Дресс-код
        </h2>
        <div className="doodle-line" style={{ marginBottom: '36px' }} />

        {/* Full-width image */}
        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.12)', marginBottom: '32px' }}>
          <img src="/images/dresscode.jpg" alt="Вдохновение для нарядов" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>

        {/* Two symmetric columns below */}
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>

          {/* Left — tips */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 8px 30px rgba(184,80,95,0.15)', padding: '36px', height: '100%' }}>
            <p style={{ fontSize: '1.05rem', color: '#2c2c2c', lineHeight: 1.8, marginBottom: '28px', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>
              Яркие цвета одежды и эксперименты приветствуются!
              Одевайтесь так, как чувствуете себя комфортно и креативно.
            </p>

            <h3 style={{ fontSize: '1.2rem', color: '#b8505f', marginBottom: '16px', fontFamily: "'Comfortaa', cursive", fontWeight: 400 }}>
              Важные моменты
            </h3>

            {[
              { icon: '🌙', text: 'Вечером может быть прохладно — возьмите лёгкую накидку или пиджак' },
              { icon: '👟', text: 'Выбирайте устойчивую обувь — мероприятие пройдёт на лужайке гольф-клуба' },
              { icon: '☀️', text: 'Отдавайте предпочтение лёгким тканям — конец августа на юге ещё очень жаркий' },
            ].map((tip, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid #f5f0e8' : 'none' }}>
                <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>{tip.icon}</span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#2c2c2c', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          {/* Right — Pinterest */}
          <div style={{ backgroundColor: '#b8505f', borderRadius: '24px', padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', boxShadow: '0 8px 30px rgba(184,80,95,0.3)', height: '100%' }}>
            <div style={{ fontSize: '48px' }}>📌</div>
            <h3 style={{ fontFamily: "'Comfortaa', cursive", fontSize: '1.2rem', color: 'white', fontWeight: 400 }}>Доска вдохновения</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', fontFamily: "'Nunito Sans', sans-serif" }}>Идеи образов — на Pinterest</p>
            <a
              href="#"
              onClick={e => { e.preventDefault(); alert('Ссылка на Pinterest будет добавлена позже') }}
              style={{ display: 'inline-block', padding: '14px 28px', background: '#e8b860', color: '#2c2c2c', fontFamily: "'Comfortaa', cursive", fontSize: '1rem', fontWeight: 400, textDecoration: 'none', borderRadius: '30px', marginTop: '8px', transition: 'all 0.25s', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f0c870'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#e8b860'; e.currentTarget.style.transform = 'none' }}
            >
              Открыть Pinterest →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
