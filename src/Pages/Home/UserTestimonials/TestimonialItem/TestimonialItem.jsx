import React from "react";
import quoteImg from '../../../../assets/quote/quote.png';

const TestimonialItem = ({ task }) => {
    // const {user} = useContext(AuthContext);
  const {
    user_image,
    user_name,
    feedback
  } = task;

  

  return (
    <div className="bg-white hover:bg-green-200 duration-500 cursor-pointer dark:bg-gray-800 shadow-md rounded-lg overflow-hidden w-full h-[350px]">
      <div className="p-4 text-center">
        <div className="mt-4">
          <img
            className="w-12 h-12 mx-auto mb-2 object-cover"
            src={quoteImg}
            alt="Testimonials Icon"
          />
          <h2 className="text-xl font-semibold">{user_name}</h2>
          <p className="text-gray-600 mt-2">{feedback}</p>
        </div>
        <img
          className="w-24 h-24 mx-auto rounded-full mt-4"
          src={user_image}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default TestimonialItem;
