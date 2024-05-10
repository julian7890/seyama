import HomePage from "../components/ui/HomePage";
import prisma from "../../../lib/prisma";

export default async function Home() {
  const bioData = await prisma.profile.findUnique({
    where: { id: "663e2ea55ccb92e4cd356ba6" },
  });

  return <HomePage bioData={bioData} />;
}
