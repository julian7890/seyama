import NewsModal from "@/app/components/news/NewsModal";
import NewsDetail from "@/app/components/news/NewsDetail";
import prisma from "../../../../../../../lib/prisma";

type propsType = {
  params: { id: string };
};

export default async function NewsPage({ params: { id } }: propsType) {
  const news = await prisma.news.findUnique({ where: { id: id } });
  return (
    <NewsModal>
      <NewsDetail news={news} language={'japanese'}/>
    </NewsModal>
  );
}
