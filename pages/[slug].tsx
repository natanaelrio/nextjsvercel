import Head from "next/head";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image"

import stylesU from '../styles/universalartikel.module.css'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import Fb from "../Asset/Gambar/FBshare.svg";
import Tw from "../Asset/Gambar/TWshare.svg";
import Wa from "../Asset/Gambar/WAshare.svg";
import Tl from "../Asset/Gambar/TLshare.svg";
import Arrow from "../Asset/Gambar/arrow.svg";
import Home from "../Asset/Gambar/home.svg";


interface Post {
    uid: number;
    slug: string;
    judul: string;
    viewartikel: string;
    urlgambar: string;
    tanggalsamping: string;
    paragraf: string;
    keyword: string;
    tanggalartikel: string;
    posting: string;
    deskripsi: string;
}


interface BlogProps {
    datablog: Post[]
    datablogdua: Post[]
}




export default function DetailBlog(props: BlogProps) {
    const { datablog, datablogdua } = props;
    const router = useRouter();
    const { slug } = router.query;


    return (
        <>

            {datablog.map((dataku) => {
                return (
                    <>
                        <div>
                            <Head>
                                <title>{dataku.judul} - DuaTeman</title>
                                <meta name="description" content={dataku.paragraf} />
                                <meta name="originalTitle" content={dataku.judul + ' - Duateman'} />
                                <meta name="keywords" content={dataku.keyword} />
                                <meta name="robots" content="index, follow" />
                                <meta name="author" content="DuaTeman.com" />
                                <meta property="og:image" content={dataku.urlgambar} />
                                <meta property="og:image:width" content="650" />
                                <meta property="og:image:height" content="366" />
                                <link href="./duaW.svg" rel="shortcut icon" type="image/x-icon" />
                            </Head>
                            <body>

                                <Header />
                                <div className="wk">
                                    <div className={stylesU.artikelwapper} >


                                        <div className={stylesU.share}>
                                            <div className={stylesU.dalamshare}>
                                                <div className={stylesU.bungkusgambar}>
                                                    <Link href={`http://www.facebook.com/sharer.php?u=https://duateman.com/${slug}`}> <Image src={Fb} width={10} height={10} alt="sharefacebookduateman" ></Image></Link>
                                                </div>
                                                <div className={stylesU.bungkusgambar}>
                                                    <Link href={`https://twitter.com/share?url=https://duateman.com/${slug}`}><Image src={Tw} width={10} height={10} alt="sharetwitterduateman" ></Image></Link>
                                                </div>
                                                <div className={stylesU.bungkusgambar}>
                                                    <Link href={`https://api.whatsapp.com/send/?text=https://duateman.com/${slug}`}><Image src={Wa} width={10} height={10} alt="sharewhatsappsduateman" ></Image></Link>
                                                </div>
                                                <div className={stylesU.bungkusgambar}>
                                                    <Link href={`https://t.me/share/url?url=https://duateman.com/${slug}`}> <Image src={Tl} width={10} height={10} alt="sharetelegramduateman" ></Image></Link>
                                                </div>
                                            </div>
                                        </div>



                                        <div className={stylesU.isiartikel}>

                                            <div className={stylesU.article}>
                                                <div className={stylesU.kiri}>

                                                    <div className={stylesU.navartikel}>
                                                        <Link className={stylesU.l} href="/" >Home</Link>
                                                        <div className={stylesU.cl}> <Image className={stylesU.c} src={Arrow} alt="arrow duateman" width={50} height={50} /> </div>
                                                        <div className={stylesU.r}>
                                                            {dataku.judul}
                                                        </div>
                                                    </div>

                                                    <div className={stylesU.judul}><h1>{dataku.judul}</h1></div>
                                                    <div className={stylesU.tanggal}>Release : {dataku.tanggalartikel}</div>
                                                    <div className={stylesU.gambartengah}>
                                                        <div className={stylesU.tumb}>
                                                            <div className={stylesU.gambar}>
                                                                <Image src={dataku.urlgambar} alt={dataku.judul} width={500} height={500} />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className={stylesU.shareI}>
                                                        <div className={stylesU.dalamshareI}>

                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`http://www.facebook.com/sharer.php?u=https://duateman.com/${slug}`}> <Image src={Fb} width={10} height={10} alt="sharefacebookduateman" ></Image></Link>
                                                            </div>
                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`https://twitter.com/share?url=https://duateman.com/${slug}`}><Image src={Tw} width={10} height={10} alt="sharetwitterduateman" ></Image></Link>
                                                            </div>
                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`https://api.whatsapp.com/send/?text=https://duateman.com/${slug}`}><Image src={Wa} width={10} height={10} alt="sharewhatsappsduateman" ></Image></Link>
                                                            </div>
                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`https://t.me/share/url?url=https://duateman.com/${slug}`}> <Image src={Tl} width={10} height={10} alt="sharetelegramduateman" ></Image></Link>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className={stylesU.posting}>
                                                        <div dangerouslySetInnerHTML={{ __html: dataku.posting }}></div>
                                                    </div>

                                                    <div className={stylesU.shareI}>
                                                        <div className={stylesU.dalamshareI}>

                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`http://www.facebook.com/sharer.php?u=https://duateman.com/${slug}`}> <Image src={Fb} width={10} height={10} alt="sharefacebookduateman" ></Image></Link>
                                                            </div>
                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`https://twitter.com/share?url=https://duateman.com/${slug}`}><Image src={Tw} width={10} height={10} alt="sharetwitterduateman" ></Image></Link>
                                                            </div>
                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`https://api.whatsapp.com/send/?text=https://duateman.com/${slug}`}><Image src={Wa} width={10} height={10} alt="sharewhatsappsduateman" ></Image></Link>
                                                            </div>
                                                            <div className={stylesU.bungkusgambarI}>
                                                                <Link href={`https://t.me/share/url?url=https://duateman.com/${slug}`}> <Image src={Tl} width={10} height={10} alt="sharetelegramduateman" ></Image></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={stylesU.keyword}>
                                                        <b>Keyword:</b> <i>{dataku.keyword}</i>
                                                    </div>
                                                </div>


                                                <div className={stylesU.tengah}>
                                                    <div id="fb-root"></div>
                                                    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v16.0&appId=1242080813410278&autoLogAppEvents=1" nonce="OdjogadS"></script>
                                                    <div className={stylesU.komentar}>
                                                        <div className="fb-comments" data-href={`https://duateman.com/artikel.php?s=${slug}`} data-width="100%" data-numposts="10"></div>
                                                    </div>
                                                </div>


                                                <div className={stylesU.kanan}>
                                                    <h2>Artikel Terbaru</h2>
                                                    <div className={stylesU.sampingwapper}>
                                                        {datablogdua.map((dataku) => {
                                                            return (
                                                                <>
                                                                    <Link href={'/' + dataku.slug}>
                                                                        <div className={stylesU.bungkussamping} key={dataku.uid}>
                                                                            <div className={stylesU.sebelahkiri}>
                                                                                <div className={stylesU.judul}>{dataku.judul}</div>
                                                                                <div className={stylesU.tanggalsamping}>{dataku.tanggalsamping}</div>
                                                                                <div className={stylesU.deskripsi}>{dataku.deskripsi}</div>
                                                                            </div>
                                                                            <div className={stylesU.sebelahkanan}>
                                                                                <Image src={dataku.urlgambar} width={500} height={500} alt={dataku.judul} />
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </body>

                        </div>
                    </>
                )
            })}
        </>
    )
}





export async function getServerSideProps(context: any) {
    const slug = context.params.slug;

    const [datablogRes, datablogduaRes] = await Promise.all([
        fetch(`${process.env.API_ENDPOINT}?cari=${slug}`),
        fetch(`${process.env.API_ENDPOINT}?limit=7`)
    ]);
    const [datablog, datablogdua] = await Promise.all([
        datablogRes.json(),
        datablogduaRes.json()
    ]);
    return { props: { datablog, datablogdua } };

}