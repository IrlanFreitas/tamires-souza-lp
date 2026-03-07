import React from "react";
import styles from "./problems.module.scss";
import Image from "next/image";

const ProblemsSection = () => {
  return (
    <section className={styles.problems}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          Por que a sua clínica ainda não é <strong>Autogerenciável</strong>?
        </h2>
        <hr className={styles.linha} />
        <div className={styles.content}>
          <div>
            <div className={styles.sessao}>
              <span className={styles.tituloSessao}>
                <Image
                  src="/images/logos/monitor_heart_colored.svg"
                  alt="Icone de Diagnóstico"
                  width={30}
                  height={30}
                  quality={100}
                />
                <h3>Diagnóstico do Caos Operacional</h3>
              </span>
              <ul className={styles.problemsList}>
                <li>
                  <Image
                    src="/images/logos/frag_management.svg"
                    alt="Icone de problemas de gestão"
                    width={30}
                    height={30}
                    quality={100}
                  />
                  <span>
                    <strong>Gestão Fragmentada:</strong> Sem um diagnóstico
                    estruturado, a clínica opera por suposições, gerando
                    decisões desconectadas e ruídos de comunicação entre as
                    áreas.
                  </span>
                </li>
                <li>
                  <Image
                    src="/images/logos/no_direction.svg"
                    alt="Icone de problemas de direcionamento"
                    width={30}
                    height={30}
                    quality={100}
                  />
                  <span>
                    <strong>Execução sem Direção:</strong> Excesso de tarefas
                    manuais e falta de liderança estratégica, resultando em uma
                    equipe que "apaga fogos" em vez de perseguir metas.
                  </span>
                </li>
                <li>
                  <Image
                    src="/images/logos/dependence.svg"
                    alt="Icone de problemas de dependência"
                    width={30}
                    height={30}
                    quality={100}
                  />
                  <span>
                    <strong>Dependência do Médico:</strong> A ausência de
                    processos centralizados faz com que a operação pare sempre
                    que o médico se ausenta.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <Image
            src="/images/logos/divisor.svg"
            alt="Icone divisor de conteúdo"
            width={10}
            height={10}
            quality={100}
            className={styles.divisor}
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
              <h3>Principais Sintomas</h3>
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

        <a
          className={styles.cta}
          href="https://wa.me/+5511967846989?text=Quero%20contratar%20um%20servico"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desejo fazer o Raio-X da minha operação agora
        </a>
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
