import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const contract = await prisma.contract.findUnique({ where: { id } });
    if (!contract) return NextResponse.json({}, { status: 404 });

    await prisma.contract.delete({ where: { id } });
    console.log("Deleted succ");
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    console.log("Error");
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
