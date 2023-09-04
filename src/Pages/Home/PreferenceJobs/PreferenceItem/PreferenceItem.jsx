import React from "react";
import quoteImg from '../../../../assets/quote/quote.png'

const PreferenceItem = ({ task }) => {
  const {
    ceo_image,
    ceo_name,
    task_text
  } = task;


  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden w-100">
      <div className="p-4 text-center">
        <div className="mt-4">
          <img
            className="w-12 h-12 mx-auto mb-2 object-cover"
            src={quoteImg}
            alt="Testimonials Icon"
          />
          <h2 className="text-xl font-semibold">{ceo_name}</h2>
          <p className="text-gray-600 mt-2">{task_text}</p>
        </div>
        <img
          className="w-16 h-16 mx-auto rounded-full mt-4"
          src={ceo_image}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default PreferenceItem;
