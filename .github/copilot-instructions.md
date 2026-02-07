
# 📘 Guia de Melhores Práticas – Plataforma React Pro

Este documento define padrões técnicos e de arquitetura para o desenvolvimento da plataforma, usando **Next.js (App Router), MDX, Sandpack, Tailwind CSS e Prisma**.

---

## 1. Frontend & Next.js (App Router)

### 1.1. Mentalidade Server-First

- **React Server Components (RSC):**  
  - Prefira componentes de servidor para páginas de conteúdo (aulas em MDX, navegação, listas).  
  - Evite enviar lógica desnecessária para o cliente – quanto menos JS no browser, melhor.
- **Client Components:**  
  - Use `'use client'` apenas onde há interação direta: editor (Sandpack), formulários, botões com estado, toasts, etc.  
  - Se um componente não precisa de `useState`, `useEffect` ou eventos do DOM, mantenha-o como server component.

### 1.2. Organização de Pastas (Feature-Based)

Estruture o código por funcionalidade, não por tipo de arquivo:

```txt
src/
  app/                # Rotas, layouts e entrypoints
  features/
    editor/           # Sandpack, execução de testes, UI do workspace
    lessons/          # Renderização de MDX, trilha de progresso
    auth/             # Autenticação (Clerk/NextAuth)
  components/         # UI compartilhada: botões, inputs, cards
  lib/                # Configuração (Prisma, helper de auth, helpers visuais)
```

- Cada pasta em `features/` deve expor apenas o que é necessário (ex.: `EditorShell`, `LessonSidebar`, etc.).
- Evite “pastas utilitárias” genéricas demais (ex.: `utils/` gigantesco); prefira utilitários próximos da feature.

---

## 2. Engine de Conteúdo (MDX + Sandpack)

### 2.1. Componente de Alto Nível para Exercícios

- Não instanciar Sandpack em cada página manualmente.  
- Criar um componente de alto nível, por exemplo `CodeChallenge`, que recebe:
  - Arquivos iniciais,
  - Testes,
  - Configuração de template (React, Typescript, etc.),
  - Metadados do exercício (id da lição, título, etc.).
- Dentro dele, use `SandpackLayout`, `SandpackCodeEditor` e `SandpackPreview` para ter controle fino da UI.

### 2.2. Performance e Lazy Loading

- Sandpack é pesado – sempre usar `next/dynamic` com `ssr: false` para carregá‑lo:
  - Carregar o editor apenas quando:
    - O usuário chega na parte do exercício, ou
    - Clica em um botão “Iniciar desafio”.
- Evitar carregar Sandpack na página inicial ou em listagens de lições.

### 2.3. MDX Components e Design System

- Mapear tags HTML padrão para componentes estilizados com Tailwind (typography, code blocks, lists, headings).
- Centralizar esse mapeamento em um provider/registry de MDX:
  - `h1`, `h2`, `p`, `code`, `pre`, `ul`, `ol`, `a` → componentes próprios com tokens de design.
- Garantir que todo conteúdo de aula respeite o design system sem precisar de CSS ad‑hoc.

---

## 3. Estilização (Tailwind CSS)

### 3.1. Design System e Temas

- **Paleta base:** `slate` ou `zinc` para fundo e texto, com cores de ação em `indigo`, `emerald` ou similar.
- **Dark Mode:**
  - Suporte nativo com classe `dark`.
  - Garantir contraste adequado em ambos os temas (usar ferramentas de acessibilidade se necessário).
- Definir tokens (via classes utilitárias ou configs) para:
  - Tipografia de títulos, subtítulos e corpo.
  - Estados de sucesso/erro/aviso (cores e ícones consistentes).

### 3.2. Uso de Utilities

- Uso de Tailwind “utility-first”, mas com disciplina:
  - Componentes reutilizáveis para padrões visuais recorrentes (cards de lição, botões primários/secundários, alerts).
  - Evitar blocos de classe muito grandes duplicados – extrair para componentes ou, em últimas, `@apply` em estilos globais de base.

---

## 4. Backend & Persistência (Prisma)

### 4.1. Tipagem Forte End-to-End

- Utilizar `Prisma Client` como fonte de verdade de tipos de dados:
  - Progresso de lições (completed, inProgress),
  - Tentativas de desafios,
  - Usuários, trilhas, módulos.
- Reutilizar tipos gerados pelo Prisma no frontend sempre que possível (via inferência ou DTOs tipados).

### 4.2. Validação de Dados

- Usar **Zod** (ou schema similar) para:
  - Validar dados de formulários antes de persistir,
  - Validar payloads recebidos em rotas de API ou actions do Next.
- Definir schemas por caso de uso (ex.: `SubmitChallengeSchema`, `UpdateProfileSchema`) e reutilizá‑los entre frontend e backend.

---

## 5. Validação de Exercícios

### 5.1. Execução de Testes

- Executar testes do código do aluno de forma isolada (ex.: sandbox, Web Worker ou ambiente de teste do próprio Sandpack).
- Evitar travar a UI principal enquanto os testes rodam:
  - Exibir loading/spinner específico da área de resultados.
  - Expor apenas o output relevante (não o stack trace completo do ambiente).

### 5.2. Feedback Claro para o Aluno

- Mensagens de erro voltadas à aprendizagem:
  - Evitar mensagens cruas de asserção estilo `"Error: expected 2 to be 3"`.
  - Preferir mensagens orientadas à ação:  
    _"Parece que seu contador ainda não está incrementando corretamente. Verifique se o evento `onClick` está sendo usado no botão certo."_  
- Sempre que possível:
  - Contextualizar qual parte do exercício falhou (ex.: “Teste: botão deve aumentar o valor em 1”).

---

## 6. Segurança e Acessibilidade

### 6.1. Segurança

- **Conteúdo gerado pelo usuário (comentários, fóruns, etc.):**
  - Sanitizar HTML antes de renderizar para prevenir XSS.
  - Não interpolar código do aluno diretamente em `dangerouslySetInnerHTML` sem sanitização.
- **Execução de código:**
  - Isolar ao máximo o ambiente de execução do aluno do restante da aplicação.
  - Evitar acesso a APIs sensíveis a partir do código executado na sandbox.

### 6.2. Acessibilidade (A11y)

- Editor e interface navegáveis via teclado:
  - Foco visível em botões, campos, abas e áreas do editor.
  - Atalhos de teclado documentados quando existirem (ex.: rodar testes, resetar código).
- Leitores de tela:
  - Informar estado de progresso (“lição concluída”, “exercício aprovado”) com atributos ARIA apropriados.
  - Usar rótulos descritivos em botões como “Rodar testes”, “Mostrar dica”, “Ver solução comentada”.

---

## 7. Por que este guia existe?

Construir uma plataforma onde o usuário **escreve e executa código** exige cuidado especial com:

- **Performance:** evitar que páginas de aula fiquem pesadas pelo carregamento desnecessário do editor e de dependências.  
- **Segurança:** isolar o código do aluno e sanitizar qualquer conteúdo dinâmico.  
- **Experiência de aprendizado:** dar feedbacks claros, mensagens amigáveis e uma interface consistente, responsiva e acessível.

Seguir estas práticas ajuda a manter o código da plataforma escalável, seguro e fácil de evoluir, ao mesmo tempo em que oferece uma experiência de estudo fluida para os alunos.