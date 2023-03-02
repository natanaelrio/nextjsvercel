
import React, { useState } from 'react'
export default function BlackHide () {
  const [hilang, setHilang] = useState(false)

  console.log('cek', hilang)
  return (
        <div className='blackhide' onClick={() => setHilang(true)}></div>
  )
}
