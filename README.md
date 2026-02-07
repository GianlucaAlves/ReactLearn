# ReactMaster 🚀

Plataforma de ensino de React "Learning by Doing" com exercícios práticos e validação em tempo real.

## Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Estilização:** Tailwind CSS
- **Linguagem:** TypeScript
- **Banco de Dados:** PostgreSQL + Prisma ORM
- **Editor de Código:** Sandpack (by CodeSandbox)
- **Arquitetura:** Feature-Based

## Estrutura do Projeto

```
src/
├── app/                      # Rotas e layouts (App Router)
│   ├── api/                  # API Routes
│   │   └── progress/         # Endpoints de progresso
│   ├── courses/              # Páginas de cursos
│   │   ├── [slug]/           # Página do curso
│   │   │   └── [moduleId]/   # Módulo
│   │   │       └── [lessonId]/ # Página da lição
│   │   └── page.tsx          # Listagem de cursos
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout raiz
│   └── page.tsx              # Homepage
├── components/
│   ├── providers/            # Context providers
│   └── ui/                   # Componentes UI reutilizáveis
├── features/
│   ├── editor/               # Feature do Sandpack/Editor
│   │   ├── components/
│   │   │   ├── code-challenge.tsx
│   │   │   └── code-challenge-content.tsx
│   │   └── index.ts
│   └── lessons/              # Feature de lições
│       ├── components/
│       │   ├── lesson-sidebar.tsx
│       │   ├── lesson-navigation.tsx
│       │   └── mdx-content.tsx
│       └── index.ts
└── lib/                      # Utilitários e configurações
    ├── prisma.ts
    └── utils.ts
```

## Começando

### Pré-requisitos

- Node.js 18+
- PostgreSQL rodando na porta 5432
- npm ou yarn

### Instalação

1. **Instale as dependências:**

```bash
npm install
```

2. **Configure o banco de dados:**

Certifique-se que o PostgreSQL está rodando e o banco `react-learn` existe.

3. **Gere o Prisma Client:**

```bash
npm run db:generate
```

4. **Aplique o schema ao banco:**

```bash
npm run db:push
```

5. **Popule o banco com dados iniciais:**

```bash
npm run db:seed
```

6. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

7. Acesse [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

| Script                | Descrição                                          |
| --------------------- | -------------------------------------------------- |
| `npm run dev`         | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build`       | Cria build de produção                             |
| `npm run start`       | Inicia servidor de produção                        |
| `npm run lint`        | Executa o linter                                   |
| `npm run db:generate` | Gera o Prisma Client                               |
| `npm run db:push`     | Aplica schema ao banco                             |
| `npm run db:seed`     | Popula banco com dados iniciais                    |
| `npm run db:studio`   | Abre o Prisma Studio                               |
| `npm run db:reset`    | Reseta o banco e executa o seed                    |

## Modelo de Dados

```
Course (Curso)
  └── Module (Módulo)
       └── Lesson (Lição)
            └── Exercise (Exercício)

User (Usuário)
  └── Progress (Progresso)
```

## Features Principais

### ✅ Implementado

- [x] Estrutura base do projeto
- [x] Sistema de cursos, módulos e lições
- [x] Editor de código integrado (Sandpack)
- [x] Sistema de validação de exercícios
- [x] Dark/Light mode
- [x] API de progresso
- [x] Seed de dados de exemplo

### 🚧 Próximos Passos

- [ ] Sistema de autenticação (Clerk/NextAuth)
- [ ] Validação real de testes no Sandpack
- [ ] Sistema de hints progressivos
- [ ] Dashboard do aluno
- [ ] Persistência de código no LocalStorage

## Licença

MIT
