"use client";

import Image from "next/image";
import styles from "./hero.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transforme sua presença digital em saúde
          </h1>
          <p className={styles.subtitle}>
            Estratégias de marketing personalizadas para profissionais e clínicas
            de saúde. Aumente seus pacientes, fortaleça sua marca e construa
            confiança online.
          </p>
          <div className={styles.cta}>
            <button className={styles.ctaPrimary}>Agende uma Consultoria</button>
            <button className={styles.ctaSecondary}>Saiba Mais</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/hero-image.jpg"
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
