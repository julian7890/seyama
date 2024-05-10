import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: any) {
  const result = await prisma.profile.findMany({});
  return NextResponse.json(result);
}

export async function POST(req: any) {
  const res = await req.json();
  const result = await prisma.profile.update({
    where: { id: res.id },
    data: { ...res, id: undefined },
  });
  return NextResponse.json(result);
}

export async function DELETE(req: any) {
  const id = await req.json();
  const result = await prisma.profile.delete({
    where: { id: id },
  });
  revalidatePath("/admin/profile");
  return NextResponse.json(result);
}
