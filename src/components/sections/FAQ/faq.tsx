"use client";
import { useState } from "react";
import styles from "./faq.module.scss";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";

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
      "React é uma biblioteca JavaScript para construir interfaces de usuário. Foi desenvolvida pelo Facebook e permite criar componentes reutilizáveis.",
  },
  {
    title: "⁠O que significa “comunicação sem ruído” na prática?",
    content:
      "O useState é um Hook que permite adicionar estado a componentes funcionais. Ele retorna um par: o valor atual do estado e uma função para atualizá-lo.",
  },
  {
    title: "Como o Protocolo VITAL ajuda no alinhamento entre áreas e equipes?",
    content:
      "Componentes permitem dividir a UI em partes independentes e reutilizáveis. Isso torna o código mais organizado, fácil de manter e testar.",
  },
  {
    title:
      "Esse trabalho envolve marketing digital, campanhas ou produção de conteúdo?",
    content:
      "Componentes permitem dividir a UI em partes independentes e reutilizáveis. Isso torna o código mais organizado, fácil de manter e testar.",
  },
  {
    title: "Para que tipo de instituição esse trabalho é indicado?",
    content:
      "Componentes permitem dividir a UI em partes independentes e reutilizáveis. Isso torna o código mais organizado, fácil de manter e testar.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <span className={styles.header}>
          <h2 className={styles.titulo}>Perguntas frequentes</h2>
          <hr className={styles.linha} />
          <h3>Consultoria & Mentoria VITAL</h3>
        </span>

        <div className={styles.perguntas}>
          {items.map((item, index) => (
            <div key={index} className={styles.pergunta}>
              <button
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: openIndex === index ? "#f0f0f0" : "#D8D6D6",
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
                  maxHeight: openIndex === index ? "200px" : "0",
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
