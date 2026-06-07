'use client'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      background: '#f5f0e8', paddingTop: '80px',
    }}>
      {/* Botanical SVG scribbles в цветах проекта */}
      <svg style={{ position: 'absolute', top: '12%', left: '3%', width: '150px', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 160 220">
        <path d="M80,15 C55,45 35,35 48,75 C61,115 100,95 90,135 C80,168 42,155 65,192" stroke="#b8505f" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <circle cx="42" cy="155" r="22" stroke="#b8505f" strokeWidth="2.5" fill="none"/>
        <circle cx="90" cy="135" r="14" stroke="#b8505f" strokeWidth="2" fill="none"/>
      </svg>
      <svg style={{ position: 'absolute', top: '8%', right: '4%', width: '130px', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 140 200">
        <path d="M70,10 C95,38 115,28 102,68 C89,108 50,88 62,128 C74,162 108,148 95,182" stroke="#e8b860" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <circle cx="108" cy="148" r="18" stroke="#e8b860" strokeWidth="2.5" fill="none"/>
      </svg>
      <svg style={{ position: 'absolute', bottom: '18%', left: '5%', width: '90px', opacity: 0.18, pointerEvents: 'none' }} viewBox="0 0 100 100">
        <path d="M10,50 C20,10 55,5 70,25 C85,45 75,78 55,85 C35,92 5,75 10,50 Z" stroke="#9ea84b" strokeWidth="2.5" fill="none"/>
        <path d="M25,50 C30,28 52,22 62,38 C72,54 60,72 45,74" stroke="#9ea84b" strokeWidth="2" fill="none"/>
      </svg>
      <svg style={{ position: 'absolute', bottom: '22%', right: '5%', width: '80px', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 90 90">
        <path d="M15,45 C25,5 70,0 80,35 C90,65 60,88 30,80 C5,72 5,55 15,45" stroke="#9ea84b" strokeWidth="2.5" fill="none"/>
      </svg>

      <div style={{ textAlign: 'center', zIndex: 1, padding: '2rem', position: 'relative' }}>
        {/* Дата-бейдж */}
        <div style={{
          fontFamily: "'Comfortaa', cursive", color: '#f5f0e8',
          fontSize: '0.95rem', textTransform: 'uppercase',
          marginBottom: '28px', background: '#b8505f',
          display: 'inline-block', padding: '5px 22px',
          transform: 'rotate(-1.5deg)', letterSpacing: '0.1em',
        }}>
          24 · 08 · 2026
        </div>

        <span style={{ display: 'block', fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(1rem,2.5vw,1.4rem)', color: '#888', marginBottom: '8px', fontStyle: 'italic' }}>
          Мы рады пригласить вас на нашу свадьбу
        </span>

        <h1 style={{
          fontFamily: "'Comfortaa', cursive",
          fontSize: 'clamp(2.4rem,11vw,8rem)',
          color: '#2b52a3', lineHeight: 0.95,
          fontWeight: 400, letterSpacing: '-0.01em',
        }}>
          Артём<span style={{ color: '#b8505f' }}>&</span>Вита
        </h1>

        <div style={{ width: '60px', height: '5px', background: '#e8b860', margin: '20px auto', transform: 'rotate(-1deg)', borderRadius: '3px' }} />

        <span style={{ display: 'block', fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(1rem,2.5vw,1.3rem)', color: '#9ea84b', fontWeight: 600 }}>
          Гольф Резорт · Геленджик · Краснодарский край
        </span>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: '#aaa', fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.9rem',
        animationName: 'scrollBounce', animationDuration: '2s',
        animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite',
      }}>
        <span>Листайте</span>
        <div style={{ width: '2px', height: '36px', background: '#b8505f', opacity: 0.5 }} />
      </div>
    </section>
  )
}
