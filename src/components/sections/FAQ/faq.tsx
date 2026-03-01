"use client";
import { useState } from "react";
import styles from "./faq.module.scss";

const items = [
  {
    title: "ESTE trabalho VAI substituir minha agência de marketing?",
    content:
      "Definitivamente não. Eu entro onde as agências param: na conversão interna. Eu garanto que o investimento que você já faz não seja desperdiçado por falta de processos na sua recepção ou falhas na sua liderança.",
  },
  {
    title: "Eu realmente vou conseguir sair do operacional?",
    content:
      "Esse é o meu foco principal. O Protocolo VITAL cria rituais de gestão curtos e eficientes. Meu objetivo é que você recupere o controle da sua agenda para focar na medicina ou na vida pessoal, enquanto os processos cuidam do dia a dia.",
  },
  {
    title: "Como os 5 passos do Protocolo VITAL funcionam?",
    content:
      "Faço a auditoria da sua operação, detecto os gargalos e instalo ferramentas de controle. Você deixa de gerir por 'sentimento' e passa a governar sua clínica através de indicadores claros e uma equipe treinada para converter pacientes de alto ticket.",
  },
  {
    title:
      "Que tipo de trabalho é esse: consultoria, mentoria ou comunicação institucional?",
    content:
      "É um processo estratégico de diagnóstico, clareza e alinhamento da comunicação, conduzido diretamente com líderes e gestores. Atuo como consultora e mentora para estruturar a forma como a instituição comunica decisões, posicionamento e prioridades, garantindo coerência entre liderança, áreas e equipes.",
  },
  {
    title: "⁠O que significa “comunicação sem ruído” na prática?",
    content:
      "Comunicação sem ruído é quando todas as áreas falam a mesma língua, com clareza de objetivos, mensagens e responsabilidades. Na prática, isso reduz retrabalho, conflitos internos, desalinhamento entre marketing, comercial, área médica e diretoria, e aumenta a eficiência das decisões.",
  },
  {
    title: "Como o Protocolo VITAL ajuda no alinhamento entre áreas e equipes?",
    content:
      "O Protocolo VITAL é um método proprietário criado para organizar a comunicação estratégica da liderança. Ele atua em cinco dimensões: visão, inteligência de contexto, transmissão da mensagem, autoridade e liderança. Com isso, líderes passam a comunicar com clareza, as áreas se alinham e as decisões fluem sem ruído.",
  },
  {
    title:
      "Esse trabalho envolve marketing digital, campanhas ou produção de conteúdo?",
    content: `Não.
      O foco está antes da execução.
      Meu trabalho é garantir que a liderança tenha clareza estratégica, discurso unificado e alinhamento institucional.
      Quando isso existe, qualquer ação de marketing ou comunicação passa a funcionar melhor com menos esforço e menos desperdício.`,
  },
  {
    title: "Para que tipo de instituição esse trabalho é indicado?",
    content: `Para hospitais, clínicas e indústrias farmacêuticas que já possuem estrutura, equipes e investimentos em comunicação, mas enfrentam desafios como:
    mensagens desencontradas entre áreas
    dificuldade de alinhamento entre liderança e times
    ruído na comunicação institucional
    decisões de marketing sem clareza estratégica
    Esse trabalho é indicado para quem entende que comunicação é uma ferramenta de liderança e governança, não apenas divulgação.`,
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <span className={styles.header}>
          <h2 className={styles.titulo}>Perguntas frequentes</h2>
          <hr className={styles.linha} />
        </span>

        <div className={styles.perguntas}>
          {items.map((item, index) => (
            <div key={index} className={styles.pergunta}>
              <button
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: openIndex === index ? "#D8D6D6": "#f0f0f0" ,
                  color: openIndex === index ? "#212D4F" : "#013E7F",
                }}
                className={styles.resposta}
              >
                <span>{item.title}</span>
                <span
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: "20px",
                  }}
                >
                  ▼
                </span>
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? "100%" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  backgroundColor: "#fafafa",
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
