import styles from "./process.module.scss";
import Image from "next/image";

const metodoList = [
  {
    titulo: "Diagnóstico de Precisão",
    iconName: "monitor_heart_branco",
    descricao:
      "Identificação profunda de ruídos, lacunas de clareza e desalinhamentos entre a diretoria e as equipes operacionais.",
  },
  {
    titulo: "Aplicação do Protocolo VITAL™",
    iconName: "checklist_azul",
    descricao:
      "Estruturação da visão e definição de diretrizes claras de comunicação e decisão para organizar a casa.",
  },
  {
    titulo: "⁠Clareza executiva",
    iconName: "backlight_high_branco",
    descricao:
      "Trabalho direto com o líder para traduzir a estratégia em mensagens coerentes com os objetivos do negócio.",
  },
  {
    titulo: "Sincronia de Áreas",
    iconName: "align_horizontal_center_azul",
    descricao:
      "Alinhamento entre diretoria, corpo clínico e recepção, garantindo que todos falem a mesma linguagem.",
  },
  {
    titulo: "Sustentação e Escala",
    iconName: "chess_king_branco",
    descricao:
      "Consolidação de uma operação autogerenciável, onde o marketing e a comunicação tornam-se ativos estratégicos de lucro.",
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
      <div key={numeroItem} className={styles.item}>
        <div className={styles.headerItem}>
          <span className={styles.numeroItem}>{numeroItem}</span>
          <Image
            src={`/images/logos/${iconName}.svg`}
            alt="Icone divisor de conteúdo"
            width={20}
            height={20}
            quality={100}
            className={styles.iconItem}
          />
          ⁠<h3 className={styles.tituloItem}>{titulo}</h3>
        </div>
        <p className={styles.descricaoItem}>{descricao}</p>
      </div>
    );
  };

  const formatacaoResultados = (iconName, descricao) => {
    return (
      <div key={iconName} className={styles.resultadoCard}>
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
    <section id="processo" className={styles.process}>
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
