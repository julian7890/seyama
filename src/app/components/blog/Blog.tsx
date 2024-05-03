"use client";
import BlogCard from "./BlogCard";
import Image from "next/image";
import violin from "../../../../public/resources/img/violin.jpg";
import classes from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={`${classes.bgMove}`}>
      <div className={`absolute overflow-hidden w-full h-full -z-10`}>
        <Image
          src={violin}
          fill
          alt="violin"
          className={`-z-10 opacity-50 object-cover scale-150`}
          priority
        />
      </div>
      <div className="text-4xl text-white text-center pt-4">BLOG</div>
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
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
        <BlogCard
          title={"Fourth Blog"}
          date={"5/1/24"}
          pic={"/resources/img/sofa.jpg"}
        />
      </div>
    </div>
  );
}
