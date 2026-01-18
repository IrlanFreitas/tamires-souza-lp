"use client";

import styles from "./services.module.scss";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "seo",
    title: "SEO para Saúde",
    description:
      "Otimização completa do seu site para aparecer nos primeiros resultados do Google e atrair pacientes qualificados.",
    icon: "📊",
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "Gerenciamento de redes sociais com conteúdo estratégico que engaja seu público e constrói autoridade.",
    icon: "📱",
  },
  {
    id: "content",
    title: "Marketing de Conteúdo",
    description:
      "Conteúdo educativo que posiciona você como especialista e gera confiança com seus pacientes potenciais.",
    icon: "✍️",
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "Campanhas personalizadas para nurturar leads e aumentar a taxa de conversão em novos pacientes.",
    icon: "📧",
  },
  {
    id: "ads",
    title: "Google Ads & Meta Ads",
    description:
      "Publicidade paga estratégica para alcançar mais pacientes em tempo real com ROI comprovado.",
    icon: "🎯",
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Construa uma marca forte e memorável que diferencie você dos concorrentes no mercado de saúde.",
    icon: "⭐",
  },
];

export function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Serviços Especializados em Marketing de Saúde</h2>
          <p>
            Soluções completas para potencializar seu negócio e atrair mais
            pacientes
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
