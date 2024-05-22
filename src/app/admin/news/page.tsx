import prisma from "../../../../lib/prisma";
import EditNews from "@/app/components/admin/EditNews";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function newsEditPage() {
  const newsData = await prisma.news.findMany({});
  return <EditNews newsData={newsData} />;
}
