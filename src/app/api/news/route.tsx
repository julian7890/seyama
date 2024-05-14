import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: any) {
  const result = await prisma.news.findMany({});
  return NextResponse.json(result);
}

export async function POST(req: any) {
  const res = await req.json();
  if (!res.id) {
    const result = await prisma.news.create({
      data: res,
    });
    revalidatePath("/admin/news");
    return NextResponse.json(result);
  } else {
    const result = await prisma.news.update({
      where: { id: res.id },
      data: { ...res, id: undefined },
    });
    revalidatePath("/admin/news", "page");
    revalidatePath(`/admin/news/[id]`, "page");
    return NextResponse.json(result);
  }
}

export async function DELETE(req: any) {
  const id = await req.json();
  const result = await prisma.news.delete({
    where: { id: id },
  });
  revalidatePath("/admin/news");
  return NextResponse.json(result);
}
