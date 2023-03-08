/* eslint-disable multiline-ternary */

import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Dua from '../../Asset/Gambar/duaPw.svg'
import { useState } from 'react'

export default function Header () {
  const [milang, setMilang] = useState(false)

  const [cari, setCari] = useState(' ')
  const [tampung, setTampung] = useState([])

  const headSubmitt = async (e) => {
    setCari(e)
    if (cari) {
      const res = await fetch(`${process.env.API_ENDPOINT}?limit=20&cari=${cari}`)
      const newCari = await res.json()
      setTampung(newCari)
    }
  }

  return (
    <>
      <div className={styles.navigasi}>

        <div className={styles.navwarp}>

          <div className={styles.logoluar}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={Dua} width={200} height={200} alt="duateman" />
              </Link>
            </div>
          </div>

          <div className={styles.wappernav}>
            <form className={styles.f} method='get' action={`/search/${cari}`}>
              <div className={styles.pencarian}>
                <input placeholder='Cari..' type="search" value={cari} onChange={(e) => { headSubmitt(e.target.value) }} />
                <button type="submit" >Cari</button>
              </div>
              <ul>
                {cari.length !== 0 ? tampung.map((dataku) => {
                  return (
                    <>
                      <li key={dataku.uid}>
                        <Link href={dataku.slug} className={styles.link}>
                          <div className={styles.kiri}>{dataku.judul}</div>
                          <div className={styles.kanan}><Image className={styles.gambar} src={dataku.urlgambar} width={50} height={50} alt={dataku.judul}></Image></div>
                        </Link>
                      </li>
                    </>
                  )
                })
                  : null
                }
              </ul>
            </form>
          </div>

          <div className={styles.pilihan}>

         {milang && (
            <ul>
              <li className={styles.satu}><Link href="/">Home</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/tentang-kami.php">Tentang</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/hubungi-kami.php">Kontak</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/kebijakan-privasi.php">Kebijakan Privasi</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/site-map.php">Sitemap</Link></li>
            </ul>)}

            <div className={styles.burger}>
              <div className={styles.burgerdalam}></div>
              <div className={styles.burgerdalam}></div>
              <div className={styles.burgerdalam}></div>
              <button onClick={() => setMilang(!milang)} ></button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
