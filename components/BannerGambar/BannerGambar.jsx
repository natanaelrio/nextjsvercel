import React, { useState } from 'react'
import Image from 'next/image'
import gambar from './BannerGambar.module.css'
export default function BannerGambar () {
  const [cari, setCari] = useState(' ')
  console.log(cari)
  const [tampunglist, setTampunglist] = useState([])

  const headSumbit = async (e) => {
    setCari(e)
    if (cari) {
      const res = await fetch(`https://api.pexels.com/v1/search?query=${cari}&per_page=10`, {
        headers: {
          Authorization: process.env.MY_SECRET_VARIABLE,
          mode: 'cros'
        }
      })
      const req = await res.json()
      const req2 = await req.photos
      setTampunglist(req2)
    }
  }
  return (
        <>
            <div className={gambar.banner}>
                <div className={gambar.gambarbanner}>
                    <Image src='http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F15695047%2Fpexels-photo-15695047.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D650%26w%3D940&w=640&q=75' alt='ok' width={500} height={500}></Image>
                </div>
                <div className={gambar.blur}></div>
                <div className={gambar.des}>
                    <div className={gambar.kata1}>
                        Seni ? cari gambar sini :)
                    </div>
                    <div className={gambar.kata2}>
                        Cari Gambar sekitar kamu, buat temu ide baru
                    </div>
                    <div className={gambar.pencarian}>
                        <form method='get' action={`/search/gambar/${cari}`}>
                            <input value={cari} type="text" placeholder='cari gambar...' onChange={(e) => headSumbit(e.target.value)} />
                            <button type='sumbit'>Cari</button>
                        </form>
                        <div className={gambar.listpencarian}>
                            {tampunglist.map((data, i) => {
                              return <>
                                    <ul key={i}>
                                        <li>{data.alt}</li>
                                    </ul>
                                </>
                            })}
                        </div>
                    </div>
                </div>
                <div className={gambar.author}>
                    Photo by: <b>Natanael Rio Wijaya</b>
                </div>
            </div>
        </>
  )
}
