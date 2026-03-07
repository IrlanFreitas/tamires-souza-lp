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
      src: "/images/services/tamires-posando.png",
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
      src: "/images/services/reuniao-com-clientes.png",
      descricao:
        "Intervenção pontual para destravar gargalos operacionais e organizar o crescimento da clínica ou hospital. Foco em decisões claras, geração de caixa e execução acompanhada.",
      list: [
        "Diagnóstico operacional e comercial",
        "Blindagem Operacional",
        "Cérebro Digital da Clínica",
        "Governança & Sucessão",
        "Rituais de Celebração",
      ],
      cta: "Quero organizar o crescimento",
    },
  },
  {
    tab: "tab3",
    content: {
      src: "/images/services/protocolo_vital.png",
      descricao:
        "Acompanhamento premium para transformar a clínica em um negócio autogerenciável. Une estratégia, treinamento da equipe e implementação do Protocolo VITAL.",
      list: [
        "Diagnóstico completo e plano estratégico",
        "Treinamento direto do time",
        "Rituais de gestão e indicadores",
        "Implementação dos 15 Minutos Estratégicos",
        "Acelerador Comercial",
      ],
      cta: "Quero ser mentorado",
    },
  },
  {
    tab: "tab4",
    content: {
      src: "/images/services/kit-paciente-oculto.png",
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
    <span key={descricao} className={styles.content}>
      <Image
        src={src}
        alt="Imagem que é referência ao serviço prestado"
        width={100}
        height={100}
        quality={100}
        className={`animeLeft ${styles.imagem}`}
      />
      <p className={`animeRight ${styles.descricao}`}>{descricao}</p>
      <ul className={`animeRight ${styles.bulletList}`}>
        {list.map((item) => (
          <li className={styles.item} key={item}>
            <Image
              src="/images/logos/check_small.svg"
              alt="Icone de Check"
              width={20}
              height={20}
              quality={100}
            />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <a
        className={`animeRight ${styles.cta}`}
        href="https://wa.me/+5511967846989?text=Quero%20contratar%20um%20servico"
        target="_blank"
        rel="noopener noreferrer"
      >
        {cta}
      </a>
    </span>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section id="servicos" className={styles.services}>
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
                <Image
                  src="/images/logos/quickreply.svg"
                  alt="Icone de Palestras & Treinamentos"
                  width={25}
                  height={25}
                  quality={100}
                />{" "}
                <p>Palestras & Treinamentos</p>
              </li>
              <li
                className={activeTab === "tab2" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab2")}
              >
                <Image
                  src="/images/logos/outpatient.svg"
                  alt="Icone de Consultoria Estratégica"
                  width={25}
                  height={25}
                  quality={100}
                />{" "}
                <p>Consultoria Estratégica</p>
              </li>
              <li
                className={activeTab === "tab3" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab3")}
              >
                <Image
                  src="/images/logos/self_improvement.svg"
                  alt="Icone de Mentoria Vital"
                  width={25}
                  height={25}
                  quality={100}
                />{" "}
                <p>Mentoria Vital</p>
              </li>
              <li
                className={activeTab === "tab4" ? `${styles.active}` : ""}
                onClick={() => setActiveTab("tab4")}
              >
                <Image
                  src="/images/logos/build.svg"
                  alt="Icone de Kit do Paciente Oculto"
                  width={25}
                  height={25}
                  quality={100}
                />{" "}
                <p>Kit do Paciente Oculto</p>
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
