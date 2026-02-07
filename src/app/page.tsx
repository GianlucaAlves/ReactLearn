import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle, Zap } from "lucide-react";
import { Button, Header } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Aprenda <span className="text-gradient">React</span> na Prática
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed px-2">
            Domine React com exercícios interativos e validação em tempo real.
            Escreva código, veja o resultado instantaneamente e avance no seu
            próprio ritmo.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/courses">
                Explorar Cursos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/courses/react-fundamentals">Ver Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Conteúdo Estruturado"
            description="Aprenda com lições bem organizadas em módulos progressivos, do básico ao avançado."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Feedback Instantâneo"
            description="Execute seu código e veja os resultados em tempo real no editor integrado."
          />
          <FeatureCard
            icon={<CheckCircle className="h-8 w-8" />}
            title="Validação Automática"
            description="Testes automatizados verificam se você completou cada exercício corretamente."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-foreground-muted text-sm">
          <p>© 2026 ReactMaster. Construído com Next.js e muito ☕</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background-secondary p-6 transition-colors hover:border-primary/50">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-foreground-muted text-sm">{description}</p>
    </div>
  );
}
