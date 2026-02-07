import Link from "next/link";
import { BookOpen, Code2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  ProgressBar,
  Header,
} from "@/components/ui";
import { prisma } from "@/lib/prisma";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    include: {
      modules: {
        include: {
          lessons: true,
        },
        orderBy: { order: "asc" },
      },
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header showStartButton={false} />

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Cursos</h1>
          <p className="mt-2 text-foreground-muted text-sm sm:text-base">
            Escolha um curso e comece a aprender React na prática
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const totalLessons = course.modules.reduce(
              (acc, module) => acc + module.lessons.length,
              0,
            );
            const totalModules = course.modules.length;

            return (
              <Link key={course.id} href={`/courses/${course.slug}`}>
                <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge>React</Badge>
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg sm:text-xl">{course.title}</CardTitle>
                    <CardDescription>
                      {totalModules} módulos • {totalLessons} lições
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProgressBar value={0} showLabel />
                  </CardContent>
                </Card>
              </Link>
            );
          })}

          {courses.length === 0 && (
            <Card className="col-span-full">
              <CardContent className="py-8 sm:py-12 text-center">
                <BookOpen className="mx-auto h-10 sm:h-12 w-10 sm:w-12 text-foreground-muted" />
                <h3 className="mt-4 text-base sm:text-lg font-semibold">
                  Nenhum curso disponível
                </h3>
                <p className="mt-2 text-foreground-muted text-sm">
                  Os cursos serão adicionados em breve.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
