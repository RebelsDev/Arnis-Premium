/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NavBar from "./shared/Navbar";

export default function Home() {
  return (
    <div>
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
      <NavBar />

      <main >
        <section id={styles.hero} >
          <div className={styles.container}>
            <img id={styles.logo} src="/img/hero_logo.png" alt="Logo Arnis Premium" />
            <h1>Te ofrecemos todo lo
              necesario para una
              parrillada, almuerzo
              o reunión perfecta
              entre amigos</h1>
            <p>Pollo, cerdo, res, pescado, mariscos,
              embutidos y mucho más...</p>
            <a href="">
              <button>Haz tu pedido</button>
            </a>
          </div>

          <div className={styles.bg}>
            <img src="/img/hero_bg_1.png" alt="Pollo a la parrilla" />
          </div>
        </section>
        <section id={styles.miedos} >
          <div className={styles.container}>
            <h2>Si planeas tener una
              parrillada o almuerzo
              entre amigos, es muy
              probable que...</h2>
            <div className={styles.miedos_elements}>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_1.svg" alt="reloj" />
                <p>No tengas el tiempo
                  necesario para comprar
                  todos los insumos
                  en diferentes lugares.</p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_2.svg" alt="dinero" />
                <p>Los precios de los
                  productos no sean
                  los mismos de tu
                  presupuesto.</p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_3.svg" alt="platos" />
                <p>Estés cansado de
                  comer los mismos platos
                  de siempre en todas
                  tus reuniones.</p>
              </div>
              <div className={styles.miedos_element}>
                <img src="/img/miedos_4.svg" alt="pregunta" />
                <p>No sepas para
                  cuantas personas
                  alcanzarán los insumos
                  que compraste</p>
              </div>
            </div>

          </div>

        </section>
        <section id={styles.beneficios} >
          <div className={styles.container}>
            <h2>Sin embargo, te gustaría...</h2>
            <div className={styles.beneficios_elements}>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_1.png" alt="" />
                <p>Evitar el tráfico de
                  la ciudad y evitar las
                  largas colas en
                  supermercados. </p>

              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_2.png" alt="" />
                <p>Evitar el tráfico de
                  la ciudad y evitar las
                  largas colas en
                  supermercados. </p>

              </div>
              <div className={styles.beneficios_element}>
                <img src="/img/deseos_3.png" alt="" />
                <p>Evitar el tráfico de
                  la ciudad y evitar las
                  largas colas en
                  supermercados. </p>

              </div>
            </div>
          </div>

        </section>
        <section id={styles.quien_soy} >

        </section>
        <section id={styles.propuesta} >

        </section>
        <section id={styles.testimonios} >

        </section>
        <section id={styles.lead_magnet} >

        </section>
        <section id={styles.hero_footer} >

        </section>
      </main>

      <footer >

      </footer>
    </div>
  );
}
