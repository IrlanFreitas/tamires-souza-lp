import React from "react";
import styles from "./process.module.scss";
import Image from "next/image";

const metodoList = [
  {
    titulo: "Diagnóstico estratégico",
    iconName: "monitor_heart_branco",
    descricao:
      "Inicio com um diagnóstico profundo para identificar ruídos, desalinhamentos e lacunas de clareza na comunicação entre liderança, áreas e equipes.",
  },
  {
    titulo: "Aplicação do Protocolo VITAL",
    iconName: "checklist_branco",
    descricao:
      "A partir do diagnóstico, aplico o Protocolo VITAL para estruturar  a visão, organizar mensagens e definir diretrizes claras de comunicação e decisão.",
  },
  {
    titulo: "⁠Clareza executiva",
    iconName: "backlight_high_branco",
    descricao:
      "Trabalho diretamente com líderes para traduzir estratégia em mensagens claras, compreensíveis e coerentes com os objetivos institucionais.",
  },
  {
    titulo: "⁠Alinhamento entre áreas",
    iconName: "align_horizontal_center_branco",
    descricao:
      "Conduzo o alinhamento entre diretoria, área médica, marketing e demais equipes, garantindo que todos comuniquem com a mesma linguagem e direção.",
  },
  {
    titulo: "Sustentação estratégica",
    iconName: "chess_king_branco",
    descricao:
      "O resultado é uma comunicação institucional fortalecida, decisões mais seguras e o reposicionamento do marketing e da comunicação como ativos estratégicos da organização.",
  },
];

const resultados = [
  {
    iconName: "brightness_laranja",
    descricao: (
      <>
        <strong>Clareza estratégica</strong> para decisões de marketing e
        comunicação
      </>
    ),
  },
  {
    iconName: "align_horizontal_center_laranja",
    descricao: (
      <>
        <strong>Alinhamento entre liderança</strong>, área médica e equipes;
      </>
    ),
  },
  {
    iconName: "arrow_cool_down_laranja",
    descricao: (
      <>
        <strong>Redução</strong> de desperdícios e retrabalho;
      </>
    ),
  },
  {
    iconName: "conversation_laranja",
    descricao: (
      <>
        <strong>Comunicação</strong> institucional forte e coerente;
      </>
    ),
  },
  {
    iconName: "checklist_laranja",
    descricao: (
      <>
        <strong>Decisões</strong> do board mais seguras e previsíveis.
      </>
    ),
  },
];

const ProcessSection = () => {
  const formatacaoItem = (numeroItem, iconName, titulo, descricao) => {
    return (
      <div className={styles.item}>
        <div className={styles.headerItem}>
          <span className={styles.numeroItem}>{numeroItem}</span>
          <Image
            src={`/images/logos/${iconName}.svg`}
            alt="Icone divisor de conteúdo"
            width={20}
            height={20}
            quality={100}
          />
          ⁠<h3 className={styles.tituloItem}>{titulo}</h3>
        </div>
        <p className={styles.descricaoItem}>{descricao}</p>
        <hr className={styles.linhaItem} />
      </div>
    );
  };

  const formatacaoResultados = (iconName, descricao) => {
    return (
      <div className={styles.resultadoCard}>
        <Image
          src={`/images/logos/${iconName}.svg`}
          alt="Icone divisor de conteúdo"
          width={70}
          height={70}
          quality={100}
          className={styles.resultadoIcon}
        />

        <p className={styles.descricaoResultado}>{descricao}</p>
      </div>
    );
  };

  return (
    <section className={styles.process}>
      <div className={styles.containerMetodo}>
        <h2>Como faço isso</h2>
        <hr className={styles.linha} />
        <div className={styles.metodo}>
          {metodoList.map((item, index) =>
            formatacaoItem(
              `0${index + 1}`,
              item.iconName,
              item.titulo,
              item.descricao
            )
          )}
        </div>
      </div>

      <div className={styles.containerResultados}>
        <h2>Resultados gerados</h2>
        <hr className={styles.linha} />
        <div className={styles.resultados}>
          {resultados.map((item) =>
            formatacaoResultados(item.iconName, item.descricao)
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
