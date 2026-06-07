'use client'

export default function Footer() {
  return (
    <footer style={{ background: '#b8505f', color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '60px 40px', borderTop: '5px solid #e8b860' }}>
      <h2 style={{ fontFamily: "'Comfortaa', cursive", fontSize: 'clamp(2rem,6vw,3.5rem)', color: '#e8b860', marginBottom: '18px', fontWeight: 400 }}>
        Артём &amp; Вита
      </h2>
      <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75, fontWeight: 400, fontStyle: 'italic' }}>
        Мы с нетерпением ждём этого дня — и больше всего ждём вас. Каждый из вас — часть нашей истории, и нет большей радости, чем разделить этот праздник именно с вами. До встречи под открытым небом, среди гор и моря 🌿🌊
      </p>
      <div style={{ marginTop: '20px', fontFamily: "'Comfortaa', cursive", fontSize: '1rem', color: '#e8b860' }}>
        24 · августа · 2026
      </div>
    </footer>
  )
}
