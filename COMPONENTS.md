# Componentes Atômicos

## Estrutura

```
components/
├── sections/          # Seções completas da página
├── blocks/            # Componentes reutilizáveis maiores
├── atoms/             # Componentes básicos (Button, Input, etc)
└── common/            # Header, Footer, etc
```

## Padrões de Componentes

### Client vs Server Components
- Use `"use client"` apenas quando necessário (hooks, eventos)
- Prefira Server Components para melhor performance

### Exemplo de Componente
```tsx
// components/atoms/Button.tsx
"use client";

import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Estilos SCSS
```scss
// button.module.scss
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
  }
}

.primary {
  background: var(--primary);
  color: white;
}

.secondary {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.sm {
  padding: 8px 16px;
  font-size: 14px;
}

.md {
  padding: 10px 20px;
  font-size: 16px;
}

.lg {
  padding: 12px 24px;
  font-size: 18px;
}
```

## Props Pattern

```tsx
interface ComponentProps {
  /** Descrição da prop */
  prop: string;
  /** Callback opcional */
  onClick?: () => void;
  /** Elemento filho */
  children?: React.ReactNode;
}
```

## Reutilização

Componentes devem ser pequenos, focados e reutilizáveis:
- ✅ Responsabilidade única
- ✅ Props bem documentadas
- ✅ Sem efeitos colaterais não-esperados
- ✅ Testáveis
