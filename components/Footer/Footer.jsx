import styles from "./Footer.module.css"


export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.kiri}>
        <div className={styles.logo}>© 2022 All Rights Reserved</div>
      </div>
      <div className="{styles.kanan}">
        <div className="by">Made: Natanael Rio Wijaya</div>
      </div>
    </div>
  )
}
