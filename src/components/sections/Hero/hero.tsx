"use client";

import Image from "next/image";
import styles from "./hero.module.scss";
// import "../../../styles/globals.scss";
import { useGSAPWithRef } from "@/hooks/useGSAP";

export function HeroSection() {
  // Ordem de animação:
  // Primeiro, botão, imagem(imageContainer) e titulo, header
  // Segundo, oferecendo soluções
  // Terceiro, lista

  const { ref } = useGSAPWithRef<HTMLElement>((gsap) => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl?.from([styles.title,".imagem",".ctaPrimary"], {
      opacity: 0,
      y: 60,
      duration: 1,
      lazy:false,
      ease: "expo.out",
    })
      .from(
        ".subtitle",
        { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      // .from(".hero-hint", { opacity: 0, x: -20, duration: 0.6 }, "-=0.4")
      // .from(".hero-tag", { opacity: 0, y: -10, duration: 0.5 }, "-=0.8")
      .from(
        ".solutionsList",
        { opacity: 0, x: 80, duration: 1.2, ease: "expo.out" },
        "-=1.2"
      );
  }, []);

  return (
    <section ref={ref} className={styles.hero} id="/">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Tamires Souza <br />
            Consultora de Marketing para Hospitais e Indústria Farmacêutica
          </h1>
          <p className={styles.subtitle}>
            Oferecendo soluções personalizadas como:
          </p>
          <ul className={styles.solutionsList}>
            <li>
              <Image
                src="/images/logos/radar.svg"
                alt="Icone de Radar"
                width={20}
                height={20}
                quality={100}
                className="imagem"
              />
              Definição de posicionamento
            </li>
            <li>
              <Image
                src="/images/logos/monitor_heart.svg"
                alt="Icone de diagnóstico"
                width={20}
                height={20}
                quality={100}
              />
              Diagnóstico de marketing
            </li>
            <li>
              <Image
                src="/images/logos/event.svg"
                alt="Icone de calendário"
                width={20}
                height={20}
                quality={100}
              />
              Planejamento de conteúdo, mentorias práticas para médicos,
              clínicas, hospitais e empresas de saúde
            </li>
            <li>
              <Image
                src="/images/logos/distance.svg"
                alt="Icone de localização"
                width={20}
                height={20}
                quality={100}
              />
              <span>
                Atendimento online e presencial no <strong>estado de SP</strong>
                <br />
                nas seguintes
                <strong>
                  {" "}
                  cidades: <br />
                  Bragança Paulista, Atibaia, Socorro, Campinas, Jundiaí, São
                  Paulo
                </strong>
              </span>
            </li>
          </ul>

          <button className={styles.ctaPrimary}>
            Entre em contato
            <Image
              src="/images/logos/whatsapp-branco.svg"
              alt="Icone de Whatsapp"
              width={20}
              height={20}
              quality={100}
            />
          </button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/perfil.jpeg"
            alt="Tamires Souza"
            width={500}
            height={600}
            priority
            quality={85}
          />
        </div>
      </div>
    </section>
  );
}
