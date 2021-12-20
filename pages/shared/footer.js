import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>

                    <Link href={'/politica-y-privacidad'}>
                        <a>
                            <p>Política de privacidad</p>
                        </a>
                    </Link>
                    <Link href={'/terminos-y-condiciones'}>
                        <a>
                            <p id={styles.last}>Términos y condiciones</p>
                        </a>
                    </Link>

                </div>
                <div className={styles.copyright}>
                    ® 2021 - ZOTIAN
                </div>
            </div>
        </div>
    )
}