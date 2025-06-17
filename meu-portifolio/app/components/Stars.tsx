'use client'

import { useEffect, useState } from 'react'

export default function Stars() {
  const [stars, setStars] = useState<{ top: number; left: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const pageHeight = document.body.scrollHeight
      const pageWidth = window.innerWidth
      const tempStars = []

      for (let i = 0; i < 150; i++) {
        tempStars.push({
          top: Math.random() * pageHeight,
          left: Math.random() * pageWidth,
        })
      }

      setStars(tempStars)
    }

    generateStars()

    // Opcional: Regenerar estrelas se a pessoa redimensionar a janela
    window.addEventListener('resize', generateStars)

    return () => {
      window.removeEventListener('resize', generateStars)
    }
  }, [])

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className="stars"
          style={{ top: star.top, left: star.left }}
        ></div>
      ))}
    </>
  )
}
