import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialItem = ({ userFeedback }) => {
  const { user_image, user_name, feedback, ratings } = userFeedback;
  console.log("userFeedback", userFeedback);
  const ratingValue = parseInt(ratings);

  return (
    <div
      className="my-20 border shadow-sm rounded-md"
    >
      <div className="px-3 py-16 flex h-[450px] items-center flex-col bg-white dark:bg-gray-700 rounded-lg">
        <div className="absolute top-5">
          <img
            className="w-40 h-40 object-cover rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-800"
            src={user_image}
            alt="testimonial-image"
          />
        </div>
        <h2 className="pt-16 text-2xl font-bold pb-3">{user_name}</h2>
        <div className="mb-6">
          <Rating style={{ maxWidth: 160 }} value={ratingValue} readOnly />
        </div>
        <div className="text-5xl text-primary">
          <ImQuotesLeft />
        </div>
        <div>
          <p className="text-center">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
