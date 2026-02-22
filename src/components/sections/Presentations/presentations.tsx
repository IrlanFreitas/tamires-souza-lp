import React from "react";
import styles from "./presentations.module.scss";
import Image from "next/image";

const presentations = () => {
  return (
    <section className={styles.presentations}>
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
              Tamires Souza é{" "}
              <strong>
                {" "}
                consultora de marketing especializada no setor da saúde
              </strong>
              , atendendo hospitais, clínicas, profissionais, indústria
              farmacêutica e healthtechs.
            </p>
            <p className={styles.paragrafo}>
              Atua com{" "}
              <strong>
                {" "}
                consultoria estratégica e mentorias focadas em comunicação
                ética, posicionamento, branding e construção de autoridade.
              </strong>{" "}
              Desenvolve soluções personalizadas que vão do diagnóstico de
              marketing ao planejamento de conteúdo, sempre alinhadas às
              exigências regulatórias e institucionais de cada cliente.
            </p>
            <p className={styles.paragrafo}>
              Seu diferencial está na{" "}
              <strong>
                integração entre estratégia de marketing, ética médica e
                autoridade institucional
              </strong>
              , ajudando empresas e profissionais a se destacarem de forma
              responsável em buscadores, IA e canais digitais.
            </p>
            <p className={styles.paragrafo}>
              Realiza atendimentos <strong>presenciais</strong> e{" "}
              <strong>online</strong>, com foco em{" "}
              <strong>Bragança Paulista e interior de São Paulo,</strong>{" "}
              mediante agendamento. Aceita Pix, cartões, boleto e crédito
              recorrente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default presentations;
