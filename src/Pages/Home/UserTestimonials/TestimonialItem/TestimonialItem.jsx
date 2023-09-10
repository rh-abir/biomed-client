import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialItem = ({ userFeedback }) => {
  const { user_image, user_name, feedback } = userFeedback;
  const [rating, setRating] = useState(4);
  return (
    <div className="my-20">
      <div className="px-3 py-16 flex items-center flex-col bg-white rounded-lg h-96 w-80"> {/* Adjust height and width here */}
        <div className="absolute top-5">
          <img
            className="w-40 h-40 object-cover rounded-full bg-gray-50 border-2 border-gray-200"
            src={user_image}
            alt="testimonial-image"
          />
        </div>
        <h2 className="pt-16 text-2xl font-bold pb-3">{user_name}</h2>
        <div className="mb-6">
          <Rating style={{ maxWidth: 160 }} value={rating} readOnly />
        </div>
        <div className="text-5xl text-primary">
          <ImQuotesLeft />
        </div>
        <div className="mt-auto">
          <p className="text-center">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;


