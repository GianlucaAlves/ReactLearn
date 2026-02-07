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
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
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
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos cursos
            </Link>
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-3">React</Badge>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="mt-2 text-foreground-muted">
                {course.modules.length} módulos • {totalLessons} lições
              </p>
            </div>
            <div className="w-48">
              <ProgressBar value={0} showLabel />
              <p className="mt-1 text-xs text-foreground-muted text-right">
                0 de {totalLessons} concluídas
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Modules List */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {course.modules.map((module, moduleIndex) => {
            const firstLesson = module.lessons[0];
            // TODO: Em produção, verificar progresso real do usuário
            // Por enquanto todos os módulos estão desbloqueados para permitir navegação
            const isLocked = false;

            return (
              <Card key={module.id} className={cn(isLocked && "opacity-60")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                          "bg-primary text-primary-foreground",
                        )}
                      >
                        {moduleIndex + 1}
                      </div>
                      <div>
                        <CardTitle>{module.title}</CardTitle>
                        <p className="text-sm text-foreground-muted">
                          {module.lessons.length} lições
                        </p>
                      </div>
                    </div>
                    <Button variant="primary" size="sm" asChild>
                      <Link
                        href={`/courses/${slug}/${module.id}/${firstLesson?.id}`}
                      >
                        {moduleIndex === 0 ? "Começar" : "Continuar"}
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <Link
                          href={`/courses/${slug}/${module.id}/${lesson.id}`}
                          className="flex items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-background-secondary"
                        >
                          <PlayCircle className="h-4 w-4 text-primary" />
                          <span>{lesson.title}</span>
                          {lesson.type === "EXERCISE" && (
                            <Badge
                              variant="outline"
                              className="ml-auto text-xs"
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
