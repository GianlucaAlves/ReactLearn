import Link from "next/link";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LessonItem {
  id: string;
  title: string;
  type: "TEXT" | "EXERCISE";
  order: number;
  isCompleted: boolean;
  isLocked: boolean;
}

interface LessonSidebarProps {
  lessons: LessonItem[];
  currentLessonId: string;
  courseSlug: string;
  moduleId: string;
}

export function LessonSidebar({
  lessons,
  currentLessonId,
  courseSlug,
  moduleId,
}: LessonSidebarProps) {
  return (
    <nav className="w-64 shrink-0 border-r border-border bg-background-secondary overflow-y-auto">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
          Lições
        </h2>
        <ul className="space-y-1">
          {lessons.map((lesson) => (
            <LessonNavItem
              key={lesson.id}
              lesson={lesson}
              isActive={lesson.id === currentLessonId}
              href={`/courses/${courseSlug}/${moduleId}/${lesson.id}`}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

interface LessonNavItemProps {
  lesson: LessonItem;
  isActive: boolean;
  href: string;
}

function LessonNavItem({ lesson, isActive, href }: LessonNavItemProps) {
  const Icon = lesson.isCompleted
    ? CheckCircle
    : lesson.isLocked
      ? Lock
      : PlayCircle;

  const content = (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : lesson.isLocked
            ? "text-foreground-muted/50 cursor-not-allowed"
            : "text-foreground-muted hover:bg-background hover:text-foreground",
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0",
          lesson.isCompleted && "text-success",
          lesson.isLocked && "text-foreground-muted/50",
        )}
      />
      <span className="truncate">{lesson.title}</span>
      {lesson.type === "EXERCISE" && !lesson.isLocked && (
        <span className="ml-auto text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
          Exercício
        </span>
      )}
    </div>
  );

  if (lesson.isLocked) {
    return <li>{content}</li>;
  }

  return (
    <li>
      <Link href={href}>{content}</Link>
    </li>
  );
}
