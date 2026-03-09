"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./testimonials.module.scss";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Denise Leite",
    role: "CEO, Clínica de Olhos",
    avatar: "DL",
    quote:
      "O trabalho de marketing foi conduzido com muito cuidado, profissionalismo e sensibilidade. Desde a consultoria do site até as redes sociais, fomos atendidos de forma acolhedora e estratégica, respeitando a identidade da nossa clínica de olhos. Foi um apoio essencial para fortalecer nossa comunicação e nossa presença digital.",
    rating: 5,
    company: "Clínica de Olhos",
  },
  {
    id: 2,
    name: "Anna Paula",
    role: "Product Lead, Hypera Pharma",
    avatar: "AP",
    quote:
      "Conheço a Tami há cerca de 5 anos, período em que trabalhamos juntas em projetos incríveis na Hypera Pharma. Em 2020, tivemos a oportunidade de reformular o blog de Buscopan, projeto que se tornou um verdadeiro case de sucesso dentro da companhia. Desde 2023, trabalhamos juntas com Buscopan, Neosaldina e Benegrip. Ao longo de todo esse tempo, a Tami sempre se destacou pelo alto nível de engajamento, visão estratégica e capacidade de execução. É uma profissional extremamente resolutiva, colaborativa e orientada a resultados, que assume desafios com protagonismo e entrega acima do esperado. Tenho total confiança em seu potencial e recomendo a Tami para projetos na área.",
    rating: 5,
    company: "Hypera Pharma",
  },
  {
    id: 3,
    name: "Giovanna Mutarelli De Molnary",
    role: "Gerente de Ativação de Marcas, Benegrip",
    avatar: "GM",
    quote:
      "Trabalhei com a Tamires em projetos para marcas OTC relevantes, como Benegrip, dentro de uma grande empresa farmacêutica. Seu trabalho se destacou pela visão estratégica, domínio técnico e excelente atendimento ao time de marketing, sempre com foco em resultados e presença no dia a dia. Tenho total confiança no seu trabalho, entregando estratégias digitais sólidas e eficientes.",
    rating: 5,
    company: "Benegrip",
  },
    {
    id: 4,
    name: "Julia Santos Moreira",
    role: "Gerente de Produtos, Buscopan",
    avatar: "JM",
    quote:
      "Trabalhar com a Tamires foi uma experiência extremamente positiva. Desde o início, ela demonstrou um entendimento muito claro do mercado farmacêutico, especialmente no projeto da Buscopan e das demais marcas do grupo. O atendimento dela sempre foi um grande diferencial: organizado, ágil, próximo e estratégico. Ela não apenas executa, mas realmente pensa junto, propõe soluções e constrói caminhos para fortalecer a presença digital da marca de forma consistente e alinhada aos objetivos do negócio.",
    rating: 5,
    company: "Buscopan",
  },
    {
    id: 3,
    name: "Caio Gomes",
    role: "Analista Senior, Hypera",
    avatar: "CG",
    quote:
      "Trabalhei com a Tamires em várias oportunidades durante a parceria com a Hypera. Começando por Benegrip, alcançamos resultados excelentes, batendo recordes de +1 milhão de acessos orgânicos na página. Isso reflete sua capacidade estratégica, foco em execução e orientação a resultados. Também atuamos juntos em outras marcas icônicas, como Nebacetin, Epocler e Neosaldina, onde aumentamos o trafégo do site e conversão dos produtos. É uma profissional em quem confio e que recomendo com segurança para projetos na área.",
    rating: 5,
    company: "Hypera",
  },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="currentColor"
    opacity="0.12"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

  const goTo = useCallback((index) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length);
      setVisible(true);
    }, 300);
  }, []);

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [autoplay, current, goTo]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2>Depoimentos de clientes</h2>
        <hr className={styles.linha} />

        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div
            className={`${styles.sliderCard} ${visible ? styles.fadeActive : styles.fadeEnter}`}
            role="region"
            aria-label={`Depoimento ${current + 1} de ${testimonials.length}`}
            aria-live="polite"
          >
            <div className={styles.cardAccent} />
            <div className={styles.cardBgQuote}>
              <QuoteIcon />
            </div>

            <div
              className={styles.cardStars}
            >
              {Array.from({ length: t.rating }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            <p className={styles.cardQuote}>"{t.quote}"</p>

            <div className={styles.cardDivider} />

            <div className={styles.cardAuthor}>
              <div className={styles.authorAvatar} aria-hidden="true">
                {t.avatar}
              </div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorRole}>{t.role}</div>
              </div>
            </div>
          </div>

          <div className={styles.sliderControls}>
            <div
              className={styles.sliderDots}
              role="tablist"
              aria-label="Navegação de depoimentos"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.active : ""}`}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ir para depoimento: ${i + 1}`}
                />
              ))}
            </div>

            <span className={styles.counter}>
              <span>{String(current + 1).padStart(2, "0")}</span> /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>

            <div className={styles.sliderButtons}>
              <button
                className={styles.navBtn}
                onClick={prev}
                aria-label="Depoimento anterior"
              >
                ←
              </button>
              <button
                className={styles.navBtn}
                onClick={next}
                aria-label="Proximo depoimento"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <a
          className={styles.botao}
          href="https://wa.me/+5511967846989?text=Estou%20com%20d%C3%BAvidas%20em%20qual%20servi%C3%A7o%20escolher%2C%20pode%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
          <Image
            src="/images/logos/whatsapp-branco.svg"
            alt="Icone de Whatsapp"
            width={20}
            height={20}
            quality={100}
          />
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
