/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import styles from '@/styles/Gambar.module.css'
import Image from 'next/image'

export default function Gambar(props) {
  // eslint-disable-next-line react/prop-types
  const { reqGambar1, reqGambar2, reqGambar3, reqGambar4 } = props

  // eslint-disable-next-line react/prop-types
  const [gambar1, setGambar1] = useState(reqGambar1.photos)
  // eslint-disable-next-line react/prop-types
  const [gambar2, setGambar2] = useState(reqGambar2.photos)
  // eslint-disable-next-line react/prop-types
  const [gambar3, setGambar3] = useState(reqGambar3.photos)
  // eslint-disable-next-line react/prop-types
  const [gambar4, setGambar4] = useState(reqGambar4.photos)

  useEffect(() => {
    setGambar1(reqGambar1.photos)
    setGambar2(reqGambar2.photos)
    setGambar3(reqGambar3.photos)
    setGambar4(reqGambar4.photos)
  })

  console.log(gambar1)
  return (
    <>

      <div className={styles.gambar}>
        <div className={styles.des}>GAMBAR MANCUP</div>
        <div className={styles.wapper}>
          <div className={styles.ul}>

            <div className={styles.satu}>
              <div className={styles.wapperdalam}>
                {gambar1.map((data, i) => {
                  return <>
                    <div className={styles.li1} key={i}>
                      <div className={styles.dalamgambar}>
                        <Image src={data.src.large} alt={data.alt} width={500} height={500} style={{borderRadius: '10px'}}></Image>
                        <div className={styles.photographer}> <p>{data.photographer}</p> </div>
                      </div>
                    </div>
                  </>
                })}
              </div>

              <div className={styles.wapperdalam}>
                {gambar2.map((data, i) => {
                  return <>
                    <div className={styles.li2} key={i}>
                      <div className={styles.dalamgambar}>
                        <Image src={data.src.large2x} alt={data.alt} width={500} height={500} style={{borderRadius: '10px'}}></Image>
                      </div>
                    </div>
                  </>
                })}
              </div>
            </div>

            <div className={styles.dua}>
              <div className={styles.wapperdalam}>
                {gambar3.map((data, i) => {
                  return <>
                    <div className={styles.li3} key={i}>
                      <div className={styles.dalamgambar}>
                        <Image src={data.src.large2x} alt={data.alt} width={500} height={500} style={{borderRadius: '10px'}}></Image>
                      </div>
                    </div>
                  </>
                })}
              </div>
              <div className={styles.wapperdalam}>
                {gambar4.map((data, i) => {
                  return <>
                    <div className={styles.li4} key={i}>
                      <div className={styles.dalamgambar}>
                        <Image src={data.src.large2x} alt={data.alt} width={500} height={500} style={{borderRadius: '10px'}}></Image>
                      </div>
                    </div>
                  </>
                })}
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const [resGambar1, resGambar2, resGambar3, resGambar4] = await Promise.all([

    fetch('https://api.pexels.com/v1/curated?page=1&per_page=10', {
      headers: {
        Authorization: process.env.MY_SECRET_VARIABLE
      }
    }),
    fetch('https://api.pexels.com/v1/curated?page=2&per_page=10', {
      headers: {
        Authorization: process.env.MY_SECRET_VARIABLE
      }
    }),
    fetch('https://api.pexels.com/v1/curated?page=3&per_page=10', {
      headers: {
        Authorization: process.env.MY_SECRET_VARIABLE
      }
    }),
    fetch('https://api.pexels.com/v1/curated?page=4&per_page=10', {
      headers: {
        Authorization: process.env.MY_SECRET_VARIABLE
      }
    })
  ])

  // eslint-disable-next-line no-undef
  const [reqGambar1, reqGambar2, reqGambar3, reqGambar4] = await Promise.all([
    resGambar1.json(),
    resGambar2.json(),
    resGambar3.json(),
    resGambar4.json()
  ])
  return {
    props: {
      reqGambar1,
      reqGambar2,
      reqGambar3,
      reqGambar4
    }
  }
}
