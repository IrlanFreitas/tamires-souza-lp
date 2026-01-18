# Deploy no Vercel

## Setup Automático

1. **Push para GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Conectar no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique "New Project"
   - Selecione seu repositório GitHub
   - Configure as variáveis de ambiente
   - Deploy automático ativado!

## Variáveis de Ambiente

`.env.local` (desenvolvimento):
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`.env.production` (Vercel):
```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

## Configuração de Domínio

1. No Vercel: Settings → Domains
2. Adicione seu domínio customizado
3. Configure DNS apontando para Vercel

## Analytics & Monitoring

### Google Analytics
```tsx
// src/app/layout.tsx
import Script from "next/script";

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </head>
    </html>
  );
}
```

### Vercel Analytics
Ativado automaticamente no Vercel.

## Performance

### Lighthouse Checks
- Score mínimo: 90
- Core Web Vitals: Bom
- Acessibilidade: 95+
- Melhores práticas: 95+

### Edge Functions
Configure no `next.config.js` para reduzir latência:
```javascript
experimental: {
  isrMemoryCacheSize: 50 * 1024 * 1024,
}
```

## CI/CD

Vercel automaticamente:
- ✅ Executa testes
- ✅ Faz build
- ✅ Gera preview para PRs
- ✅ Deploy automático em push

## Otimizações Ativas

- ✅ Compression habilitada
- ✅ Image optimization
- ✅ Edge caching
- ✅ ISR com revalidação inteligente
