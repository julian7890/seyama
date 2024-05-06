import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const result = await prisma.schedule.findMany({});
  return NextResponse.json(result);
}

export async function POST(req: any) {
  const res = await req.json();
  if (res.id) {
    const result = await prisma.schedule.findUnique({
      where: { id: res.id },
    });
    return NextResponse.json(result);
  } else if (!res.id) {
    const result = await prisma.schedule.create({ data: res });
    return NextResponse.json(result);
  }
}
