"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import "../../../styles/globals.scss";
import styles from "./header.module.scss";
import useMedia from "@/hooks/useMedia";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia("(max-width: 48rem)");

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

        <ul
          className={`${!mobile ? styles.nav : styles.navMobile} ${mobileMenu && styles.navMobileActive}`}
        >
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
            <Link href="#faq">Perguntas frequentes</Link>
          </li>
        </ul>

        <span className={styles.icones}>
          <Link href="https://www.instagram.com/soutamis" target="_blank">
            <Image
              src="/images/logos/instagram.svg"
              alt="Linkedin Icon"
              width={20}
              height={20}
              priority
              quality={100}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/souza-tamires/" target="_blank">
            <Image
              src="/images/logos/linkedin.svg"
              alt="Linkedin Icon"
              width={25}
              height={25}
              priority
              quality={100}
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B5511967846989&text=Quero+contratar+a+palestra%2Ftreinamento+para+minha+empresa.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              src="/images/logos/whatsapp.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
              priority
              quality={85}
            />
          </Link>
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
