import Edit from "@/app/components/admin/Edit";
import prisma from "../../../../../lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditSchedulePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.schedule.findUnique({ where: { id: params.id } });
  const dateData = new Date(data!.date);
  const year = dateData.getFullYear();
  const month = String(dateData.getMonth() + 1).padStart(2, "0");
  const day = String(dateData.getDate() + 1).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  data!.date = formattedDate;

  return <Edit schedule={data} />;
}
