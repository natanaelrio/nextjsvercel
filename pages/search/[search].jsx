import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';

// eslint-disable-next-line react/prop-types
export default function UserDetail ({ req }) {
  const router = useRouter()
  const { search } = router.query

  const [posts, setPosts] = useState(req)

  const getMorePost = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}?cari=${search}&limit=8&offlimit=${posts.length}`)
    const newPost = await res.json()
    setPosts(posts => [...posts, ...newPost])
  }

  console.log(posts)

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="NUPnZEnTOb69JC5wg9ZBL1BY-5oKqi4DSnxWPOU4YXo" />
        <meta property="og:type" content="article" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#744E8F" />
        <title>DuaTeman.com</title>
        <meta name="description" content="informasi seputar anime dan manga baik dari sisi karakter, alur cerita, spoiler dan banyak lagi yang bisa anda temukan di DuaTeman." />
        <meta name="originalTitle" content="DuaTeman.com" />
        <meta name="keywords" content="duateman,dua teman,duatemancom,artikel duateman, komik duateman, baca anime ,baca manga,baca manga indo, baca anime, artikel anime, fakta anime, komik anime, anime,manga,manhwa,anime manga" />
        <meta name="author" content="DuaTeman.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="" />
        <link href="./duaW.svg" rel="shortcut icon" type="image/x-icon" />
      </Head>
      <body>

        <Header />

        <div className={styles.tai} >

          <div className={styles.judullistartikelluar} style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }} id="artikel">
            <div className={styles.judullistartikel}>Pencarian Dari {search}</div>
          </div>
          <div className={styles.luarcard}>
            <InfiniteScroll
              dataLength={posts.length}
              next={getMorePost}
              hasMore={true}
              loader={<center>Loading...</center>}
              endMessage={
                <center>sudahhhh</center>
              }
            >
              <div className={styles.luarcardwarp}>

                {!posts || posts.length == 0 ? <p>Gak ADE</p> : posts.map((dataku) => {
                  return (
                    <>
                      <Link key={dataku.uid} href={dataku.slug}>
                        <div className={styles.bungkuscard}>
                          <div className={styles.gambarartikel}>
                            <div className={styles.view}>
                              {dataku.viewartikel}
                            </div>
                            <img src={dataku.urlgambar} alt={dataku.judul}></img>
                            <div className="linierartikel"></div>
                          </div>
                          <div className={styles.bungkusdesartikel}>
                            <div className={styles.tanggal}>{dataku.tanggalsamping}</div>
                            <div className={styles.judul} >{dataku.judul}</div>
                          </div>
                        </div>
                      </Link>

                    </>
                  )
                })}
              </div>
            </InfiniteScroll>
          </div>
        </div>
        <Footer />
      </body>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const cari = ctx.query.search

  console.info(ctx.params)
  const res = await fetch(`${process.env.API_ENDPOINT}?cari=${cari}&limit=8`)
  const req = await res.json()

  return {
    props: {
      req
    }
  }
}
