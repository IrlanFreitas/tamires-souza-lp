import Header from "@/components/common/Header/header";
import { HeroSection } from "@components/sections/hero";
import { ServicesSection } from "@components/sections/services";
import styles from "./page.module.scss";

// TODO - adicionar todas as outras sections já organizadas aqui

export default function Page() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.content}>
      <HeroSection />
      {/* <ServicesSection /> */}
      </div>

    </div>
  );
}
