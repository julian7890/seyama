import prisma from "../../../../lib/prisma";

import { NextResponse } from "next/server";

export async function GET(request: any) {
  const result = await prisma.schedule.findMany({});
  return NextResponse.json(result);
}

export async function POST(request: any) {
  console.log(request);
  const uploadData = request;

  const result = await prisma.schedule.create({ data: uploadData });
  return NextResponse.json(result);
}
