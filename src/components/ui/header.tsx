"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showCourseLink?: boolean;
  showStartButton?: boolean;
}

export function Header({
  showCourseLink = true,
  showStartButton = true,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">ReactMaster</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {showCourseLink && (
            <Link
              href="/courses"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Cursos
            </Link>
          )}
          <ThemeToggle />
          {showStartButton && (
            <Button variant="primary" size="sm" asChild>
              <Link href="/courses">Começar Agora</Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden border-t border-border bg-background overflow-hidden transition-all duration-200",
          isMenuOpen ? "max-h-40" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {showCourseLink && (
            <Link
              href="/courses"
              className="block text-foreground-muted hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
          )}
          {showStartButton && (
            <Button variant="primary" size="sm" className="w-full" asChild>
              <Link href="/courses" onClick={() => setIsMenuOpen(false)}>
                Começar Agora
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
