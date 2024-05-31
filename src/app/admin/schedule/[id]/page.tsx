import Edit from "@/app/components/admin/Edit";
import prisma from "../../../../../lib/prisma";
import moment from "moment";

export const dynamic = "force-dynamic";

export default async function EditSchedulePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.schedule.findUnique({ where: { id: params.id } });

  const dateData = moment(data!.date).format("YYYY-M-DD");

  data!.date = dateData;

  return <Edit schedule={data} />;
}
