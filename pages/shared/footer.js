import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
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
                        ® 2021 - ARNI&apos;S PREMIUM
                    </div>

                </div>
                <div className={styles.space}>

                </div>
                <div className={styles.contact}>
                    <div className={styles.contacte}>
                        <img src="/img/mail.svg" alt="Mail" />
                        <p>
                            jsj.ksidad123@gmail.com

                        </p>
                    </div >
                    <div className={styles.contacte}>
                        <img src="/img/phone.svg" alt="Mail" />
                        <p>
                            974 311 302

                        </p>
                    </div>
                    <div>
                        <a href="https://instagram.com/dogophotograph?utm_medium=copy_link" aria-label='Diego Farfan Instagram'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33.206" height="33.197" viewBox="0 0 43.206 43.197">
                                <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M1789.069,62.213a11.075,11.075,0,1,0,11.075,11.075h0a11.057,11.057,0,0,0-11.04-11.075Zm0,18.276a7.2,7.2,0,1,1,7.2-7.2,7.2,7.2,0,0,1-7.2,7.2Zm14.112-18.729a2.583,2.583,0,1,1-2.584-2.583h0a2.577,2.577,0,0,1,2.584,2.571v.012Zm7.335,2.622c-.164-3.46-.954-6.526-3.489-9.051s-5.591-3.316-9.051-3.49c-3.566-.2-14.256-.2-17.823,0-3.45.165-6.516.955-9.051,3.48s-3.315,5.591-3.489,9.051c-.2,3.566-.2,14.256,0,17.822.164,3.461.954,6.526,3.489,9.051s5.591,3.316,9.051,3.49c3.567.2,14.256.2,17.823,0,3.46-.165,6.525-.955,9.051-3.49s3.315-5.59,3.489-9.051c.2-3.566.2-14.246,0-17.812Zm-4.607,21.639a7.29,7.29,0,0,1-4.107,4.106c-2.843,1.128-9.59.867-12.733.867s-9.9.251-12.733-.867a7.291,7.291,0,0,1-4.106-4.106c-1.128-2.843-.867-9.591-.867-12.733s-.251-9.9.867-12.733a7.291,7.291,0,0,1,4.106-4.106c2.844-1.128,9.591-.867,12.733-.867s9.9-.251,12.733.867a7.285,7.285,0,0,1,4.106,4.106c1.128,2.843.868,9.591.868,12.733S1807.036,83.187,1805.909,86.021Z" transform="translate(-1767.462 -51.689)" />
                            </svg>

                        </a>
                        <a href="https://www.facebook.com/DogoPhotograph/" target="_blank" rel="noopener noreferrer" aria-label='Diego Farfan Facebook'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33.364" height="33.102" viewBox="0 0 43.364 43.102">
                                <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M1865.191,73.544a21.682,21.682,0,1,0-25.07,21.42V79.812h-5.508V73.544h5.508V68.767c0-5.434,3.235-8.435,8.19-8.435a33.4,33.4,0,0,1,4.854.423v5.334h-2.735c-2.693,0-3.533,1.671-3.533,3.386v4.069h6.013l-.962,6.268H1846.9V94.964A21.69,21.69,0,0,0,1865.191,73.544Z" transform="translate(-1821.827 -51.862)" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}