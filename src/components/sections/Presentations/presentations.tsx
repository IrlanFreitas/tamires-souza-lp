import React from "react";
import styles from "./presentations.module.scss";
import Image from "next/image";

const presentations = () => {
  return (
    <section id="apresentacao" className={styles.presentations}>
      <div className={styles.container}>
        <div className={styles.imagens}>
          <Image
            src="/images/testimonials/tamires-01.png"
            alt="Icone divisor de conteúdo"
            width={300}
            height={300}
            quality={100}
            className={styles.imagem}
          />
          <Image
            src="/images/testimonials/tamires-02.png"
            alt="Icone divisor de conteúdo"
            width={300}
            height={300}
            quality={100}
            className={styles.imagem}
          />
          <Image
            src="/images/testimonials/tamires-03.png"
            alt="Icone divisor de conteúdo"
            width={300}
            height={300}
            quality={100}
            className={styles.imagem}
          />
          <Image
            src="/images/testimonials/tamires-04.png"
            alt="Icone divisor de conteúdo"
            width={300}
            height={300}
            quality={100}
            className={styles.imagem}
          />
        </div>
        <div className={styles.textos}>
          <h2 className={styles.titulo}>Quem é Tamires Souza?</h2>
          <hr className={styles.linha} />
          <div>
            <p className={styles.paragrafo}>
              Publicitária, especialista em marketing e estrategista, Tamires
              Souza é a criadora do <strong>Protocolo VITAL™</strong> ,
              metodologia desenvolvida para transformar a complexidade da gestão
              em operações autogerenciáveis e lucrativas. Com sólida experiência
              no setor da saúde, atua junto a hospitais, clínicas de alto
              padrão, healthtechs e gigantes da indústria farmacêutica.
            </p>
            <p className={styles.paragrafo}>
              Sua especialidade é a construção de soberania digital e
              operacional. Através de consultorias estratégicas e mentorias de
              elite, Tamires integra comunicação ética, branding de luxo e o {" "}
              <strong>Cérebro Digital</strong> para libertar o médico do caos operacional. Suas
              soluções são desenhadas sob medida para quem busca não apenas
              presença digital, mas o domínio de sua categoria através da
              integração entre autoridade institucional e inteligência
              artificial.
            </p>
            <p className={styles.paragrafo}>
              Com base em Bragança Paulista e atendendo a grandes polos de São
              Paulo, Tamires Souza é a escolha de líderes que não aceitam nada
              menos que a excelência técnica e a segurança de uma governança
              blindada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default presentations;
