"use client";

import Image from "next/image";
import styles from "./services.module.scss";
import { useState } from "react";

interface ContentCard {
  src: string;
  descricao: string;
  list: string[];
  cta: string;
}

interface TabCard {
  tab: string;
  content: ContentCard;
}

const contentTabs: TabCard[] = [
  {
    tab: "tab1",
    content: {
      src: "/images/testimonials/tamires-01.png",
      descricao:
        "Capacitação estratégica para médicos, líderes e equipes de saúde. Conteúdo prático para mudar cultura, liderança e resultados.",
      list: [
        "Palestras para eventos e instituições",
        "Treinamentos in company para clínicas ou hospitais",
        "Time de frente: vendas e conversão",
        "Formação de líderes e gestores",
        "Cultura de autonomia e gestão estratégica",
      ],
      cta: "Quero contratar esse conteúdo",
    },
  },
  {
    tab: "tab2",
    content: {
      src: "/images/testimonials/tamires-02.png",
      descricao:
        "Intervenção pontual para destravar gargalos operacionais e organizar o crescimento da clínica ou hospital. Foco em decisões claras, geração de caixa e execução acompanhada.",
      list: [
        "Diagnóstico operacional e comercial",
        "Definição de prioridades estratégicas",
        "Reuniões de alinhamento",
        "Plano de ação executável",
        "Acompanhamento das melhorias",
      ],
      cta: "Quero organizar o crescimento",
    },
  },
  {
    tab: "tab3",
    content: {
      src: "/images/testimonials/tamires-03.png",
      descricao:
        "Acompanhamento premium para transformar a clínica em um negócio autogerenciável. Une estratégia, treinamento da equipe e implementação do Protocolo VITAL.",
      list: [
        "Diagnóstico completo e plano estratégico",
        "Treinamento direto do time",
        "Rituais de gestão e indicadores",
        "Implementação dos 15 Minutos Estratégicos",
        "Suporte contínuo à tomada de decisão",
      ],
      cta: "Quero ser mentorado",
    },
  },
  {
    tab: "tab4",
    content: {
      src: "/images/testimonials/tamires-04.png",
      descricao:
        "Diagnóstico prático para identificar onde sua clínica ou hospital perde faturamento e eficiência no atendimento. Analisa a jornada real do paciente e entrega dados acionáveis para correção imediata.",
      list: [
        "Auditoria da recepção e agendamento",
        "Scorecard de atendimento",
        "⁠Diagnóstico de erros e objeções",
        "Recomendações objetivas de melhoria",
      ],
      cta: "Quero identificar os vazamentos",
    },
  },
];

const contentCard = ({ src, descricao, list, cta }: ContentCard) => {
  return (
    <>
      <Image
        src={src}
        alt="Icone de Whatsapp"
        width={100}
        height={100}
        quality={100}
        className={styles.imagem}
      />
      <p>{descricao}</p>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        {cta}
      </a>
    </>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.titulo}>Serviços</h3>
          <hr className={styles.linha} />
        </div>
        <div className={styles.body}>
          <div className={styles.tabs}>
            <ul className={styles.nav}>
              <li
                className={activeTab === "tab1" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab1")}
              >
                Palestras & Treinamentos
              </li>
              <li
                className={activeTab === "tab2" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab2")}
              >
                Consultoria Estratégica
              </li>
              <li
                className={activeTab === "tab3" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab3")}
              >
                Mentorial Vital
              </li>
              <li
                className={activeTab === "tab4" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab4")}
              >
                Kit do Paciente Oculto
              </li>
            </ul>
            <div className={styles.outlet}>
              {contentTabs.map((tabs) => {
                return (
                  tabs.tab === activeTab && contentCard({ ...tabs.content })
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
