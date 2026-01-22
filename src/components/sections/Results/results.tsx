import React from "react";
import styles from "./results.module.scss";
import Image from "next/image";

const ResultsSection = () => {
  return (
    <section className={styles.results} id="resultados">
      <div className={styles.container}>
        <h2>Gerei resultados para as seguintes empresas</h2>
        <div className={styles.empresas}>
          <Image
            src="/images/empresas/hyperpharma-logo.png"
            alt="Icone de Whatsapp"
            width={100}
            height={100}
            quality={100}
          />
          <Image
            src="/images/empresas/neosaldina-logo.png"
            alt="Icone de Whatsapp"
            width={100}
            height={100}
            quality={100}
          />
          <Image
            src="/images/empresas/buscopan-logo.png"
            alt="Icone de Whatsapp"
            width={100}
            height={100}
            quality={100}
          />
          <Image
            src="/images/empresas/mantercorp-logo.png"
            alt="Icone de Whatsapp"
            width={100}
            height={100}
            quality={100}
          />
          <Image
            src="/images/empresas/benegrip-logo.png"
            alt="Icone de Whatsapp"
            width={100}
            height={100}
            quality={100}
          />
          <Image
            src="/images/empresas/tamarine-logo.png"
            alt="Icone de Whatsapp"
            width={100}
            height={100}
            quality={100}
          />
        </div>
        <hr className={styles.linha} />
        <div className={styles.numeros}>
          <div className={styles.indicador}>
            <span className={styles.numero}>4</span> hospitais
          </div>
          <div className={styles.indicador}>
            <span className={styles.numero}>
              10
              <Image
                src="/images/logos/plus-solid-orange.svg"
                alt="Icone de Whatsapp"
                width={40}
                height={40}
                quality={100}
              />
            </span>
            clínicas
          </div>
          <div className={styles.indicador}>
            <span className={styles.numero}>10</span>
            farmacêutica
          </div>
          <div className={styles.indicador}>
            <span className={styles.numero}>
              100
              <Image
                src="/images/logos/plus-solid-orange.svg"
                alt="Icone de Whatsapp"
                width={40}
                height={40}
                quality={100}
              />
            </span>
            profissionais de saúde
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
