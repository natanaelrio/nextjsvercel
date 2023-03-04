/* eslint-disable react/prop-types */

import { useState } from 'react'
import styles from '@/styles/Gambar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Gambar (props) {
  // eslint-disable-next-line react/prop-types
  const { reqGambar1 } = props

  // eslint-disable-next-line react/prop-types
  const [gambar1, setGambar1] = useState(reqGambar1.photos)

  const getMorePost = async () => {
    const res = await fetch(`https://api.pexels.com/v1/curated?page=2&per_page=${gambar1.length}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_ANALYTICS_ID
      }
    })
    const newPosts = await res.json()
    const Mantap = await newPosts.photos
    setGambar1(gambar1 => [...gambar1, ...Mantap])
  }

  return (
    <>

      <div className={styles.gambar}>
        <div className={styles.des}>GAMBAR MANCUP</div>
        <div className={styles.wapper}>
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
            <InfiniteScroll
              dataLength={gambar1.length}
              next={getMorePost}
              hasMore={true}
              loader={<center>Loading...</center>}
              endMessage={
                <center>sudahhhh</center>
              }
            >
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const resGambar1 = await fetch('https://api.pexels.com/v1/curated?page=1&per_page=10', {
    headers: {
      Authorization: process.env.MY_SECRET_VARIABLE
    }
  })
  const reqGambar1 = await resGambar1.json()

  return {
    props: {
      reqGambar1
    }
  }
}
