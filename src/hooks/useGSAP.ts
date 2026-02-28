"use client";

/**
 * useGSAP — Hook central para usar GSAP + ScrollTrigger no Next.js
 *
 * REGRAS FUNDAMENTAIS:
 * 1. GSAP só roda no cliente ("use client")
 * 2. ScrollTrigger precisa ser registrado UMA VEZ
 * 3. Cleanup obrigatório para evitar animações duplicadas no StrictMode
 * 4. useLayoutEffect > useEffect para evitar flash visual
 */

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins FORA do componente (só uma vez globalmente)
gsap.registerPlugin(ScrollTrigger);

type GSAPCallback = (
  gsapInstance: typeof gsap,
  scrollTriggerInstance: typeof ScrollTrigger
) => gsap.core.Timeline | gsap.core.Tween | void;

/**
 * Hook principal para animações GSAP com cleanup automático.
 *
 * @param callback - Função que recebe gsap e ScrollTrigger e define as animações
 * @param dependencies - Array de dependências (como useEffect)
 *
 * @example
 * const ref = useRef(null);
 * useGSAP((gsap, ST) => {
 *   gsap.from(".card", {
 *     scrollTrigger: { trigger: ref.current, start: "top 80%" },
 *     opacity: 0, y: 50, stagger: 0.15
 *   });
 * }, []);
 */
export function useGSAP(callback: GSAPCallback, dependencies: unknown[] = []) {
  // useIsomorphicLayoutEffect: evita warning de SSR e garante ordem correta
  const useIsomorphicEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicEffect(() => {
    // Contexto GSAP isola animações e facilita cleanup
    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    });

    // Cleanup: mata todas as animações e ScrollTriggers do contexto
    return () => ctx.revert();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

/**
 * Variante com ref: escopa as animações ao elemento pai automaticamente.
 * Ideal quando você não quer usar seletores CSS globais.
 *
 * @example
 * const { ref } = useGSAPWithRef((gsap, ST) => {
 *   gsap.from(".card", { opacity: 0, y: 30 }); // .card relativo ao ref
 * }, []);
 */
export function useGSAPWithRef<T extends Element = HTMLDivElement>(
  callback: GSAPCallback,
  dependencies: unknown[] = []
) {
  const ref = useRef<T>(null);

  const useIsomorphicEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicEffect(() => {
    if (!ref.current) return;

    // Escopa seletores ao elemento ref — evita conflito com outros componentes
    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    }, ref.current);

    return () => ctx.revert();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { ref };
}

export { gsap, ScrollTrigger };
