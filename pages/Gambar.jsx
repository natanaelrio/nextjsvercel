/* eslint-disable react/prop-types */

import { useState } from 'react'
import styles from '@/styles/Gambar.module.css'
import gambar from '../components/BannerGambar/BannerGambar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Gambar (props) {
  // eslint-disable-next-line react/prop-types
  const { reqGambar1, reqBanner } = props

  // eslint-disable-next-line react/prop-types
  const [gambar1, setGambar1] = useState(reqGambar1.photos)
  const [cari, setCari] = useState(' ')

  const getMorePost = async () => {
    const res = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=${gambar1.length}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_ANALYTICS_ID
      }
    })
    const newPosts = await res.json()
    const Mantap = await newPosts.photos
    setGambar1(posts => [...posts, ...Mantap])
  }

  // eslint-disable-next-line no-cond-assign, no-constant-condition
  console.log('PANJANG', gambar1.length)

  return (
    <>
      <body>
        {reqBanner.photos.map((data) => {
          console.log(data)
          return (
            <>
              <div className={gambar.banner}>
                <div className={gambar.gambarbanner}>
                  <Image src={data.src.landscape} alt={data.alt} width={500} height={500}></Image>
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
                      <input value={cari} type="text" placeholder='cari gambar...' onChange={(e) => setCari(e.target.value)} />
                      <button type='sumbit'>Cari</button>
                    </form>
                  </div>
                </div>
                <div className={gambar.author}>
                  <Link className={gambar.sauthor} href={data.photographer_url}>
                    Photo by: <b>{data.photographer}</b>
                  </Link>
                </div>
              </div>
            </>
          )
        })}

        <div className={styles.gambar}>
          <div className={styles.des}>Last Update...</div>
          <div className={styles.wapper}>
            <InfiniteScroll
              dataLength={gambar1.length}
              next={getMorePost}
              hasMore={true}
              loader={<center>Loading...</center>}
              endMessage={
                <center>sudahhhh</center>
              }
            >
              <div className={styles.ul}>
                {gambar1?.map((data, i) => {
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
            </InfiniteScroll>
          </div>
        </div>
      </body>
    </>
  )
}

export async function getServerSideProps () {
  const [resGambar1, resBanner] = await Promise.all([
    fetch('https://api.pexels.com/v1/curated?page=1&per_page=10', {
      headers: {
        Authorization: process.env.MY_SECRET_VARIABLE
      }
    }),
    fetch('https://api.pexels.com/v1/curated?page=1&per_page=1', {
      headers: {
        Authorization: process.env.MY_SECRET_VARIABLE
      }
    })
  ])
  const [reqGambar1, reqBanner] = await Promise.all([
    resGambar1.json(),
    resBanner.json()
  ])

  return {
    props: {
      reqGambar1,
      reqBanner
    }
  }
}
