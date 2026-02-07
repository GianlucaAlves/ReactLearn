"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Carregamento dinâmico do Sandpack para evitar SSR
// Isso é fundamental para performance conforme o guia de práticas
const CodeChallengeContent = dynamic(
  () =>
    import("./code-challenge-content").then((mod) => mod.CodeChallengeContent),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[500px] items-center justify-center rounded-lg border border-border bg-background-secondary">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-foreground-muted">Carregando editor...</p>
        </div>
      </div>
    ),
  },
);

export interface CodeChallengeProps {
  /** Código inicial para o aluno começar */
  starterCode: string;
  /** Código da solução (usado para hints) */
  solutionCode?: string;
  /** Código de testes para validação */
  testCode?: string;
  /** ID da lição para salvar progresso */
  lessonId?: string;
  /** Template do Sandpack */
  template?: "react" | "react-ts";
  /** Callback quando os testes passam */
  onSuccess?: () => void;
  /** Arquivos adicionais */
  additionalFiles?: Record<string, string>;
}

export function CodeChallenge(props: CodeChallengeProps) {
  return <CodeChallengeContent {...props} />;
}
