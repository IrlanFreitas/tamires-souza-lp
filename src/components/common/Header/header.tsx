"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import "../../../styles/globals.scss";
import styles from "./header.module.scss";
import useMedia from "@/hooks/useMedia";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia("(max-width: 40rem)");

  return (
    <>
      <nav className={`${styles.container}`}>
        <span className={styles.logo} id="#">
          <Image
            src="/images/logos/LOGO-Tamires-Souza.svg"
            alt="Tamires Souza"
            width={25}
            height={25}
            priority
            quality={85}
          />
          <Link href="/">
            <p>Tamires Souza</p>
          </Link>
        </span>

        <ul className={`${!mobile ? styles.nav : styles.navMobile} ${mobileMenu && styles.navMobileActive}`}>
          <li>
            <Link href="#resultados">Resultados</Link>
          </li>
          <li>
            <Link href="#processo">Processo</Link>
          </li>
          <li>
            <Link href="#servicos">Serviços</Link>
          </li>
          <li>
            <Link href="#faq">Perguntas Frequentes</Link>
          </li>
        </ul>

        <span className={styles.icones}>
          <Image
            src="/images/logos/linkedin.svg"
            alt="Linkedin Icon"
            width={30}
            height={30}
            priority
            quality={100}
          />

          <Image
            src="/images/logos/whatsapp.svg"
            alt="WhatsApp Icon"
            width={25}
            height={25}
            priority
            quality={85}
          />
        </span>

        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
      </nav>
    </>
  );
};

export default Header;
