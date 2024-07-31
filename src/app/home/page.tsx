import HomePage from "../components/ui/HomePage";
import prisma from "../../../lib/prisma";

export const revalidate = 0;

export default async function Home() {
  const bioData = await prisma.profile.findUnique({
    where: { id: "663e2ea55ccb92e4cd356ba6" },
  });
  const newsData = await prisma.news.findMany({});
  const scheduleData = await prisma.schedule.findMany({});

  return (
    <HomePage
      bioData={bioData}
      newsData={newsData}
      scheduleData={scheduleData}
    />
  );
}
