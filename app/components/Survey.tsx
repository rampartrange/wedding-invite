'use client'

import { useState } from 'react'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8hhV2hRu7UnUXEnqEdAYIlH1pgQHOlH0FKLb3wSjk62R8Uy5f-CD7q0XPPAsHLL-T6A/exec'

export default function Survey() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    drinks: [] as string[],
    allergy: '',
  })

  const handleDrinkToggle = (drink: string) => {
    setFormData(prev => ({
      ...prev,
      drinks: prev.drinks.includes(drink)
        ? prev.drinks.filter(d => d !== drink)
        : [...prev.drinks, drink]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
          drinks: formData.drinks.join(', '),
          allergy: formData.allergy,
        }),
      })
      setIsSubmitted(true)
    } catch {
      setError('Не удалось отправить анкету. Проверьте соединение и попробуйте ещё раз.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div id="survey" style={{ background: 'rgba(158, 168, 75, 0.8)', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px', animation: 'float 3s ease-in-out infinite' }}>
              ✨
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              color: '#ffffff',
              marginBottom: '15px',
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 400,
            }}>
              Спасибо за ответ!
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              lineHeight: 1.7,
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 400,
            }}>
              Мы получили вашу анкету и очень рады, что вы с нами!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="survey" style={{ background: 'rgba(158, 168, 75, 0.8)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '15px',
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 400,
            animation: 'fadeInUp 0.8s ease-out forwards',
            textAlign: 'center',
          }}>
            Анкета гостя
          </h2>

          <div className="doodle-line" style={{ marginBottom: '40px' }} />

          <p style={{
            fontSize: '1.05rem',
            color: '#ffffff',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 16px',
            textAlign: 'center',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}>
            Пожалуйста, заполните короткую анкету, чтобы мы могли лучше подготовиться к мероприятию
            и учесть все ваши пожелания.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            maxWidth: '600px',
            margin: '0 auto 30px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '14px',
            padding: '12px 20px',
          }}>
            <span style={{ fontSize: '1.2rem' }}>📅</span>
            <p style={{
              fontSize: '1rem',
              color: '#ffffff',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              margin: 0,
            }}>
              Подтвердите своё присутствие до <span style={{ textDecoration: 'underline' }}>31 июля 2026 года</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              padding: '40px',
              maxWidth: '600px',
              textAlign: 'left',
              margin: '0 auto',
            }}>
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  fontSize: '0.95rem',
                  color: '#2c2c2c',
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  Имя и Фамилия *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #f5f0e8',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    color: '#2c2c2c',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#e8b860'}
                  onBlur={(e) => e.target.style.borderColor = '#f5f0e8'}
                  placeholder="Введите ваше имя и фамилию"
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  fontSize: '0.95rem',
                  color: '#2c2c2c',
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  Сможете ли вы присутствовать? *
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { value: 'yes', label: 'Да, обязательно буду!' },
                    { value: 'no', label: 'К сожалению, не смогу' },
                    { value: 'maybe', label: 'Постараюсь, пока не уверен(а)' },
                  ].map(option => (
                    <label key={option.value} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: formData.attendance === option.value ? '2px solid #e8b860' : '2px solid #f5f0e8',
                      background: formData.attendance === option.value ? '#f5f0e8' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem',
                      color: '#2c2c2c',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}>
                      <input
                        type="radio"
                        name="attendance"
                        value={option.value}
                        checked={formData.attendance === option.value}
                        onChange={(e) => setFormData(prev => ({ ...prev, attendance: e.target.value }))}
                        style={{ cursor: 'pointer' }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  fontSize: '0.95rem',
                  color: '#2c2c2c',
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  Какие алкогольные напитки предпочитаете?
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { value: 'sparkling', label: 'Игристое (шампанское, просекко)' },
                    { value: 'wine', label: 'Тихие напитки (вино)' },
                    { value: 'strong', label: 'Крепкий алкоголь' },
                  ].map(option => (
                    <label key={option.value} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: formData.drinks.includes(option.value) ? '2px solid #e8b860' : '2px solid #f5f0e8',
                      background: formData.drinks.includes(option.value) ? '#f5f0e8' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem',
                      color: '#2c2c2c',
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}>
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.drinks.includes(option.value)}
                        onChange={() => handleDrinkToggle(option.value)}
                        style={{ cursor: 'pointer' }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  fontSize: '0.95rem',
                  color: '#2c2c2c',
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  Есть ли у вас на что-то аллергия?
                </label>
                <textarea
                  value={formData.allergy}
                  onChange={(e) => setFormData(prev => ({ ...prev, allergy: e.target.value }))}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #f5f0e8',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    color: '#2c2c2c',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#e8b860'}
                  onBlur={(e) => e.target.style.borderColor = '#f5f0e8'}
                  placeholder="Напишите, если есть какие-либо аллергии или особенности питания"
                />
              </div>

              {error && (
                <p style={{
                  color: '#b8505f',
                  fontSize: '0.9rem',
                  marginBottom: '15px',
                  fontFamily: "'Nunito Sans', sans-serif",
                  textAlign: 'center',
                }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="button-primary"
                style={{ width: '100%', opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
              >
                {isLoading ? 'Отправляем...' : 'Отправить ответ'}
              </button>
          </form>

        </div>
      </div>
    </div>
  )
}
