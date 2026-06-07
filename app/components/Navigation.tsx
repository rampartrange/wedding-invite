'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > window.innerHeight * 0.8)

      // Determine active section
      const sections = ['details', 'timeline', 'location', 'dresscode', 'gifts', 'contacts', 'survey', 'final']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const items = [
    { id: 'details', label: 'О свадьбе' },
    { id: 'timeline', label: 'Программа' },
    { id: 'location', label: 'Как добраться' },
    { id: 'dresscode', label: 'Дресс-код' },
    { id: 'gifts', label: 'Подарки' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'survey', label: 'Анкета' },
  ]

  if (!isVisible) return null

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
      zIndex: 1000,
      padding: '12px 20px',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(10px, 2vw, 25px)',
        flexWrap: 'wrap',
      }}>
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            style={{
              fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
              color: activeSection === item.id ? '#e8b860' : '#2c2c2c',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              transition: 'all 0.3s ease',
              borderBottom: activeSection === item.id ? '3px solid #e8b860' : '3px solid transparent',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: activeSection === item.id ? 700 : 400,
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
