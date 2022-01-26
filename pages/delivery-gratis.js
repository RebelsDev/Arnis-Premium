import Footer from "./shared/footer";
import NavBar from "./shared/navbar";
import styles from "../styles/LeadMagnet.module.scss";
import { useState ,useEffect} from "react";
import { useForm } from "react-hook-form";
import { ActiveCampaignInputs, handleActiveCampaignSubmit } from 'active-campaign-react';
import ModalLead from "./modalLead";
import * as fbq from '../lib/fpixel'

export default function LeadMagnet() {
    const [show, setShow] = useState(false)
    const { register,reset, handleSubmit } = useForm()
    const formId = '1'

    // useEffect(() => {
    //     // Client-side-only code
    //     fbq.event('ViewContent')
    // })

    const OnSubmit = async (res) => {
        console.log({ res });
        let data = {
            'firstname': res.firstname,
            'lastname': res.lastname,
            'field[1]': res.field,
            'email': res.email,
            'phone': res.phone,
        }
        console.log(data);

        handleActiveCampaignSubmit(data, 'arnispremium', formId)
        // router.push('api/getPDF')
        setShow(true)
        fbq.event('SubmitApplication')
        // useForm({ deepNest: { file: new File() } });
        reset()

    }
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <ModalLead
                onClose={() => setShow(false)}
                show={show}
                title={"¡Gracias por llenar nuestro formulario!"}
                text={"Dentro de los los próximos 5 minutos te llegará un correo con instrucciones para validar tu Delivery Gratis."
}
            />
            <main id={styles.lead}>
                <div className={styles.container}>
                    <div className={styles.info}>

                        <h1 id="mobile">
                            DEBES LLENAR
                            EL SIGUIENTE
                            FORMULARIO
                            PARA ACCEDER
                            A TU <span>DELIVERY
                                GRATUITO</span>
                        </h1>
                        <h1 id="desktop">
                            DEBES LLENAR <br/>
                            EL SIGUIENTE<br />
                            FORMULARIO<br />
                            PARA ACCEDER<br />
                            A TU <span>DELIVERY<br />
                                GRATUITO</span>
                        </h1>
                        <p>Te llegará un correo electrónico
                            con el código del delivery gratuito
                            que deberás usar para hacer tu pedido.</p>
                    </div>
                    <div className={styles.form}>
                        <form className={styles.form} onSubmit={handleSubmit(OnSubmit)}>
                            <ActiveCampaignInputs formId={formId} />

                            <label htmlFor="firstname">Nombre</label>
                            <input type="text" id="firstname" name="firstname" placeholder="Ingresa tu nombre" {...register('firstname', { required: true })} required />

                            <label>Apellidos</label>
                            <input type="text" id="lastname" name="lastname" placeholder="Ingresa tu apellido" {...register('lastname', { required: true })} required />

                            <label>Dirección</label>
                            <input type="text" id="field[1]" name="field[1]" placeholder="Ingresa tu dirección" {...register('field', { required: true })} required />

                            <label>Correo Electrónico</label>
                            <input name="email" type="email" id="email" placeholder="Ingresa tu correo" {...register('email', { required: true })} required />

                            <label>Teléfono</label>
                            <input name="phone" type="number" id="phone" placeholder="Ingresa tu teléfono" {...register('phone', { required: true })} required />
                            <button type="submit">Enviar</button>


                        </form>
                    </div>
                </div>
                <img src="/img/hero_footer_bg.webp" alt="Parrillada" />
            </main>
            <footer id={'stick_footer'}>
                <Footer />
            </footer>
        </div>
    )
}
