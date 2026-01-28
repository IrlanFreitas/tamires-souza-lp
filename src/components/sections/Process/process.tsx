import React from "react";
import styles from "./process.module.scss";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2>Como faço isso</h2>
        <hr className={styles.linha} />
        <div className={styles.metodo}>
          <div className={styles.item}>
            <div className={styles.headerItem}>
              <span className={styles.numeroItem}>01</span>
              {/* <Image
                src="/images/logos/divisor.svg"
                alt="Icone divisor de conteúdo"
                width={10}
                height={10}
                quality={100}
                className={styles.divisor}
              /> */}
              ⁠<h3 className={styles.tituloItem}>Diagnóstico estratégico</h3>
            </div>
            <p className={styles.descricaoItem}>
              Inicio com um diagnóstico profundo para identificar ruídos,
              desalinhamentos e lacunas de clareza na comunicação entre
              liderança, áreas e equipes.
            </p>
            <hr className={styles.linhaItem} />
          </div>
          <div className={styles.item}>
            <div className={styles.tituloItem}>
              02 ICON Aplicação do Protocolo VITAL
            </div>
            <p className={styles.descricaoItem}>
              A partir do diagnóstico, aplico o Protocolo VITAL para estruturar
              a visão, organizar mensagens e definir diretrizes claras de
              comunicação e decisão.
            </p>

            <hr className={styles.linhaItem} />
          </div>
          <div className={styles.item}>
            <div className={styles.tituloItem}>03 ICON ⁠Clareza executiva</div>
            <p className={styles.descricaoItem}>
              Trabalho diretamente com líderes para traduzir estratégia em
              mensagens claras, compreensíveis e coerentes com os objetivos
              institucionais.
            </p>
            <hr className={styles.linhaItem} />
          </div>
          <div className={styles.item}>
            <div className={styles.tituloItem}>
              04 ICON ⁠Alinhamento entre áreas
            </div>
            <p className={styles.descricaoItem}>
              Conduzo o alinhamento entre diretoria, área médica, marketing e
              demais equipes, garantindo que todos comuniquem com a mesma
              linguagem e direção.
            </p>
            <hr className={styles.linhaItem} />
          </div>
          <div className={styles.item}>
            <div className={styles.tituloItem}>
              05 ICON Sustentação estratégica
            </div>
            <p className={styles.descricaoItem}>
              O resultado é uma comunicação institucional fortalecida, decisões
              mais seguras e o reposicionamento do marketing e da comunicação
              como ativos estratégicos da organização.
            </p>
            <hr className={styles.linhaItem} />
          </div>
        </div>
      </div>
      
      <div className={styles.container}>
        <h2>Resultados gerados</h2>
        <hr className={styles.linha} />
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="" alt="" />
            <p className={styles.descricaoCard}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
