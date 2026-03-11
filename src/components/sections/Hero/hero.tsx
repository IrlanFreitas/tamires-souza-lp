import Image from "next/image";
import styles from "./hero.module.scss";
import "../../../styles/globals.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero} id="/">
      <div className={styles.container}>
        <div className={`animeLeft ${styles.content}`}>
          <span className={styles.text}>
            <h1 className={styles.title}>
              Tamires Souza <br />
              Consultora de Marketing para clínicas e Criadora do Protocolo
              VITAL™
            </h1>
            <p className={styles.subtitle}>
              Especialista em transformar clínicas caóticas em operações
              autogerenciáveis, devolvendo a liberdade ao médico através da
              gestão de elite.
              <br />
              Oferecendo soluções personalizadas como:
            </p>
            <ul className={styles.solutionsList}>
              <li>
                <Image
                  src="/images/logos/brain.svg"
                  alt="Icone de cérebro"
                  width={20}
                  height={20}
                  quality={100}
                />
                <span>
                  <strong>Implementação do Cérebro Digital: </strong>
                  Centralização total da operação para o fim da "gestão por
                  WhatsApp".
                </span>
              </li>
              <li>
                <Image
                  src="/images/logos/armor.svg"
                  alt="Icone de proteção"
                  width={20}
                  height={20}
                  quality={100}
                />
                <span>
                  <strong>Blindagem de Processos e Sucessão:</strong> Criação do
                  manual "A Clínica Sem Mim" para que o conhecimento pertença ao
                  negócio, não às pessoas.
                </span>
              </li>
              <li>
                <Image
                  src="/images/logos/history.svg"
                  alt="Icone de tempo"
                  width={20}
                  height={20}
                  quality={100}
                />
                <span>
                  <strong>Governança de 15 Minutos:</strong> Implementação de
                  rituais ágeis para que você gerencie a equipe sem sair do
                  estratégico.
                </span>
              </li>
              <li>
                <Image
                  src="/images/logos/conversion.svg"
                  alt="Icone de conversão"
                  width={20}
                  height={20}
                  quality={100}
                />
                <span>
                  <strong>Máquina de Conversão Comercial:</strong> Treinamento
                  de recepção com Matriz de Objeções para transformar curiosos
                  em pacientes agendados.
                </span>
              </li>
              <li>
                <Image
                  src="/images/logos/distance.svg"
                  alt="Icone de localização"
                  width={20}
                  height={20}
                  quality={100}
                />
                <span>
                  Atendimento online e presencial, consulte a região.{" "}
                </span>
              </li>
            </ul>

            <a
              className={styles.ctaPrimary}
              target="_blank"
              href="https://wa.me/+5511967846989?text=Estou%20com%20d%C3%BAvidas%20em%20qual%20servi%C3%A7o%20escolher%2C%20pode%20me%20ajudar?"
            >
              Quero diagnosticar minha clínica
            </a>
          </span>
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
};

export default HeroSection;
