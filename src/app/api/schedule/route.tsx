import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: any) {
  const result = await prisma.schedule.findMany({});
  return NextResponse.json(result);
}

export async function POST(req: any) {
  const res = await req.json();
  if (res.id) {
    const result = await prisma.schedule.update({
      where: { id: res.id },
      data: { ...res, id: undefined },
    });
    revalidatePath("/admin/schedule");
    return NextResponse.json(result);
  } else if (!res.id) {
    const result = await prisma.schedule.create({ data: res });
    revalidatePath("/admin/schedule");
    return NextResponse.json(result);
  }
}

export async function DELETE(req: any) {
  const id = await req.json();
  const result = await prisma.schedule.delete({
    where: { id: id },
  });
  revalidatePath("/admin/schedule");
  return NextResponse.json(result);
}
