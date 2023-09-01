import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const BlogDetails = () => {
  const { _id, title, thumbnail, writer, intro ,description,conclusion } = useLoaderData();

  // Get the current date
  const currentDate = new Date();

  const formattedCurrentDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
   
    <div className="pt-20">
      <Container>
      <img
        className="w-full md:h-[400px] lg:h-[600px] mx-auto"
        src={thumbnail}
        alt=""
      />
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6">
        {title}
      </h1>
      <div className="py-10">
        <h2 className="text-lg md:text-xl font-semibold">
          {writer}
        </h2>
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
