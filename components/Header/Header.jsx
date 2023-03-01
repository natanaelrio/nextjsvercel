/* eslint-disable multiline-ternary */

import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Dua from '../../Asset/Gambar/duaPw.svg'
import { useState } from 'react'

export default function Header () {
  const wk = document.getElementById('hilangkan')
  const wkwk = document.getElementById('bawahkan')
  const [milang, setMilang] = useState(false)

  const headhilang = () => {
    wk.classList.toggle('hilang')
    wkwk.classList.toggle('top')
    setMilang(true)
  }

  const [cari, setCari] = useState(' ')
  const [tampung, setTampung] = useState([])

  const headSubmit = async (e) => {
    setCari(e)
    if (cari) {
      const res = await fetch(`${process.env.API_ENDPOINT}?limit=4&cari=${cari}`)
      const newCari = await res.json()
      setTampung(newCari)
    }
  }
  console.log(milang)

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

          <div className={styles.wappernav} id='bawahkan'>
            <form className={styles.f} method='get' action={`/search/${cari}`}>
              <div className={styles.pencarian}>
                <input placeholder='Cari..' type="search" value={cari} onChange={(e) => { headSubmit(e.target.value) }} />
                <button type="submit" >Cari</button>
              </div>
              <ul>
                {cari.length !== 0 ? tampung.map((dataku, i) => {
                  return (
                    <>
                      <li>
                        <Link key={i} href={dataku.slug} className={styles.link}>
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

            <div className={styles.burger}>
              <div className={styles.burgerdalam}></div>
              <div className={styles.burgerdalam}></div>
              <div className={styles.burgerdalam}></div>
              <button onClick={headhilang}></button>
            </div>
            <ul id='hilangkan'>
              <li className={styles.satu}><Link href="/">Home</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/tentang-kami.php">Tentang</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/hubungi-kami.php">Kontak</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/kebijakan-privasi.php">Kebijakan Privasi</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/site-map.php">Sitemap</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}
