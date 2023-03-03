import stylesA from '@/styles/Pencarian.module.css'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Search (props) {
  const [cari, setCari] = useState(' ')
  const [tampung, setTampung] = useState([])

  const headSubmit = async (e) => {
    setCari(e)
    if (cari) {
      const res = await fetch(`${process.env.API_ENDPOINT}?limit=20&cari=${cari}`)
      const newCari = await res.json()
      setTampung(newCari)
    }
  }

  console.info('halamanpencarian', props)

  return (
        <>

            <form className={stylesA.Pen} method='get' action={`/search/${cari}`}>
                <div className={stylesA.pencarian} >
                    <input placeholder='Cari..' type="search" value={cari} onChange={(e) => { headSubmit(e.target.value) }}/>
                    <button type="submit" >Cari</button>
                </div>
                <ul>
                    {cari.length !== 0
                      ? tampung.map((dataku, i) => {
                        return (
                            <>
                                <li>
                                    <Link key={i} href={dataku.slug} className={stylesA.link} >
                                        <div className={stylesA.kiri}>{dataku.judul}</div>
                                        <div className={stylesA.kanan}><Image className={stylesA.gambar} src={dataku.urlgambar} width={50} height={50} alt={dataku.judul}></Image></div>
                                    </Link>
                                </li>
                            </>
                        )
                      })
                      : null
                    }
                </ul>
            </form>
        </>
  )
}
