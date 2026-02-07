"use client";

import { useState, useCallback } from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { dracula } from "@codesandbox/sandpack-themes";
import {
  Play,
  RotateCcw,
  CheckCircle,
  XCircle,
  Lightbulb,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CodeChallengeProps } from "./code-challenge";

type TestStatus = "idle" | "running" | "passed" | "failed";

export function CodeChallengeContent({
  starterCode,
  solutionCode,
  testCode,
  lessonId,
  template = "react",
  onSuccess,
  additionalFiles = {},
}: CodeChallengeProps) {
  const [testStatus, setTestStatus] = useState<TestStatus>("idle");
  const [testMessage, setTestMessage] = useState<string>("");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const files = {
    "/App.js": starterCode,
    ...additionalFiles,
    ...(testCode && {
      "/test.js": testCode,
    }),
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <SandpackProvider template={template} theme={dracula} files={files}>
        <div className="flex items-center justify-between border-b border-border bg-background-secondary px-4 py-2">
          <div className="flex items-center gap-2">
            <Badge
              variant={
                testStatus === "passed"
                  ? "success"
                  : testStatus === "failed"
                    ? "error"
                    : "default"
              }
            >
              {testStatus === "idle" && "Pronto"}
              {testStatus === "running" && "Executando..."}
              {testStatus === "passed" && "Aprovado!"}
              {testStatus === "failed" && "Tente novamente"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {attempts >= 2 && solutionCode && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
              >
                <Lightbulb className="mr-1 h-4 w-4" />
                Dica
              </Button>
            )}
            {attempts >= 4 && solutionCode && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSolution(!showSolution)}
              >
                <Eye className="mr-1 h-4 w-4" />
                Solução
              </Button>
            )}
          </div>
        </div>

        {/* Hint Panel */}
        {showHint && (
          <div className="border-b border-border bg-warning/10 px-4 py-3">
            <p className="text-sm text-warning">
              💡 <strong>Dica:</strong> Verifique se você está usando o hook
              corretamente. Lembre-se de declarar o estado inicial e usar a
              função de atualização.
            </p>
          </div>
        )}

        {/* Solution Panel */}
        {showSolution && solutionCode && (
          <div className="border-b border-border bg-background-secondary px-4 py-3">
            <p className="text-sm text-foreground-muted mb-2">
              <strong>Solução comentada:</strong>
            </p>
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
              <code>{solutionCode}</code>
            </pre>
          </div>
        )}

        {/* Editor e Preview - Responsivo */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 min-w-0">
            <SandpackCodeEditor
              showTabs
              showLineNumbers
              showInlineErrors
              wrapContent
              style={{ height: "350px", minHeight: "300px" }}
            />
          </div>
          <div className="flex-1 min-w-0 border-t lg:border-t-0 lg:border-l border-border">
            <SandpackPreview
              showNavigator={false}
              showRefreshButton
              style={{ height: "350px", minHeight: "300px" }}
            />
          </div>
        </div>

        {/* Action Bar */}
        <EditorActions
          testCode={testCode}
          lessonId={lessonId}
          testStatus={testStatus}
          setTestStatus={setTestStatus}
          setTestMessage={setTestMessage}
          attempts={attempts}
          setAttempts={setAttempts}
          onSuccess={onSuccess}
        />

        {/* Test Message */}
        {testMessage && (
          <div
            className={`px-4 py-3 border-t border-border ${
              testStatus === "passed"
                ? "bg-success/10 text-success"
                : testStatus === "failed"
                  ? "bg-error/10 text-error"
                  : "bg-background-secondary"
            }`}
          >
            <div className="flex items-start gap-2">
              {testStatus === "passed" && (
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              )}
              {testStatus === "failed" && (
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              )}
              <pre className="text-sm whitespace-pre-wrap font-sans">
                {testMessage}
              </pre>
            </div>
          </div>
        )}
      </SandpackProvider>
    </div>
  );
}

interface EditorActionsProps {
  testCode?: string;
  lessonId?: string;
  testStatus: TestStatus;
  setTestStatus: (status: TestStatus) => void;
  setTestMessage: (message: string) => void;
  attempts: number;
  setAttempts: (fn: (prev: number) => number) => void;
  onSuccess?: () => void;
}

// Normaliza o código para comparação mais flexível
function normalizeCode(code: string): string {
  return code
    .replace(/\s+/g, " ") // Normaliza espaços
    .replace(/\s*([{}()[\],;:])\s*/g, "$1") // Remove espaços ao redor de pontuação
    .trim();
}

// Função para extrair verificações do testCode
function parseTestChecks(testCode: string): Array<{
  description: string;
  check: (code: string) => boolean;
}> {
  const checks: Array<{
    description: string;
    check: (code: string) => boolean;
  }> = [];

  // Procura por padrões no testCode
  // CHECK:contains:pattern:message
  const checkRegex = /CHECK:(\w+):([^:]+):(.+)/g;
  let match;

  while ((match = checkRegex.exec(testCode)) !== null) {
    const [, type, pattern, message] = match;

    if (type === "contains") {
      // Verificação flexível - ignora espaços extras
      checks.push({
        description: message,
        check: (code) => {
          const normalizedCode = normalizeCode(code);
          const normalizedPattern = normalizeCode(pattern);
          return (
            normalizedCode.includes(normalizedPattern) ||
            code.includes(pattern) ||
            code.replace(/\s+/g, "").includes(pattern.replace(/\s+/g, ""))
          );
        },
      });
    } else if (type === "regex") {
      checks.push({
        description: message,
        check: (code) => {
          try {
            // Tenta com o código original e normalizado
            const regex = new RegExp(pattern, "is"); // case insensitive, dotall
            return regex.test(code) || regex.test(normalizeCode(code));
          } catch {
            return code.includes(pattern);
          }
        },
      });
    } else if (type === "notContains") {
      checks.push({
        description: message,
        check: (code) => !code.includes(pattern),
      });
    } else if (type === "hasHook") {
      // Verificação especial para hooks
      checks.push({
        description: message,
        check: (code) => {
          const hookPattern = new RegExp(`use${pattern}\\s*\\(`, "i");
          return hookPattern.test(code);
        },
      });
    } else if (type === "hasElement") {
      // Verificação para elementos JSX
      checks.push({
        description: message,
        check: (code) => {
          const elementPattern = new RegExp(`<${pattern}[\\s>]`, "i");
          return elementPattern.test(code);
        },
      });
    } else if (type === "hasFunction") {
      // Verificação para funções/componentes
      checks.push({
        description: message,
        check: (code) => {
          const funcPattern = new RegExp(
            `function\\s+${pattern}|const\\s+${pattern}\\s*=`,
            "i",
          );
          return funcPattern.test(code);
        },
      });
    } else if (type === "hasVariable") {
      // Verificação para variáveis
      checks.push({
        description: message,
        check: (code) => {
          const varPattern = new RegExp(
            `(const|let|var)\\s+${pattern}\\s*=`,
            "i",
          );
          return varPattern.test(code);
        },
      });
    } else if (type === "hasExpression") {
      // Verificação para expressões JSX {algo}
      checks.push({
        description: message,
        check: (code) => {
          const exprPattern = new RegExp(`\\{[^}]*${pattern}[^}]*\\}`, "i");
          return exprPattern.test(code);
        },
      });
    }
  }

  return checks;
}

// Verificações padrão baseadas no tipo de exercício
function getDefaultChecks(code: string): Array<{
  passed: boolean;
  message: string;
}> {
  const results: Array<{ passed: boolean; message: string }> = [];

  // Verifica se tem export default
  const hasExport = /export\s+default/.test(code);
  results.push({
    passed: hasExport,
    message: hasExport
      ? "✓ Componente exportado corretamente"
      : '✗ Adicione "export default" ao seu componente',
  });

  // Verifica se tem return com JSX
  const hasReturn =
    /return\s*\([\s\S]*?</.test(code) || /return\s+</.test(code);
  results.push({
    passed: hasReturn,
    message: hasReturn
      ? "✓ Componente retorna JSX"
      : "✗ Seu componente precisa retornar elementos JSX",
  });

  // Verifica se não tem erros óbvios de sintaxe
  const hasBasicStructure = /function\s+\w+|const\s+\w+\s*=/.test(code);
  results.push({
    passed: hasBasicStructure,
    message: hasBasicStructure
      ? "✓ Estrutura do componente válida"
      : "✗ Verifique a estrutura do seu componente",
  });

  return results;
}

function EditorActions({
  testCode,
  lessonId,
  testStatus,
  setTestStatus,
  setTestMessage,
  attempts,
  setAttempts,
  onSuccess,
}: EditorActionsProps) {
  const { sandpack } = useSandpack();
  const { resetAllFiles, files } = sandpack;

  const runTests = useCallback(async () => {
    setTestStatus("running");
    setAttempts((prev) => prev + 1);

    // Pequeno delay para UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Obtém o código atual do aluno
    const appFile = files["/App.js"];
    const userCode =
      typeof appFile === "object" && "code" in appFile ? appFile.code : "";

    const testResults: Array<{ passed: boolean; message: string }> = [];

    // Verificações padrão
    const defaultChecks = getDefaultChecks(userCode);
    testResults.push(...defaultChecks);

    // Verificações específicas do exercício baseadas no testCode
    if (testCode) {
      const specificChecks = parseTestChecks(testCode);

      for (const check of specificChecks) {
        const passed = check.check(userCode);
        testResults.push({
          passed,
          message: passed ? `✓ ${check.description}` : `✗ ${check.description}`,
        });
      }
    }

    // Calcula resultado final
    const allPassed = testResults.every((r) => r.passed);
    const passedCount = testResults.filter((r) => r.passed).length;
    const totalCount = testResults.length;

    if (allPassed) {
      setTestStatus("passed");
      setTestMessage(
        `🎉 Parabéns! Todos os ${totalCount} testes passaram!\n\n` +
          testResults.map((r) => r.message).join("\n"),
      );

      // Salvar progresso
      if (lessonId) {
        try {
          await fetch("/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lessonId, completed: true }),
          });
        } catch (error) {
          console.error("Erro ao salvar progresso:", error);
        }
      }

      onSuccess?.();
    } else {
      setTestStatus("failed");
      setTestMessage(
        `${passedCount}/${totalCount} verificações passaram.\n\n` +
          testResults.map((r) => r.message).join("\n"),
      );
    }
  }, [
    lessonId,
    onSuccess,
    setTestStatus,
    setTestMessage,
    setAttempts,
    testCode,
    files,
  ]);

  return (
    <div className="flex items-center justify-between border-t border-border bg-background-secondary px-4 py-3">
      <Button variant="ghost" size="sm" onClick={() => resetAllFiles()}>
        <RotateCcw className="mr-1 h-4 w-4" />
        Resetar
      </Button>
      <Button
        variant={testStatus === "passed" ? "success" : "primary"}
        size="sm"
        onClick={runTests}
        disabled={testStatus === "running"}
      >
        {testStatus === "running" ? (
          <>Verificando...</>
        ) : (
          <>
            <Play className="mr-1 h-4 w-4" />
            Verificar Solução
          </>
        )}
      </Button>
    </div>
  );
}
