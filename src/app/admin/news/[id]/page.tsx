import prisma from "../../../../../lib/prisma";
import EditNewsForm from "@/app/components/admin/EditNewsForm";

export const dynamic = "force-dynamic";

export default async function EditNewsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.news.findUnique({ where: { id: params.id } });

  return <EditNewsForm news={data} />;
}
