'use client'

import { useState } from 'react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true'

export default function Survey() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [useIframe, setUseIframe] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
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
              fontFamily: "'LoliCandy', cursive",
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
            fontFamily: "'LoliCandy', cursive",
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
            margin: '0 auto 30px',
            textAlign: 'center',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}>
            Пожалуйста, заполните короткую анкету, чтобы мы могли лучше подготовиться к мероприятию
            и учесть все ваши пожелания.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '30px',
          }}>
            <button
              onClick={() => setUseIframe(true)}
              className={useIframe ? 'button-primary' : 'button-outline'}
              style={{ fontSize: '0.9rem', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
            >
              Через Google Form
            </button>
            <button
              onClick={() => setUseIframe(false)}
              className={!useIframe ? 'button-primary' : 'button-outline'}
              style={{ fontSize: '0.9rem', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
            >
              Заполнить на сайте
            </button>
          </div>

          {useIframe ? (
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              padding: '40px',
              textAlign: 'left',
            }}>
              <div style={{
                backgroundColor: 'rgba(232, 184, 96, 0.2)',
                padding: '20px',
                borderRadius: '16px',
                marginBottom: '20px',
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#2c2c2c',
                  lineHeight: 1.6,
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  <strong>Для организатора:</strong> Чтобы анкета работала и результаты записывались в Google Таблицу:
                </p>
                <ol style={{
                  fontSize: '0.9rem',
                  color: '#2c2c2c',
                  lineHeight: 1.6,
                  marginTop: '10px',
                  paddingLeft: '20px',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}>
                  <li>Создайте форму на <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b8505f' }}>forms.google.com</a></li>
                  <li>С вопросами: Имя, Присутствие, Напитки, Аллергия</li>
                  <li>Нажмите Отправить - скопируйте URL iframe</li>
                  <li>Вставьте URL в файл app/components/Survey.tsx в переменную GOOGLE_FORM_URL</li>
                </ol>
              </div>

              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="800"
                style={{
                  border: 'none',
                  borderRadius: '16px',
                }}
                title="Анкета гостя"
              >
                Загрузка формы...
              </iframe>
            </div>
          ) : (
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

              <button
                type="submit"
                className="button-primary"
                style={{ width: '100%' }}
              >
                Отправить ответ
              </button>
            </form>
          )}

          <p style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.8)',
            marginTop: '20px',
            textAlign: 'center',
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}>
            Для записи в Google Таблицу переключитесь на режим Через Google Form и следуйте инструкции
          </p>
        </div>
      </div>
    </div>
  )
}
