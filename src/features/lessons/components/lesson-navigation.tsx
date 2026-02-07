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
    <nav className="flex items-center justify-between border-t border-border pt-6 mt-8">
      {prevLesson ? (
        <Button variant="outline" asChild>
          <Link
            href={`/courses/${courseSlug}/${prevLesson.moduleId}/${prevLesson.id}`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {prevLesson.title}
          </Link>
        </Button>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <Button variant="primary" asChild>
          <Link
            href={`/courses/${courseSlug}/${nextLesson.moduleId}/${nextLesson.id}`}
          >
            {nextLesson.title}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="success" asChild>
          <Link href={`/courses/${courseSlug}`}>🎉 Curso Completo!</Link>
        </Button>
      )}
    </nav>
  );
}
