'use client'

import { useEffect, useState } from 'react'

export default function Stars() {
  const [stars, setStars] = useState<{ top: number; left: number }[]>([])

  useEffect(() => {
    const tempStars = []
    for (let i = 0; i < 100; i++) {
      tempStars.push({
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      })
    }
    setStars(tempStars)
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
