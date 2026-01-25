import React from "react";
import styles from "./problems.module.scss";
import Image from "next/image";

const ProblemsSection = () => {
  return (
    <section className={styles.problems}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          Por que muitas instituições da saúde <br />
          <strong> não conseguem bons resultados</strong> em <br />
          marketing?
        </h2>
        <hr className={styles.linha} />
        <div className={styles.content}>
          <div>
            <div className={styles.sessao}>
              <span className={styles.tituloSessao}>
                <Image
                  src="/images/logos/text_snippet.svg"
                  alt="Icone de Whatsapp"
                  width={30}
                  height={30}
                  quality={100}
                />
                <h3>Em resumo</h3>
              </span>
              <p>
                Porque operam sem um diagnóstico estruturado. Em vez de decisões
                guiadas por clareza estratégica, o marketing é conduzido por
                suposições, interpretações isoladas e percepções fragmentadas
                entre áreas.
              </p>
            </div>
            <div className={styles.sessao}>
              <span className={styles.tituloSessao}>
                <Image
                  src="/images/logos/monitor_heart_colored.svg"
                  alt="Icone de Diagnóstico"
                  width={30}
                  height={30}
                  quality={100}
                />
                <h3>Diagnóstico</h3>
              </span>
              <p>
                Na ausência de um diagnóstico estruturado, as organizações
                passam a operar com suposições, interpretações individuais e
                percepções fragmentadas entre áreas. Cada time entende a
                estratégia de uma forma diferente, o que gera desalinhamento,
                ruído na comunicação e decisões desconectadas dos objetivos
                institucionais.
              </p>
              <p>
                ⁠A ausência de direção clara faz com que exista muita execução,
                mas pouca coerência. O problema não é a falta de ação, é o
                excesso de ação sem alinhamento e sem liderança na comunicação.
              </p>
            </div>
          </div>
          <Image
            src="/images/logos/divisor.svg"
            alt="Icone divisor de conteúdo"
            width={10}
            height={10}
            quality={100}
          />
          <div className={styles.sessaoDireita}>
            <span className={styles.tituloSessao}>
              <Image
                src="/images/logos/report.svg"
                alt="Icone de Problemas"
                width={30}
                height={30}
                quality={100}
              />
              <h3>Principais problemas</h3>
            </span>

            <ul className={styles.problemsList}>
              <li>
                <Image
                  src="/images/logos/close_red.svg"
                  alt="Icone de Problemas"
                  width={30}
                  height={30}
                  quality={100}
                />
                Cada área entende a estratégia de forma diferente
              </li>
              <li>
                <Image
                  src="/images/logos/close_red.svg"
                  alt="Icone de Problemas"
                  width={30}
                  height={30}
                  quality={100}
                />
                O marketing executa sem clareza de objetivos institucionais
              </li>
              <li>
                <Image
                  src="/images/logos/close_red.svg"
                  alt="Icone de Problemas"
                  width={30}
                  height={30}
                  quality={100}
                />
                As áreas se contradizem e geram ruído na comunicação
              </li>
              <li>
                {" "}
                <Image
                  src="/images/logos/close_red.svg"
                  alt="Icone de Problemas"
                  width={30}
                  height={30}
                  quality={100}
                />
                Decisões são tomadas de forma desconectada do todo
              </li>
              <li>
                <Image
                  src="/images/logos/close_red.svg"
                  alt="Icone de Problemas"
                  width={30}
                  height={30}
                  quality={100}
                />
                Os resultados se tornam inconsistentes e difíceis de sustentar
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rodape}>
          Sem clareza, o marketing executa. <br />
          Sem alinhamento, as áreas se contradizem. <br />E sem liderança na
          comunicação, o resultado nunca é consistente.
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
