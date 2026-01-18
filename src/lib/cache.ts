/**
 * Configuração de cache para dados estáticos
 * Baseado em Next.js Data Cache pattern
 */

export const CACHE_CONFIG = {
  // Revalida a cada 24 horas
  LONG_TERM: {
    revalidate: 86400,
  },
  // Revalida a cada 1 hora
  MEDIUM_TERM: {
    revalidate: 3600,
  },
  // Revalida a cada 10 minutos
  SHORT_TERM: {
    revalidate: 600,
  },
  // Sem cache (sempre fresco)
  NO_CACHE: {
    revalidate: 0,
  },
};

/**
 * Fetch com cache automático
 */
export async function cachedFetch<T>(
  url: string,
  options: RequestInit & { cacheTime?: "long" | "medium" | "short" | "none" } = {}
): Promise<T> {
  const { cacheTime = "long", ...fetchOptions } = options;

  const cacheConfig =
    cacheTime === "long"
      ? CACHE_CONFIG.LONG_TERM
      : cacheTime === "medium"
        ? CACHE_CONFIG.MEDIUM_TERM
        : cacheTime === "short"
          ? CACHE_CONFIG.SHORT_TERM
          : CACHE_CONFIG.NO_CACHE;

  const response = await fetch(url, {
    ...fetchOptions,
    next: {
      revalidate: cacheConfig.revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
