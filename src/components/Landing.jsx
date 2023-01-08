import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function Landing() {
  return (
    <Image
      fill
      sizes='100vw'
      src="/images/nest.png"
      alt="Landing"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}

export default Landing
