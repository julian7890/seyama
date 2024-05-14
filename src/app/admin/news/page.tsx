import prisma from "../../../../lib/prisma";
import EditNews from "@/app/components/admin/EditNews";

export default async function newsEditPage() {
  const newsData = await prisma.news.findMany({});
  return <EditNews newsData={newsData} />;
}
