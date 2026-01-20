import Image from "next/image";
import styles from "./hero.module.scss";
import WhatsApp from "../../../public/images/logos/whatsapp.svg";
import '../../styles/globals.scss'; 

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`animeLeft ${styles.content}`}>
          <h1 className={styles.title}>
            Tamires Souza - Consultora de Marketing para Hospitais e Indústria
            Farmacêutica
          </h1>
          <p className={styles.subtitle}>
            Oferecendo soluções personalizadas como:
          </p>
          <ul className={styles.solutionsList}>
            <li>Definição de posicionamento</li>
            <li>Diagnóstico de marketing</li>
            <li>
              Planejamento de conteúdo, mentorias práticas para médicos,
              clínicas, hospitais e empresas de saúde
            </li>
            <li>
              Atendimento online e presencial no estado de SP nas seguintes
              cidades: Bragança Paulista, Atibaia, Socorro, Campinas, Jundiaí,
              Amparo
            </li>
          </ul>

          <button className={styles.ctaPrimary}>
            Entre em contato
            {/* <Image
              src="/images/logos/whatsapp.svg"
              alt="Icone WhatsApp"
              className={styles.iconeWhatsapp}
              width={30}
              height={30}
              color="white"
              priority
              quality={85}
            /> */}
            <WhatsApp fill="white" className={styles.iconeWhatsapp} />
          </button>
        </div>

        <div className={`animeRight ${styles.imageContainer}`}>
          <Image
            src="/images/perfil.jpeg"
            alt="Tamires Souza"
            width={500}
            height={600}
            priority
            quality={85}
          />
        </div>
      </div>
    </section>
  );
}
