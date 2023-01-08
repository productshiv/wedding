import React from 'react'
import { useEffect, useState } from 'react'

function Landing() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <img
      src="landing.jpg"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  )
}

export default Landing
