import React from "react";
import styles from "./results.module.scss";
import Image from "next/image";

const companies = [
  { name: "Hyperpharma", src: "/images/empresas/hyperpharma-logo.png" },
  { name: "Neosaldina", src: "/images/empresas/neosaldina-logo.png" },
  { name: "Buscopan", src: "/images/empresas/buscopan-logo.png" },
  { name: "Mantercorp", src: "/images/empresas/mantercorp-logo.png" },
  { name: "Benegrip", src: "/images/empresas/benegrip-logo.png" },
  { name: "Tamarine", src: "/images/empresas/tamarine-logo.png" },
];
const allCards = [...companies, ...companies];

const ResultsSection = () => {
  const row1 = allCards;
  // Row 2: offset the starting point for variety
  const row2 = [
    ...companies.slice(6),
    ...companies.slice(0, 6),
    ...companies.slice(6),
    ...companies.slice(0, 6),
  ];

  return (
    <>
      <section className={styles.results} id="resultados">
        <div className={styles.container}>
          <h2>Gerei resultados para as seguintes empresas</h2>
          <hr className={styles.linha} />

          {/* <div className={styles.empresas}>
            <Image
              src="/images/empresas/hyperpharma-logo.png"
              alt="Icone de Whatsapp"
              width={100}
              height={100}
              quality={100}
            />
            <Image
              src="/images/empresas/neosaldina-logo.png"
              alt="Icone de Whatsapp"
              width={100}
              height={100}
              quality={100}
            />
            <Image
              src="/images/empresas/buscopan-logo.png"
              alt="Icone de Whatsapp"
              width={100}
              height={100}
              quality={100}
            />
            <Image
              src="/images/empresas/mantercorp-logo.png"
              alt="Icone de Whatsapp"
              width={100}
              height={100}
              quality={100}
            />
            <Image
              src="/images/empresas/benegrip-logo.png"
              alt="Icone de Whatsapp"
              width={100}
              height={100}
              quality={100}
            />
            <Image
              src="/images/empresas/tamarine-logo.png"
              alt="Icone de Whatsapp"
              width={100}
              height={100}
              quality={100}
            />
          </div> */}
          <hr className={styles.linha} />
          <div className={styles.numeros}>
            <div className={styles.indicador}>
              <span className={styles.numero}>4</span> hospitais
            </div>
            <div className={styles.indicador}>
              <span className={styles.numero}>
                10
                <Image
                  src="/images/logos/plus-solid-orange.svg"
                  alt="Icone de Whatsapp"
                  width={40}
                  height={40}
                  quality={100}
                />
              </span>
              clínicas
            </div>
            <div className={styles.indicador}>
              <span className={styles.numero}>10</span>
              farmacêutica
            </div>
            <div className={styles.indicador}>
              <span className={styles.numero}>
                100
                <Image
                  src="/images/logos/plus-solid-orange.svg"
                  alt="Icone de Whatsapp"
                  width={40}
                  height={40}
                  quality={100}
                />
              </span>
              profissionais de saúde
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section} aria-label="Companies that trust us">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Trusted by</p>
          {/* <h2 className="section-title">
            Companies that <span className="highlight">ship with us</span>
          </h2>
          <p className="section-subtitle">
            From early-stage startups to publicly traded companies
          </p> */}
        </div>

        <div className={styles.carouselOuter}>
          {/* Row 1 — forward */}
          <div className={styles.carouselTrackWrapper}>
            <div className={styles.carouselTrack} aria-hidden="true">
              {row1.map((company, i) => (
                <div className={styles.logoCard} key={`r1-${i}`}>
                  <span className={styles.logoAbbr}>{company.name}</span>
                  {/* <Image
                    src="/images/empresas/hyperpharma-logo.png"
                    alt="Icone de Whatsapp"
                    width={100}
                    height={100}
                    quality={100}
                  /> */}
                  <span className={styles.logoName}>{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — reverse */}
          <div className={styles.carouselTrackWrapper}>
            <div
              className={`${styles.carouselTrack} ${styles.reverse}`}
              aria-hidden="true"
            >
              {row2.map((company, i) => (
                <div className={styles.logoCard} key={`r2-${i}`}>
                  <span className={styles.logoAbbr}>{company.name}</span>
                  {/* <Image
                    src="/images/empresas/hyperpharma-logo.png"
                    alt="Icone de Whatsapp"
                    width={100}
                    height={100}
                    quality={100}
                  /> */}
                  <span className={styles.logoName}>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Companies</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">40k+</span>
            <span className="stat-label">Users</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Rating</span>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ResultsSection;
