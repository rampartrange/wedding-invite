'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Props { onComplete: () => void }
type Pos = { x: number; y: number }

export default function GolfGame({ onComplete }: Props) {
  const [ballPos, setBallPos] = useState<Pos | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showCongrats, setShowCongrats] = useState(false)
  const [dots, setDots] = useState<Array<{ left: string; top: string; delay: string; size: string; color: string }>>([])

  const isDraggingRef = useRef(false)
  const offsetRef = useRef<Pos>({ x: 0, y: 0 })
  const holeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setBallPos({ x: window.innerWidth * 0.18, y: window.innerHeight * 0.38 })
    const colors = ['#b8505f', '#e8b860', '#9ea84b', '#c4405e']
    setDots(Array.from({ length: 40 }, () => ({
      left: Math.random() * 100 + '%',
      top: Math.random() * 60 + '%',
      delay: (Math.random() * 3).toFixed(2) + 's',
      size: (4 + Math.random() * 5).toFixed(1) + 'px',
      color: colors[Math.floor(Math.random() * colors.length)],
    })))
  }, [])

  const checkHole = useCallback((pos: Pos) => {
    const hole = holeRef.current
    if (!hole) return
    const r = hole.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    if (Math.sqrt((pos.x - cx) ** 2 + (pos.y - cy) ** 2) < 42) {
      setBallPos({ x: cx, y: cy })
      setTimeout(() => setShowCongrats(true), 500)
    }
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      setBallPos({ x: e.clientX - offsetRef.current.x, y: e.clientY - offsetRef.current.y })
    }
    const onMouseUp = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      setIsDragging(false)
      checkHole({ x: e.clientX - offsetRef.current.x, y: e.clientY - offsetRef.current.y })
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return
      e.preventDefault()
      const t = e.touches[0]
      setBallPos({ x: t.clientX - offsetRef.current.x, y: t.clientY - offsetRef.current.y })
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      setIsDragging(false)
      const t = e.changedTouches[0]
      checkHole({ x: t.clientX - offsetRef.current.x, y: t.clientY - offsetRef.current.y })
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('touchend', onTouchEnd)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [checkHole])

  const startDrag = (clientX: number, clientY: number) => {
    if (!ballPos) return
    offsetRef.current = { x: clientX - ballPos.x, y: clientY - ballPos.y }
    isDraggingRef.current = true
    setIsDragging(true)
  }

  /* ── Congrats screen ── */
  if (showCongrats) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: '#f5f0e8', zIndex: 999,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '2rem',
        animation: 'fadeIn 0.7s ease forwards',
        overflow: 'hidden',
      }}>
        {/* Botanical SVGs — те же что в Hero */}
        <svg style={{ position: 'absolute', top: '10%', left: '3%', width: '130px', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 160 220">
          <path d="M80,15 C55,45 35,35 48,75 C61,115 100,95 90,135 C80,168 42,155 65,192" stroke="#b8505f" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          <circle cx="42" cy="155" r="22" stroke="#b8505f" strokeWidth="2.5" fill="none"/>
          <circle cx="90" cy="135" r="14" stroke="#b8505f" strokeWidth="2" fill="none"/>
        </svg>
        <svg style={{ position: 'absolute', top: '8%', right: '4%', width: '120px', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 140 200">
          <path d="M70,10 C95,38 115,28 102,68 C89,108 50,88 62,128 C74,162 108,148 95,182" stroke="#e8b860" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          <circle cx="108" cy="148" r="18" stroke="#e8b860" strokeWidth="2.5" fill="none"/>
        </svg>
        <svg style={{ position: 'absolute', bottom: '15%', right: '5%', width: '80px', opacity: 0.18, pointerEvents: 'none' }} viewBox="0 0 90 90">
          <path d="M15,45 C25,5 70,0 80,35 C90,65 60,88 30,80 C5,72 5,55 15,45" stroke="#9ea84b" strokeWidth="2.5" fill="none"/>
        </svg>

        <div style={{ fontSize: '3rem', marginBottom: '20px', animation: 'float 3s ease-in-out infinite' }}>🏌️</div>

        {/* Дата-бейдж — как в Hero */}
        <div style={{
          fontFamily: "'Zhizn', sans-serif", color: '#f5f0e8',
          fontSize: '0.9rem', textTransform: 'uppercase',
          marginBottom: '24px', background: '#b8505f',
          display: 'inline-block', padding: '5px 22px',
          transform: 'rotate(-1.5deg)', letterSpacing: '0.1em',
          position: 'relative', top: '-25px',
        }}>
          Поздравляем!
        </div>

        <span style={{ display: 'block', fontFamily: "'Zhizn', sans-serif", fontSize: 'clamp(1rem,2.5vw,1.3rem)', color: '#888', marginBottom: '8px', position: 'relative', top: '-25px' }}>
          Вы приглашены на свадьбу
        </span>

        <h1 style={{
          fontFamily: "'Zhizn', sans-serif", fontWeight: 400,
          fontSize: 'clamp(3rem,10vw,7rem)',
          color: '#2b52a3', lineHeight: 0.95,
          letterSpacing: '-0.01em', marginBottom: '0',
        }}>
          Артём<span style={{ color: '#b8505f' }}>&amp;</span>Вита
        </h1>

        <div style={{ width: '60px', height: '5px', background: '#e8b860', margin: '20px auto', transform: 'rotate(-1deg)', borderRadius: '3px' }} />

        <span style={{ display: 'block', fontFamily: "'Zhizn', sans-serif", fontSize: 'clamp(0.9rem,2vw,1.1rem)', color: '#9ea84b', fontWeight: 600, marginBottom: '36px' }}>
          Golf Resort · Геленджик · 24.08.2026
        </span>

        <button
          onClick={onComplete}
          className="button-primary"
          style={{ fontSize: '1.1rem', padding: '16px 48px' }}
        >
          Открыть приглашение →
        </button>
      </div>
    )
  }

  /* ── Game screen ── */
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#f5f0e8', zIndex: 1000, overflow: 'hidden' }}>
      {/* Decorative dots */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60%', overflow: 'hidden', pointerEvents: 'none' }}>
        {dots.map((d, i) => (
          <div key={i} style={{
            position: 'absolute', width: d.size, height: d.size,
            background: d.color, borderRadius: '50%', opacity: 0.5,
            left: d.left, top: d.top,
            animationName: 'pulse', animationDuration: '3s',
            animationDelay: d.delay, animationIterationCount: 'infinite',
          }} />
        ))}
      </div>

      {/* Olive grass */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '42%',
        background: '#9ea84b',
        clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0 100%)',
        pointerEvents: 'none',
      }} />

      {/* Instructions */}
      <div style={{
        position: 'absolute', top: '10%', left: 0, right: 0, textAlign: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: "'Zhizn', sans-serif", color: '#b8505f',
          fontSize: 'clamp(1.3rem,4vw,2rem)', fontWeight: 400,
          animationName: 'pulse', animationDuration: '2.5s', animationIterationCount: 'infinite',
          marginBottom: '8px',
        }}>
          Закатите шар в лунку, чтобы открыть приглашение
        </div>
        <div style={{ fontFamily: "'Zhizn', sans-serif", color: '#9ea84b', fontSize: 'clamp(0.85rem,2vw,1.1rem)' }}>
          Golf Resort Gelendzhik · 24.08.2026
        </div>
      </div>

      {/* Hole */}
      <div
        ref={holeRef}
        style={{
          position: 'absolute', left: '55%', top: '56%',
          transform: 'translateX(-50%)',
          width: '60px', height: '70px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: '40px', height: '20px', background: '#2c2c2c', borderRadius: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(232,184,96,0.45) 0%, transparent 70%)', animationName: 'pulse', animationDuration: '2s', animationIterationCount: 'infinite' }} />
        </div>
        {/* Flag */}
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', width: '3px', height: '52px', background: '#b8505f', transformOrigin: 'bottom center' }}>
          <div style={{ position: 'absolute', top: 0, left: '3px', width: '20px', height: '13px', background: '#e8b860', clipPath: 'polygon(0 0, 100% 30%, 0 100%)', animationName: 'wiggle', animationDuration: '1.5s', animationIterationCount: 'infinite', transformOrigin: 'left center' }} />
        </div>
      </div>

      {/* Ball */}
      {ballPos && (
        <div
          onMouseDown={e => { e.preventDefault(); startDrag(e.clientX, e.clientY) }}
          onTouchStart={e => { e.preventDefault(); startDrag(e.touches[0].clientX, e.touches[0].clientY) }}
          style={{
            position: 'fixed',
            left: `${ballPos.x}px`, top: `${ballPos.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '32px', height: '32px',
            background: 'white', borderRadius: '50%',
            border: '3px solid #b8505f',
            boxShadow: '3px 3px 0 #b8505f, 0 4px 12px rgba(0,0,0,0.15)',
            cursor: isDragging ? 'grabbing' : 'grab',
            zIndex: 10, userSelect: 'none', touchAction: 'none',
          }}
        />
      )}

      {/* Skip */}
      <button
        onClick={onComplete}
        style={{
          position: 'fixed', bottom: '28px', right: '28px',
          background: 'transparent', border: '2px solid rgba(184,80,95,0.35)',
          borderRadius: '30px', color: '#b8505f',
          fontFamily: "'Zhizn', sans-serif", fontSize: '0.9rem',
          fontWeight: 400, padding: '8px 18px', cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(184,80,95,0.08)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
      >
        Пропустить →
      </button>
    </div>
  )
}
