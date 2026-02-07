import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const progressSchema = z.object({
  lessonId: z.string(),
  completed: z.boolean(),
  lastCode: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, completed, lastCode } = progressSchema.parse(body);

    // Em produção, pegar userId da sessão autenticada
    // Por enquanto, usamos um ID fixo para teste
    const userId = "demo-user-id";

    // Upsert do progresso
    const progress = await prisma.progress.upsert({
      where: {
        userId_lessonId: {
          userId,
          lessonId,
        },
      },
      update: {
        completed,
        ...(lastCode && { lastCode }),
      },
      create: {
        userId,
        lessonId,
        completed,
        lastCode,
      },
    });

    return NextResponse.json({ success: true, progress });
  } catch (error) {
    console.error("Erro ao salvar progresso:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || "demo-user-id";

    const progress = await prisma.progress.findMany({
      where: { userId },
      include: {
        lesson: {
          select: {
            id: true,
            title: true,
            moduleId: true,
          },
        },
      },
    });

    return NextResponse.json({ progress });
  } catch (error) {
    console.error("Erro ao buscar progresso:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
