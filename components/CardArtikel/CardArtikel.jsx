import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
export default function CardArtikel (props) {
  return (
        <>
            <Link key={props.uid} href={props.slug}>
                <div className={styles.bungkuscard}>
                    <div className={styles.gambarartikel}>
                        <div className={styles.view}>
                            {props.viewartikel}
                        </div>
                        <LazyLoadImage
                            alt={props.judul}
                            src={props.urlgambar}
                            effect="blur"
                            height={250}
                            />
                        <div className="linierartikel"></div>
                    </div>
                    <div className={styles.bungkusdesartikel}>
                        <div className={styles.tanggal}>{props.tanggalsamping}</div>
                        <div className={styles.judul} >{props.judul}</div>
                    </div>
                </div>
            </Link>
        </>
  )
}
