import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const BlogDetails = () => {
  const { _id, title, writer_img, thumbnail, writer, intro, description, conclusion } =
    useLoaderData();

  // Get the current date
  const currentDate = new Date();

  const formattedCurrentDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="pt-5">
      <Container>
        <h1 className="text-xl mb-3 md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6">
          {title}
        </h1>
        <img
          className="w-full object-cover rounded-md"
          src={thumbnail}
          alt="blog details"
        />
        <div className="py-10 flex gap-2 items-center">
          <img src={writer_img} className="w-12 h-12 object-cover rounded-full" alt="" />
          <h2 className="text-lg md:text-xl font-semibold">{writer}</h2>
        </div>
        <div>
          <div className="space-y-6 pb-10 text-base Lg:text-lg">
            <p>{intro}</p>
            <p>{description}</p>
            <p>{conclusion}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
