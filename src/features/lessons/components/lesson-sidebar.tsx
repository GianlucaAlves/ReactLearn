"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Lock, PlayCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  const [isOpen, setIsOpen] = useState(false);
  const currentLesson = lessons.find((l) => l.id === currentLessonId);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button
          variant="primary"
          size="sm"
          className="shadow-lg rounded-full w-12 h-12 p-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu de lições" : "Abrir menu de lições"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={cn(
          "fixed lg:relative inset-y-0 left-0 z-40 w-72 lg:w-64 shrink-0 border-r border-border bg-background-secondary overflow-y-auto transition-transform duration-300",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden mb-4 pb-4 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">
              Lições
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Desktop Header */}
          <h2 className="hidden lg:block text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
            Lições
          </h2>

          <ul className="space-y-1">
            {lessons.map((lesson) => (
              <LessonNavItem
                key={lesson.id}
                lesson={lesson}
                isActive={lesson.id === currentLessonId}
                href={`/courses/${courseSlug}/${moduleId}/${lesson.id}`}
                onNavigate={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

interface LessonNavItemProps {
  lesson: LessonItem;
  isActive: boolean;
  href: string;
  onNavigate?: () => void;
}

function LessonNavItem({ lesson, isActive, href, onNavigate }: LessonNavItemProps) {
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
        <span className="ml-auto text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded whitespace-nowrap">
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
      <Link href={href} onClick={onNavigate}>{content}</Link>
    </li>
  );
}
