import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
          <span className={styles.copyrightText}>
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
                  Consultora de Marketing para clínicas e Criadora do Protocolo VITAL™️
                </strong>
              </p>
              <p>Farmacêutica Todos os direitos reservados</p>
            </span>
          </span>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6517889856714!2d-46.5286426237418!3d-22.963047739885944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec9c354797977%3A0x2061878d5666a9a2!2sR.%20Mauro%20de%20Pr%C3%B3spero%2C%20500%20-%20Jardim%20Santa%20Rita%20de%20Cassia%2C%20Bragan%C3%A7a%20Paulista%20-%20SP%2C%2012913-045!5e0!3m2!1spt-BR!2sbr!4v1772058008555!5m2!1spt-BR!2sbr"
            className={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.midias}>
          <Link href="https://www.instagram.com/soutamis" target="_blank">
            <Image
              src="/images/logos/instagram-branco.svg"
              alt="Instagram logo"
              width={25}
              height={25}
              priority
              quality={100}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/souza-tamires/" target="_blank">
            <Image
              src="/images/logos/linkedin-branco.svg"
              alt="Linkedin logo"
              width={25}
              height={25}
            />
          </Link>

          <Link
            href="https://wa.me/+5511967846989?text=Estou%20com%20d%C3%BAvidas%20em%20qual%20servi%C3%A7o%20escolher%2C%20pode%20me%20ajudar?"
            target="_blank"
          >
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
    </footer>
  );
};

export default Footer;
