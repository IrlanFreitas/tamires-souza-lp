import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoNome}>
            <Image
              src="/images/logos/LOGO-Tamires-Souza-Branco.svg"
              alt="Tamires Souza"
              width={25}
              height={25}
              priority
              quality={85}
            />
            <p className={styles.tamires}>Tamires Souza</p>
          </div>
          <p className={styles.consultora}>consultora especializada em</p>
          <p className={styles.healthcare}>healthcare marketing</p>
        </div>
        <div className={styles.copyright}>
          <Image
            src="/images/logos/copyright.svg"
            alt="Copyright logo"
            width={20}
            height={2}
          />
          <span>
            <p>
              2026 Tamires Souza
              <strong>
                {" "}
                Consultora de Marketing para Hospitais e Indústria
              </strong>
            </p>
            <p>Farmacêutica Todos os direitos reservados</p>
          </span>
        </div>
        <div className={styles.midias}>
          <Link href="https://www.linkedin.com/in/souza-tamires/">
            <Image
              src="/images/logos/linkedin-branco.svg"
              alt="Linkedin logo"
              width={25}
              height={25}
            />
          </Link>

          <Link href="https://api.whatsapp.com/send/?phone=%2B5511967846989&text=Quero+contratar+a+palestra%2Ftreinamento+para+minha+empresa.&type=phone_number&app_absent=0">
            <Image
              src="/images/logos/whatsapp-branco.svg"
              alt="WhatsApp logo"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className={styles.creators}>
        <a target="_blank" href="https://caioseolocal.vercel.app/">
          caioseolocal
        </a>{" "}
        +
        <a target="_blank" href="https://www.instagram.com/_hirlab/">
          hirlab
        </a>
      </div>
    </section>
  );
};

export default Footer;
