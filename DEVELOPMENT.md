# Guia de Desenvolvimento Local

## Setup Inicial

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/tamires-souza-lp.git
cd tamires-souza-lp
```

### 2. Instalar dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas

```
tamires-souza-lp/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Página inicial
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/             # Componentes React
│   │   └── sections/           # Seções da página
│   ├── styles/                 # Estilos globais
│   ├── lib/                    # Funções utilitárias
│   ├── data/                   # Dados estáticos
│   └── types/                  # Definições TypeScript
├── public/                     # Assets estáticos
│   ├── favicon.ico
│   └── images/
├── .eslintrc.json              # Configuração ESLint
├── .prettierrc                 # Configuração Prettier
├── tsconfig.json               # Configuração TypeScript
├── next.config.js              # Configuração Next.js
└── package.json
```

## Convenções de Código

### Componentes TypeScript/React
```tsx
"use client"; // Se usar client-side features

import styles from "./component.module.scss";

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

export function Component({ title, onClick }: ComponentProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
}
```

### Estilos SCSS
```scss
.component {
  padding: 20px;
  background: var(--background);
  border-radius: var(--radius-md);

  &:hover {
    background: var(--surface);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
}
```

## Fluxo de Desenvolvimento

### 1. Criar nova branch
```bash
git checkout -b feature/nova-feature
```

### 2. Fazer alterações
- Editar componentes em `src/components/`
- Atualizar estilos nos `.module.scss`
- Testar em `http://localhost:3000`

### 3. Lint e Formatação
```bash
npm run lint
npx prettier --write .
```

### 4. Commit
```bash
git add .
git commit -m "feat: descrição da mudança"
git push origin feature/nova-feature
```

### 5. Pull Request
Criar PR no GitHub para review

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor dev

# Build
npm run build            # Compila para produção
npm start                # Inicia servidor de produção

# Linting
npm run lint             # Executa ESLint

# Formatação
npx prettier --check .   # Verifica formatação
npx prettier --write .   # Formata tudo
```

## Variáveis de Ambiente

Criar `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Debugging

### VS Code
Adicionar em `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js debugger",
      "type": "node",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

### Chrome DevTools
1. Abra Chrome DevTools (`F12`)
2. DevTools Next.js integrado
3. Use console para debug

## Performance

### Verificar Core Web Vitals
```bash
npm install -D web-vitals
```

### Lighthouse Local
1. DevTools (F12) → Lighthouse
2. Generate report
3. Analise o resultado

## Testes

```bash
# Instalar Jest
npm install -D jest @testing-library/react

# Rodar testes
npm test
```

## Troubleshooting

### Porta 3000 já em uso
```bash
lsof -i :3000
kill -9 <PID>
```

### Cache do Next.js problemático
```bash
rm -rf .next
npm run dev
```

### Módulo não encontrado
```bash
rm -rf node_modules package-lock.json
npm install
```

## Git Hooks (Opcional)

Instalar Husky para pre-commit hooks:
```bash
npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

`.lintstagedrc`:
```json
{
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{scss,css}": ["prettier --write"]
}
```

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Sass Documentation](https://sass-lang.com)

---

Happy coding! 🚀
