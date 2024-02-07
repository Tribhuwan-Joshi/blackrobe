import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  NextRequest: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  try {
    const contract = await prisma.contract.findUnique({ where: { id } });
    if (!contract) return NextResponse.json({}, { status: 404 });
    await prisma.contract.delete({ where: { id } });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
