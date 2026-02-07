import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Mapeamento de componentes HTML para estilização
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mt-4 mb-2 text-foreground">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-foreground-muted">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-foreground-muted">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-foreground-muted">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-2">{children}</li>,
    code: ({ children }) => (
      <code className="bg-background-secondary px-1.5 py-0.5 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-background-secondary p-4 rounded-lg overflow-x-auto mb-4 border border-border">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-foreground-muted my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
