import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavBar from "./shared/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arnis Premium</title>
        <meta
          name="description"
          content="Te ofrecemos todo lo
                    necesario para una
                    parrillada, almuerzo
                    o reunión perfecta
                    entre amigos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>

      <main >

      </main>

      <footer >

      </footer>
    </div>
  );
}
