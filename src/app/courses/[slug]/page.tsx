import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Lock,
  PlayCircle,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, ProgressBar, Header } from "@/components/ui";
import { cn } from "@/lib/utils";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      modules: {
        include: {
          lessons: {
            orderBy: { order: "asc" },
          },
        },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!course) {
    notFound();
  }

  const totalLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0,
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Voltar aos cursos</span>
              <span className="sm:hidden">Voltar</span>
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <Badge className="mb-3">React</Badge>
              <h1 className="text-2xl sm:text-3xl font-bold">{course.title}</h1>
              <p className="mt-2 text-foreground-muted text-sm sm:text-base">
                {course.modules.length} módulos • {totalLessons} lições
              </p>
            </div>
            <div className="w-full sm:w-48">
              <ProgressBar value={0} showLabel />
              <p className="mt-1 text-xs text-foreground-muted sm:text-right">
                0 de {totalLessons} concluídas
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Modules List */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {course.modules.map((module, moduleIndex) => {
            const firstLesson = module.lessons[0];
            // TODO: Em produção, verificar progresso real do usuário
            // Por enquanto todos os módulos estão desbloqueados para permitir navegação
            const isLocked = false;

            return (
              <Card key={module.id} className={cn(isLocked && "opacity-60")}>
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shrink-0",
                          "bg-primary text-primary-foreground",
                        )}
                      >
                        {moduleIndex + 1}
                      </div>
                      <div>
                        <CardTitle className="text-base sm:text-lg">{module.title}</CardTitle>
                        <p className="text-sm text-foreground-muted">
                          {module.lessons.length} lições
                        </p>
                      </div>
                    </div>
                    <Button variant="primary" size="sm" className="w-full sm:w-auto" asChild>
                      <Link
                        href={`/courses/${slug}/${module.id}/${firstLesson?.id}`}
                      >
                        {moduleIndex === 0 ? "Começar" : "Continuar"}
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                  <ul className="space-y-1 sm:space-y-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <Link
                          href={`/courses/${slug}/${module.id}/${lesson.id}`}
                          className="flex items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-background-secondary"
                        >
                          <PlayCircle className="h-4 w-4 text-primary shrink-0" />
                          <span className="truncate">{lesson.title}</span>
                          {lesson.type === "EXERCISE" && (
                            <Badge
                              variant="outline"
                              className="ml-auto text-xs shrink-0"
                            >
                              Exercício
                            </Badge>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
