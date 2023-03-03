import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import stylesb from '@/styles/Banner.module.css'
import stylesA from '@/styles/Pencarian.module.css'
import Footer from '../components/Footer/Footer'
import Link from "next/link";
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image'
import Bg from '../Asset/Gambar/1994.jpg'
import Dua from '../Asset/Gambar/duaP.svg'
import Dekor from '../Asset/Gambar/dekor.svg'
import Black from '../components/Black/Black'

interface Post {
  uid: number;
  slug: string;
  judul: string;
  viewartikel: string;
  urlgambar: string;
  tanggalsamping: string;
  from: any;
  cari: any;
  setCari: any;
}

interface BlogProps {
  datablog: Post[]
  datablogdua: Post[]
  datablogcari: Post[]
}


export default function Home(props: BlogProps) {
  const { datablog } = props;

  const [posts, setPosts] = useState(datablog)

  const getMorePost = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}?limit=4&offlimit=${posts.length}`)
    const newPosts = await res.json()
    setPosts(posts => [...posts, ...newPosts])
  }


  const [cari, setCari] = useState(" ");
  const [tampung, setTampung] = useState([])

  const headSubmit = async (e: React.SetStateAction<string>) => {
    setCari(e)
    if (cari) {
      const res = await fetch(`${process.env.API_ENDPOINT}?limit=4&cari=${cari}`)
      const newCari = await res.json();
      setTampung(newCari)
    }
  }



  return (
    <>
      <Head>
        <meta name="google-site-verification" content="NUPnZEnTOb69JC5wg9ZBL1BY-5oKqi4DSnxWPOU4YXo" />
        <meta property="og:type" content="article" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

        {cari.length !== 0 ? <Black /> : null}
        <div className={stylesb.wapper}>

          <div className={stylesb.wapper2}>
            <div className={stylesb.logo}>
              <Image className={stylesb.logogambar} src={Dua} width={50} height={50} alt="duateman.com">
              </Image>
              <div className={stylesb.tulisan}>
                <h1>
                  DUATEMAN.COM
                </h1>
              </div>
            </div>
            <div className={stylesb.bgt}></div>
            <div className={stylesb.bg}><Image src={Bg} alt="background" /></div>
            <div className={stylesb.dalamisi}>

              <div className={stylesb.judul}>Bosan? Sini dong :)</div>
              <div className={stylesb.deskripsi}>baca artikel Anime dan Manga yang menghibur harimu</div>

              <div className={stylesb.pencarian}>


              <form className={stylesA.Pen} method='get' action={`/search/${cari}`}>
                <div className={stylesA.pencarian} >
                    <input placeholder='Cari..' type="search" value={cari} onChange={(e) => { headSubmit(e.target.value) }}/>
                    <button type="submit" >Cari</button>
                </div>
                <ul>
                    {cari.length !== 0
                      ? tampung.map((dataku: any, i) => {
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


              </div>
            </div>
          </div>
        </div>


        <Image src={Dekor} alt="dekor duateman" width={50} height={50}></Image>
        <div className={styles.tai} id="artikel" >

          <div className={styles.judullistartikelluar} >
            <div className={styles.judullistartikel}>Daftar Artikel</div>
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

                {posts.map((dataku, i) => {

                  return (
                    <>
                      <Link key={i} href={dataku.slug}>
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


export async function getServerSideProps() {
  const [datablogRes] = await Promise.all([
    fetch(`${process.env.API_ENDPOINT}?limit=8`)
  ]);
  const [datablog] = await Promise.all([
    datablogRes.json(),
  ]);
  return {
    props: {
      datablog
    }
  };

}


