import Image from "next/image";
import React from "react";
import styles from "./testimonials.module.scss";

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>Depoimentos de clientes</h2>
        <hr className={styles.linha} />
        <div className={styles.card}>
          <Image
            src="/images/testimonials/dra-denise-leite.jpeg"
            alt="Foto da Dra Denise Leite"
            quality={100}
            width={100}
            height={100}
            className={styles.imagem}
          />
          <p>
            “O trabalho de marketing foi conduzido com muito cuidado,
            profissionalismo e sensibilidade. Desde a consultoria do site até as
            redes sociais, fomos atendidos de forma acolhedora e estratégica,
            respeitando a identidade da nossa clínica de olhos. Foi um apoio
            essencial para fortalecer nossa comunicação e nossa presença
            digital.”
          </p>
          <h3>Dra. Denise Leite – Clínica de Olhos</h3>
        </div>
        <button className={styles.botao}>
          Saiba mais
          <Image
            src="/images/logos/whatsapp-branco.svg"
            alt="Icone de Whatsapp"
            width={20}
            height={20}
            quality={100}
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
