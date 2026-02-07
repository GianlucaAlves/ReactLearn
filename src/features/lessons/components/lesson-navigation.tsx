import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonNavigationProps {
  prevLesson?: {
    id: string;
    title: string;
    moduleId: string;
  };
  nextLesson?: {
    id: string;
    title: string;
    moduleId: string;
  };
  courseSlug: string;
  moduleId: string;
}

export function LessonNavigation({
  prevLesson,
  nextLesson,
  courseSlug,
  moduleId,
}: LessonNavigationProps) {
  return (
    <nav className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-border pt-6 mt-8">
      {prevLesson ? (
        <Button variant="outline" className="w-full sm:w-auto justify-start" asChild>
          <Link
            href={`/courses/${courseSlug}/${prevLesson.moduleId}/${prevLesson.id}`}
          >
            <ArrowLeft className="mr-2 h-4 w-4 shrink-0" />
            <span className="truncate">{prevLesson.title}</span>
          </Link>
        </Button>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextLesson ? (
        <Button variant="primary" className="w-full sm:w-auto justify-center" asChild>
          <Link
            href={`/courses/${courseSlug}/${nextLesson.moduleId}/${nextLesson.id}`}
          >
            <span className="truncate">{nextLesson.title}</span>
            <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
          </Link>
        </Button>
      ) : (
        <Button variant="success" className="w-full sm:w-auto" asChild>
          <Link href={`/courses/${courseSlug}`}>🎉 Curso Completo!</Link>
        </Button>
      )}
    </nav>
  );
}
