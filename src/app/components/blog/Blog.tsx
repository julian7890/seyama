import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className="flex flex-wrap justify-around gap-4 py-8">
      <BlogCard
        title={"First Blog"}
        date={"4/28/24"}
        pic={"/resources/img/outshot.jpg"}
      />
      <BlogCard
        title={"Second Blog"}
        date={"4/29/24"}
        pic={"/resources/img/archway.webp"}
      />
      <BlogCard
        title={"Third Blog"}
        date={"4/30/24"}
        pic={"/resources/img/headshot1.jpeg"}
      />
      <BlogCard
        title={"Fourth Blog"}
        date={"5/1/24"}
        pic={"/resources/img/sofa.jpg"}
      />
    </div>
  );
}
