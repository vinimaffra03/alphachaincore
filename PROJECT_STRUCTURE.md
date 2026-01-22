# Estrutura do Projeto AI2SaaS Boilerplate

Este documento explica a estrutura completa do projeto e o que cada pasta/arquivo faz.

## 📁 Estrutura Geral

```
nextjs-supabase-boilerplate/
├── 📄 .env                    # Variáveis de ambiente (chaves de API)
├── 📄 .gitignore              # Arquivos ignorados pelo Git
├── 📄 components.json         # Configuração do shadcn/ui
├── 📄 database.sql            # Schema do banco de dados
├── 📄 middleware.ts           # Middleware Next.js (autenticação)
├── 📄 next.config.js          # Configuração do Next.js
├── 📄 package.json            # Dependências e scripts
├── 📄 postcss.config.js       # Configuração do PostCSS
├── 📄 tailwind.config.js      # Configuração do Tailwind CSS
├── 📄 tsconfig.json           # Configuração do TypeScript
├── 📄 types.ts                # Tipos globais TypeScript
├── 📄 types_db.ts             # Tipos gerados do Supabase
├── 📁 actions/                # Server Actions (formulários, etc.)
├── 📁 public/                 # Arquivos estáticos (imagens, icons)
├── 📁 src/                    # Código fonte principal
└── 📁 README.md               # Documentação do projeto
```

---

## 🎯 Arquivos Principais

### `.env`
**Propósito:** Armazena variáveis de ambiente sensíveis
- `NEXT_PUBLIC_SUPABASE_URL` - URL do Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Chave pública do Supabase
- `SUPABASE_SERVICE_ROLE_KEY` - Chave de serviço do Supabase
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Chave pública do Stripe
- `STRIPE_SECRET_KEY` - Chave secreta do Stripe
- `STRIPE_WEBHOOK_SECRET` - Secret para webhooks do Stripe

### `database.sql`
**Propósito:** Schema completo do banco de dados
- Cria tabelas: `users`, `customers`, `products`, `prices`, `subscriptions`
- Configura Row Level Security (RLS)
- Cria triggers automáticos para novos usuários

### `middleware.ts`
**Propósito:** Middleware para proteção de rotas
- Verifica autenticação do usuário
- Redireciona usuários não autenticados
- Protege rotas privadas

---

## 📁 Pasta `src/` (Código Fonte)

### `src/app/` (Next.js App Router)

```
src/app/
├── 📁 (auth)/                 # Grupo de rotas de autenticação
│   └── 📁 sign-in/
│       └── 📄 page.tsx       # Página de login
├── 📁 (site)/                 # Grupo de rotas públicas
│   └── 📄 page.tsx          # Homepage
├── 📁 api/                    # API Routes (backend)
│   └── 📁 webhooks/
│       └── 📄 route.ts       # Webhook do Stripe
├── 📄 globals.css            # Estilos globais
└── 📄 layout.tsx             # Layout principal da aplicação
```

#### `(auth)/sign-in/page.tsx`
**Propósito:** Página de login/registro
- Usa Supabase Auth UI
- Configurado para login com Google
- Redireciona após login bem-sucedido

#### `(site)/page.tsx`
**Propósito:** Homepage pública
- Componentes de marketing
- Seções: Header, Benefits, Pricing, etc.

#### `api/webhooks/route.ts`
**Propósito:** Endpoint para webhooks do Stripe
- Processa eventos: checkout, subscription, products
- Sincroniza dados com Supabase
- Valida assinaturas do Stripe

#### `layout.tsx`
**Propósito:** Layout raiz da aplicação
- Configura providers (Supabase, Theme, User)
- Define metadados e fontes
- Estrutura HTML base

### `src/components/` (Componentes UI)

```
src/components/
├── 📁 ui/                     # Componentes base (shadcn/ui)
│   ├── 📄 button.tsx
│   ├── 📄 switch.tsx
│   └── 📄 ... (outros componentes)
├── 📁 layout/                 # Componentes de layout
│   ├── 📄 Footer.tsx
│   └── 📄 Navbar.tsx
└── 📁 theme-provider.tsx      # Provider de tema
```

#### `ui/`
**Propósito:** Componentes reutilizáveis do shadcn/ui
- Baseados em Radix UI
- Estilizados com Tailwind CSS
- Totalmente customizáveis

#### `layout/`
**Propósito:** Componentes estruturais
- `Navbar.tsx` - Barra de navegação principal
- `Footer.tsx` - Rodapé do site

### `src/sections/` (Seções da Homepage)

```
src/sections/
├── 📁 Benefits/              # Seção de benefícios
├── 📁 Header/                 # Cabeçalho principal
├── 📁 HowItWorks/            # Como funciona
├── 📁 Pricing/                # Planos e preços
│   ├── 📁 card/              # Card individual de plano
│   ├── 📄 index.tsx          # Componente principal
│   └── 📄 pricing.json       # Dados dos planos
├── 📁 Testimonials/          # Depoimentos
├── 📁 WhyUs/                 # Por que escolher nós
└── 📄 ... (outras seções)
```

#### `Pricing/`
**Propósito:** Sistema de planos e preços
- `index.tsx` - Componente principal com toggle mensal/anual
- `card/` - Card individual de cada plano
- `pricing.json` - Dados estáticos dos planos (para substituir com dados do Stripe)

### `src/hooks/` (Hooks Personalizados)

```
src/hooks/
└── 📄 use-stripe.ts          # Hook para integração com Stripe
```

### `src/lib/` (Utilitários e Configurações)

```
src/lib/
├── 📄 stripe.ts              # Configuração do Stripe (server-side)
├── 📄 stripeClient.ts        # Configuração do Stripe (client-side)
├── 📄 supabaseAdmin.ts       # Cliente Supabase com permissões admin
└── 📄 utils.ts               # Funções utilitárias gerais
```

#### `stripe.ts`
**Propósito:** Configuração do Stripe para uso no servidor
- Usa `STRIPE_SECRET_KEY`
- Configurado para webhooks e operações admin

#### `stripeClient.ts`
**Propósito:** Configuração do Stripe para uso no cliente
- Usa `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Para checkout e elementos de UI

#### `supabaseAdmin.ts`
**Propósito:** Cliente Supabase com permissões elevadas
- Usa `SUPABASE_SERVICE_ROLE_KEY`
- Para operações que precisam de acesso total

### `src/providers/` (Context Providers)

```
src/providers/
├── 📄 SupabaseProvider.tsx   # Provider do Supabase
├── 📄 UserProvider.tsx       # Provider de dados do usuário
└── 📄 ... (outros providers)
```

#### `SupabaseProvider.tsx`
**Propósito:** Configura o contexto do Supabase
- Cria cliente Supabase no lado do cliente
- Fornece contexto para componentes filhos

#### `UserProvider.tsx`
**Propósito:** Gerencia estado do usuário
- Dados do perfil, assinatura
- Lógica de autenticação

---

## 📁 Pasta `public/` (Arquivos Estáticos)

```
public/
├── 📁 images/                 # Imagens do site
│   ├── 📁 pricing/           # Ícones de pricing
│   └── 📄 ... (outras imagens)
├── 📄 favicon.ico            # Ícone da aba
└── 📄 ... (outros arquivos estáticos)
```

---

## 📁 Pasta `actions/` (Server Actions)

```
actions/
└── 📄 ... (ações de formulário, etc.)
```

**Propósito:** Server Actions do Next.js 13+
- Processamento de formulários
- Mutação de dados
- Operações server-side

---

## 🔄 Fluxo de Autenticação

1. **Usuário acessa `/sign-in`**
2. **Supabase Auth UI** mostra opções de login
3. **Login com Google** → Redireciona para autenticação
4. **Callback** → Retorna para `/auth/callback`
5. **Trigger `handle_new_user()`** → Cria usuário na tabela `users`
6. **Middleware** → Verifica sessão e redireciona

## 🔄 Fluxo de Pagamento

1. **Usuário clica em plano** → Checkout session
2. **Stripe Checkout** → Processa pagamento
3. **Webhook** → Recebe evento do Stripe
4. **API `/api/webhooks`** → Processa evento
5. **Supabase** → Atualiza tabelas de subscriptions
6. **Frontend** → Atualiza UI com novo status

---

## 📝 Próximos Passos para Estudo

1. **Entender App Router** do Next.js 13+
2. **Estudar Server Components** vs Client Components
3. **Aprender Supabase Auth** e Row Level Security
4. **Dominar Stripe Integration** (checkout, webhooks)
5. **Praticar TypeScript** no contexto React

## 🛠️ Comandos Úteis

```bash
npm run dev          # Iniciar desenvolvimento
npm run build        # Build para produção
npm run start        # Iniciar servidor de produção
npm run lint         # Verificar código
```

---

Este boilerplate segue as melhores práticas modernas e está pronto para desenvolvimento de um SaaS completo!
