import HomePage from "../components/ui/HomePage";
import prisma from "../../../lib/prisma";

export const revalidate = 0;

export default async function Home() {
  const bioData = await prisma.profile.findUnique({
    where: { id: "663e2ea55ccb92e4cd356ba6" },
  });
  const newsData = await prisma.news.findMany({});
  const scheduleData = await prisma.schedule.findMany({});

  const sortNewsData = newsData.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const sortScheduleData = scheduleData.sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <HomePage
      bioData={bioData}
      newsData={sortNewsData}
      scheduleData={sortScheduleData}
    />
  );
}
