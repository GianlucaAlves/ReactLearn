import Link from "next/link";
import { BookOpen, Code2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { prisma } from "@/lib/prisma";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      <header className="border-b border-border">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6 text-primary" />
            <span>ReactMaster</span>
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Cursos</h1>
          <p className="mt-2 text-foreground-muted">
            Escolha um curso e comece a aprender React na prática
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <CardTitle className="mt-4">{course.title}</CardTitle>
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
              <CardContent className="py-12 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-foreground-muted" />
                <h3 className="mt-4 text-lg font-semibold">
                  Nenhum curso disponível
                </h3>
                <p className="mt-2 text-foreground-muted">
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
