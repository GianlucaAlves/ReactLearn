import { cn } from "@/lib/utils";

interface MDXContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper para conteúdo MDX com estilos de tipografia
 */
export function MDXContent({ children, className }: MDXContentProps) {
  return (
    <article
      className={cn(
        "prose prose-slate dark:prose-invert max-w-none",
        className,
      )}
    >
      {children}
    </article>
  );
}
