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
              , com atuação junto a hospitais, clínicas, profissionais de saúde,
              indústria farmacêutica, healthtechs e startups.
            </p>
            <p className={styles.paragrafo}>
              Seu trabalho é focado em consultoria estratégica e mentorias, com
              <strong>
                ênfase em comunicação ética, posicionamento, branding e
                construção de autoridade no mercado da saúde.
              </strong>{" "}
              Atua desde o diagnóstico de marketing até a definição de
              posicionamento, planejamento de conteúdo e mentorias práticas,{" "}
              <strong>
                sempre com soluções personalizadas de acordo com o contexto
                regulatório e institucional de cada cliente.
              </strong>
            </p>
            <p className={styles.paragrafo}>
              O <strong>principal diferencial</strong> está na integração entre{" "}
              <strong>
                estratégia de marketing, ética médica e autoridade institucional
              </strong>
              , apoiando empresas e profissionais a se destacarem de forma
              responsável em buscadores, IA, redes sociais e canais
              digitais.{" "}
            </p>
            <p className={styles.paragrafo}>
              <strong>Atende de forma presencial e online</strong>, com foco na
              região de
              <strong>
                Bragança Paulista e cidades do interior de São Paulo
              </strong>
              , mediante agendamento prévio. Aceita diferentes formas de
              pagamento, incluindo Pix, cartões, boleto e crédito recorrente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default presentations;
