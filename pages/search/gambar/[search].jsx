/* eslint-disable react/display-name */

import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '@/styles/Gambar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HeaderGambar from '../../../components/HeaderGambar/HeaderGambar'
export default function carix (props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useRouter()
  const { search } = data.query

  const { req } = props
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cari] = useState(req.photos)
  console.log(req.photos)

  return (
        <>
            <body>
              <HeaderGambar />
                <div className={styles.gambar}>
                    <div className={styles.des}>Hasil Pencarian {search} </div>
                    <div className={styles.wapper}>

                        <div className={styles.ul}>
                            {cari?.map((data, i) => {
                              return <>
                                    <div className={styles.li1} key={i}>
                                        <div className={styles.dalamgambar}>
                                            <Image src={data.src.large} alt={data.alt} width={500} height={500} style={{ borderRadius: '10px' }}></Image>
                                            <Link href={data.photographer_url}>
                                                <div className={styles.ph} style={{ backgroundColor: (`${data.avg_color}`) }}>@{data.photographer}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            })
                            }
                        </div>
                    </div>
                </div>
            </body>
        </>
  )
}

export async function getServerSideProps (ctx) {
  const search = ctx.query.search
  const res = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=40`, {
    headers: {
      Authorization: process.env.MY_SECRET_VARIABLE
    }
  })
  const req = await res.json()
  return {
    props: { req }
  }
}
