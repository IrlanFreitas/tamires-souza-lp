# Tamires Souza - Landing Page

Landing page profissional para Tamires Souza, especialista em marketing de saúde.

## 🚀 Stack Técnico

- **Framework**: Next.js 15+ (App Router)
- **Renderização**: SSG + ISR para máxima performance
- **Estilos**: CSS Modules + Sass
- **Imagens**: Otimização com `next/image`
- **Deploy**: Vercel (Edge Functions + CDN Global)
- **Linguagem**: TypeScript

## 📋 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (metadata, fonts)
│   ├── page.tsx            # Página inicial
│   ├── sitemap.ts          # Sitemap para SEO
│   └── robots.ts           # Robots.txt dinâmico
├── components/
│   └── sections/
│       ├── hero.tsx        # Seção hero com CTA
│       ├── hero.module.scss
│       ├── services.tsx    # Seção de serviços
│       └── services.module.scss
├── styles/
│   ├── globals.scss        # Estilos globais e variáveis
│   └── variables.scss      # Tokens de design
├── lib/                    # Funções utilitárias
├── data/                   # Dados estáticos (conteúdo)
└── types/                  # Tipos TypeScript
```

## ✨ Características Principais

### SEO Otimizado
- ✅ Metadados estruturados
- ✅ Sitemap automático
- ✅ Robots.txt dinâmico
- ✅ Open Graph e Twitter Cards
- ✅ Schema.org structured data
- ✅ Mobile-first responsive design

### Performance
- ✅ SSG com ISR para páginas estáticas
- ✅ Compressão automática
- ✅ Image optimization (WebP/AVIF)
- ✅ CSS crítico inline
- ✅ Zero JavaScript desnecessário
- ✅ Cache headers otimizados

### Segurança
- ✅ Headers de segurança
- ✅ CORS configurado
- ✅ Proteção contra XSS
- ✅ CSP headers

### Acessibilidade
- ✅ WCAG 2.1 AA compliant
- ✅ Navegação por teclado
- ✅ Screen reader friendly
- ✅ Contraste de cores otimizado

## 🛠️ Como Começar

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Convenções de Código

### Naming
- Componentes: `PascalCase` (ex: `HeroSection.tsx`)
- Módulos CSS: `kebab-case.module.scss` (ex: `hero.module.scss`)
- Variáveis/funções: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`

### Estrutura de Componentes
```tsx
"use client"; // Se usar hooks/state

import styles from "./component.module.scss";

interface ComponentProps {
  title: string;
}

export function Component({ title }: ComponentProps) {
  return <div className={styles.wrapper}>...</div>;
}
```

### Estilos
- Usar CSS Modules para encapsulamento
- Variáveis SCSS com `--prefixo`
- Mobile-first com `@media` queries
- BEM para classes quando necessário

## 🚀 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Vercel detectará automaticamente Next.js
4. Build e deploy automáticos

```bash
# Ou use a CLI
npm i -g vercel
vercel
```

### Variáveis de Ambiente

Criar `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

## 📊 SEO e Análitica

### Checklist SEO
- [ ] Preencher dados de About/About Us
- [ ] Adicionar imagens com alt text descritivo
- [ ] Implementar schema.org (Organization, LocalBusiness, etc)
- [ ] Testar com Google Search Console
- [ ] Validar mobile-friendly no Google
- [ ] Implementar analytics (GA4)
- [ ] Configurar sitemap e robots.txt

### Ferramentas Recomendadas
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Schema.org Validator](https://validator.schema.org/)
- [SEO Tools](https://www.semrush.com/analytics/overview/)

## 📦 Dependências Principais

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "sass": "^1.70.0"
}
```

## 🔍 Otimizações Implementadas

### JavaScript
- ✅ Tree-shaking automático
- ✅ Code splitting por rota
- ✅ Dynamic imports para componentes pesados

### CSS
- ✅ CSS Modules (zero CSS global não-necessário)
- ✅ SCSS pré-processado
- ✅ Purge de CSS não-utilizado

### Imagens
- ✅ Lazy loading automático
- ✅ WebP/AVIF com fallback
- ✅ Responsive images
- ✅ Blur placeholder

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [Web Vitals](https://web.dev/vitals/)

## 📄 Licença

MIT

---

**Desenvolvido com ❤️ para Tamires Souza**
