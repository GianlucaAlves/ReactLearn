import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  LessonSidebar,
  LessonNavigation,
  MDXContent,
} from "@/features/lessons";
import { CodeChallenge } from "@/features/editor";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface LessonPageProps {
  params: Promise<{
    slug: string;
    moduleId: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, moduleId, lessonId } = await params;

  // Busca a lição atual
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      exercises: true,
      module: {
        include: {
          lessons: {
            orderBy: { order: "asc" },
          },
          course: true,
        },
      },
    },
  });

  if (!lesson || !lesson.module) {
    notFound();
  }

  const { module } = lesson;
  const lessons = module.lessons;

  // Busca todos os módulos do curso para navegação entre módulos
  const allModules = await prisma.module.findMany({
    where: { courseId: module.courseId },
    include: {
      lessons: {
        orderBy: { order: "asc" },
      },
    },
    orderBy: { order: "asc" },
  });

  // Encontra lição anterior e próxima (incluindo entre módulos)
  const currentIndex = lessons.findIndex((l) => l.id === lessonId);
  const currentModuleIndex = allModules.findIndex((m) => m.id === moduleId);

  let prevLesson: { id: string; title: string; moduleId: string } | undefined;
  let nextLesson: { id: string; title: string; moduleId: string } | undefined;

  // Lição anterior
  if (currentIndex > 0) {
    // Tem lição anterior no mesmo módulo
    prevLesson = {
      id: lessons[currentIndex - 1].id,
      title: lessons[currentIndex - 1].title,
      moduleId: moduleId,
    };
  } else if (currentModuleIndex > 0) {
    // Vai para última lição do módulo anterior
    const prevModule = allModules[currentModuleIndex - 1];
    const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
    if (lastLesson) {
      prevLesson = {
        id: lastLesson.id,
        title: lastLesson.title,
        moduleId: prevModule.id,
      };
    }
  }

  // Próxima lição
  if (currentIndex < lessons.length - 1) {
    // Tem próxima lição no mesmo módulo
    nextLesson = {
      id: lessons[currentIndex + 1].id,
      title: lessons[currentIndex + 1].title,
      moduleId: moduleId,
    };
  } else if (currentModuleIndex < allModules.length - 1) {
    // Vai para primeira lição do próximo módulo
    const nextModule = allModules[currentModuleIndex + 1];
    const firstLesson = nextModule.lessons[0];
    if (firstLesson) {
      nextLesson = {
        id: firstLesson.id,
        title: `${nextModule.title}: ${firstLesson.title}`,
        moduleId: nextModule.id,
      };
    }
  }

  // Monta lista de lições para o sidebar (todas desbloqueadas)
  const sidebarLessons = lessons.map((l) => ({
    id: l.id,
    title: l.title,
    type: l.type as "TEXT" | "EXERCISE",
    order: l.order,
    isCompleted: false, // Em produção, buscar do Progress
    isLocked: false, // Todas desbloqueadas
  }));

  const exercise = lesson.exercises[0];

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/courses/${slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {module.title}
              </Link>
            </Button>
          </div>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Code2 className="h-5 w-5 text-primary" />
            <span>ReactMaster</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <LessonSidebar
          lessons={sidebarLessons}
          currentLessonId={lessonId}
          courseSlug={slug}
          moduleId={moduleId}
        />

        {/* Lesson Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-8 py-8">
            <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>

            {/* MDX Content */}
            <MDXContent>
              <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
            </MDXContent>

            {/* Code Challenge (se for exercício) */}
            {lesson.type === "EXERCISE" && exercise && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">🎯 Desafio</h2>
                <CodeChallenge
                  starterCode={exercise.starterCode}
                  solutionCode={exercise.solutionCode}
                  testCode={exercise.testCode}
                  lessonId={lesson.id}
                />
              </div>
            )}

            {/* Navigation */}
            <LessonNavigation
              prevLesson={prevLesson}
              nextLesson={nextLesson}
              courseSlug={slug}
              moduleId={moduleId}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
