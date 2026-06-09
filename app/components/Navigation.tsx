'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = ['details', 'timeline', 'location', 'dresscode', 'gifts', 'contacts', 'survey']
    const handleScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const items = [
    { id: 'details', label: 'О свадьбе' },
    { id: 'timeline', label: 'Программа' },
    { id: 'location', label: 'Как добраться' },
    { id: 'dresscode', label: 'Дресс-код' },
    { id: 'gifts', label: 'Подарки' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'survey', label: 'Анкета' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '14px clamp(16px, 4vw, 40px)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(245, 240, 232, 0.97)',
      backdropFilter: 'blur(8px)',
      borderBottom: '3px solid #b8505f',
    }}>
      <div style={{ fontFamily: "'Zhizn', sans-serif", color: '#b8505f', fontSize: '1rem', fontWeight: 400, letterSpacing: '0.03em' }}>
        Артём &amp; Вита
      </div>
      <ul style={{ display: 'flex', gap: 'clamp(12px,2vw,28px)', listStyle: 'none', flexWrap: 'wrap' }}>
        {items.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Zhizn', sans-serif", fontSize: 'clamp(0.75rem,1.5vw,0.9rem)',
                fontWeight: activeSection === item.id ? 700 : 400,
                color: activeSection === item.id ? '#b8505f' : '#2c2c2c',
                borderBottom: activeSection === item.id ? '2px solid #b8505f' : '2px solid transparent',
                paddingBottom: '2px', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#b8505f' }}
              onMouseLeave={e => { e.currentTarget.style.color = activeSection === item.id ? '#b8505f' : '#2c2c2c' }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
