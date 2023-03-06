import HGambar from './HeaderGambar.module.css'
import { useState } from 'react'
import Link from 'next/link'
export default function HeaderGambar () {
  const [cari, setCari] = useState(' ')

  return (
        <div className={HGambar.tampung}>
            <div className={HGambar.dalam}>
                <div className={HGambar.judul}><Link href='/gambar'>Duateman.com</Link></div>
                <div className={HGambar.pencarian}>
                <form method='get' action={`${cari}`}>
                      <input value={cari} type="text" placeholder='cari gambar...' onChange={(e) => setCari(e.target.value)} />
                      <button type='sumbit'>Cari</button>
                    </form>
                </div>
            </div>
        </div>
  )
}
