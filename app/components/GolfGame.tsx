'use client'

import { useState, useEffect, useRef } from 'react'

interface GolfGameProps {
  onComplete: () => void
}

export default function GolfGame({ onComplete }: GolfGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasWon, setHasWon] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [ballPos, setBallPos] = useState({ x: 120, y: 300 })
  const [holeAnim, setHoleAnim] = useState(0)
  
  const holePos = { x: 580, y: 300, radius: 25 }
  const ballRadius = 18
  const canvasWidth = 700
  const canvasHeight = 500

  useEffect(() => {
    if (hasWon) return
    const interval = setInterval(() => {
      setHoleAnim(prev => (prev + 1) % 60)
    }, 50)
    return () => clearInterval(interval)
  }, [hasWon])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      // Background - rose/pink
      ctx.fillStyle = '#b8505f'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      // Olive stripe at bottom (like reference)
      ctx.fillStyle = '#9ea84b'
      ctx.fillRect(0, canvasHeight - 80, canvasWidth, 80)

      // Decorative curved lines
      ctx.strokeStyle = '#e8b860'
      ctx.lineWidth = 3
      ctx.setLineDash([8, 6])
      
      ctx.beginPath()
      ctx.moveTo(80, 200)
      ctx.quadraticCurveTo(200, 150, 350, 220)
      ctx.quadraticCurveTo(500, 290, 620, 280)
      ctx.stroke()
      ctx.setLineDash([])

      // Second decorative line
      ctx.beginPath()
      ctx.moveTo(50, 340)
      ctx.quadraticCurveTo(200, 390, 400, 320)
      ctx.stroke()

      // Doodle circles
      ctx.strokeStyle = '#e8b860'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(620, 120, 40, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.arc(640, 100, 15, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(600, 140, 8, 0, Math.PI * 2)
      ctx.stroke()

      // Small decorative dots
      ctx.fillStyle = '#f5f0e8'
      const dots = [
        [100, 100], [650, 380], [80, 400], [660, 90], 
        [300, 80], [500, 420], [150, 420]
      ]
      dots.forEach(([dx, dy]) => {
        ctx.beginPath()
        ctx.arc(dx, dy, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      // Grass patch under hole
      ctx.fillStyle = '#9ea84b'
      ctx.globalAlpha = 0.5
      ctx.beginPath()
      ctx.roundRect(520, 250, 120, 100, 50)
      ctx.fill()
      ctx.globalAlpha = 1

      // Hole
      ctx.fillStyle = '#2c2c2c'
      ctx.beginPath()
      ctx.arc(holePos.x, holePos.y, holePos.radius, 0, Math.PI * 2)
      ctx.fill()

      // Hole inner
      ctx.fillStyle = '#1c1c1c'
      ctx.beginPath()
      ctx.arc(holePos.x, holePos.y + 3, holePos.radius - 3, 0, Math.PI * 2)
      ctx.fill()

      // Hole sparkle
      if (holeAnim < 30) {
        const sparkleAlpha = holeAnim / 30
        ctx.fillStyle = `rgba(232, 184, 96, ${sparkleAlpha * 0.5})`
        ctx.beginPath()
        ctx.arc(holePos.x, holePos.y, holePos.radius + 5 + holeAnim * 0.3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Flag
      ctx.strokeStyle = '#f5f0e8'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(holePos.x, holePos.y - holePos.radius)
      ctx.lineTo(holePos.x, holePos.y - holePos.radius - 70)
      ctx.stroke()

      // Flag triangle - gold
      ctx.fillStyle = '#e8b860'
      ctx.beginPath()
      ctx.moveTo(holePos.x - 2, holePos.y - holePos.radius - 65)
      ctx.lineTo(holePos.x + 25, holePos.y - holePos.radius - 55)
      ctx.lineTo(holePos.x - 2, holePos.y - holePos.radius - 45)
      ctx.closePath()
      ctx.fill()

      // Ball
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(ballPos.x, ballPos.y, ballRadius, 0, Math.PI * 2)
      ctx.fill()

      // Ball outline - gold
      ctx.strokeStyle = '#e8b860'
      ctx.lineWidth = 3
      ctx.stroke()

      // Ball shadow
      ctx.fillStyle = 'rgba(0,0,0,0.2)'
      ctx.beginPath()
      ctx.ellipse(ballPos.x, ballPos.y + ballRadius + 5, ballRadius * 0.7, 5, 0, 0, Math.PI * 2)
      ctx.fill()

      // Ball highlight
      ctx.fillStyle = 'rgba(255,255,255,0.8)'
      ctx.beginPath()
      ctx.arc(ballPos.x - 4, ballPos.y - 4, 5, 0, Math.PI * 2)
      ctx.fill()

      // Gold dot on ball
      ctx.fillStyle = '#e8b860'
      ctx.beginPath()
      ctx.arc(ballPos.x + 2, ballPos.y + 2, 3, 0, Math.PI * 2)
      ctx.fill()

      // Hint text
      if (!isDragging && !hasWon) {
        ctx.fillStyle = '#f5f0e8'
        ctx.font = '16px Nunito Sans'
        ctx.textAlign = 'center'
        ctx.fillText('Перетащи меня в лунку! 🏌️', ballPos.x, ballPos.y - 40)
        
        // Arrow
        const angle = Math.atan2(holePos.y - ballPos.y, holePos.x - ballPos.x)
        const arrowY = ballPos.y + Math.sin(angle) * 80
        const startX = ballPos.x + Math.cos(angle) * 60
        const endX = ballPos.x + Math.cos(angle) * 100
        
        ctx.strokeStyle = 'rgba(232, 184, 96, 0.6)'
        ctx.lineWidth = 2
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(startX, arrowY)
        ctx.lineTo(endX, arrowY)
        ctx.stroke()
        ctx.setLineDash([])
      }
    }

    draw()
  }, [ballPos, holeAnim, isDragging, hasWon])

  const isNearHole = (x: number, y: number) => {
    const dist = Math.sqrt(
      Math.pow(x - holePos.x, 2) + Math.pow(y - holePos.y, 2)
    )
    return dist < holePos.radius + ballRadius + 40
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (canvasWidth / rect.width)
    const y = (e.clientY - rect.top) * (canvasHeight / rect.height)

    const dist = Math.sqrt(Math.pow(x - ballPos.x, 2) + Math.pow(y - ballPos.y, 2))
    if (dist < ballRadius * 2) {
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (canvasWidth / rect.width)
    const y = (e.clientY - rect.top) * (canvasHeight / rect.height)

    const clampedX = Math.max(ballRadius, Math.min(canvasWidth - ballRadius, x))
    const clampedY = Math.max(ballRadius, Math.min(canvasHeight - ballRadius, y))
    
    setBallPos({ x: clampedX, y: clampedY })
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (isNearHole(ballPos.x, ballPos.y)) {
      setBallPos({ x: holePos.x, y: holePos.y })
      setTimeout(() => {
        setHasWon(true)
      }, 500)
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    const x = (touch.clientX - rect.left) * (canvasWidth / rect.width)
    const y = (touch.clientY - rect.top) * (canvasHeight / rect.height)

    const dist = Math.sqrt(Math.pow(x - ballPos.x, 2) + Math.pow(y - ballPos.y, 2))
    if (dist < ballRadius * 2) {
      setIsDragging(true)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (!isDragging) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    const x = (touch.clientX - rect.left) * (canvasWidth / rect.width)
    const y = (touch.clientY - rect.top) * (canvasHeight / rect.height)

    const clampedX = Math.max(ballRadius, Math.min(canvasWidth - ballRadius, x))
    const clampedY = Math.max(ballRadius, Math.min(canvasHeight - ballRadius, y))
    
    setBallPos({ x: clampedX, y: clampedY })
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (!isDragging) return
    setIsDragging(false)

    if (isNearHole(ballPos.x, ballPos.y)) {
      setBallPos({ x: holePos.x, y: holePos.y })
      setTimeout(() => {
        setHasWon(true)
      }, 500)
    }
  }

  const handleReset = () => {
    setBallPos({ x: 120, y: 300 })
    setHasWon(false)
    setIsDragging(false)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'rgba(184, 80, 95, 0.8)',
      padding: '20px',
    }}>
      {!hasWon ? (
        <>
          <div style={{
            marginBottom: '30px',
            textAlign: 'center',
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            <span className="tag">
              Приглашение 2026
            </span>
            
            <h1 style={{
              fontFamily: "'Loli Candy', cursive",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#f5f0e8',
              marginTop: '15px',
              marginBottom: '10px',
              fontWeight: 400,
              lineHeight: 1.1,
            }}>
              Мини-гольф
            </h1>
            <p style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#f5f0e8',
              maxWidth: '500px',
              lineHeight: 1.6,
              opacity: 0.9,
            }}>
              Перетащи шарик в лунку, чтобы открыть приглашение 🏌️
            </p>
          </div>
          
          <div style={{
            background: 'rgba(197, 90, 106, 0.8)',
            borderRadius: '24px',
            padding: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            animation: 'fadeIn 1s ease-out 0.3s both',
          }}>
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              style={{
                maxWidth: '100%',
                height: 'auto',
                cursor: isDragging ? 'grabbing' : 'grab',
                borderRadius: '16px',
                touchAction: 'none',
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
            <button
              onClick={handleReset}
              className="button-outline"
            >
              Начать заново
            </button>
            <button
              onClick={onComplete}
              style={{
                padding: '12px 30px',
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '50px',
                color: 'rgba(255,255,255,0.8)',
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '1rem',
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
              }}
            >
              Пропустить →
            </button>
          </div>
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          animation: 'fadeIn 1s ease-out',
        }}>
          <div style={{
            fontSize: 'clamp(4rem, 10vw, 6rem)',
            marginBottom: '10px',
            animation: 'float 3s ease-in-out infinite',
          }}>
            🎉
          </div>
          
          <span className="tag" style={{ marginBottom: '20px' }}>
            Поздравляем!
          </span>
          
          <h1 style={{
            fontFamily: "'Loli Candy', cursive",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            color: '#f5f0e8',
            marginTop: '20px',
            marginBottom: '10px',
            fontWeight: 400,
            lineHeight: 1.3,
          }}>
            Вы приглашены на свадьбу
          </h1>
          <h2 style={{
            fontFamily: "'Loli Candy', cursive",
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            color: '#e8b860',
            marginBottom: '30px',
            fontWeight: 400,
            animation: 'wiggle 3s ease-in-out infinite',
          }}>
            Артема и Виты
          </h2>
          
          <button
            onClick={onComplete}
            className="button-primary"
            style={{ fontSize: '1.2rem', padding: '18px 50px' }}
          >
            Открыть приглашение →
          </button>
        </div>
      )}
    </div>
  )
}
