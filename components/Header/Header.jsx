
import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Dua from '../../Asset/Gambar/duaPw.svg'

export default function Header () {
  return (
    <>
      <div className={styles.navigasi}>
        <div className={styles.navwarp}>
          <div className={styles.logoluar}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={Dua} width={200} height={200} alt="duateman" />
              </Link>
            </div>
          </div>
          <div className={styles.pilihan}>
            <ul>
              <li className={styles.satu}><Link href="/">Home</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/tentang-kami.php">Tentang</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/hubungi-kami.php">Kontak</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/kebijakan-privasi.php">Kebijakan Privasi</Link></li>
              <li className={styles.satu}><Link href="https://duateman.com/site-map.php">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
