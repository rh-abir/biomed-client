import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostListCard = ({ postItems }) => {
  const { _id, title, photo } = postItems;

  return (
    <>
      <tr>
        <td className="py-2 md:py-4">
          <img
            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover ml-5"
            src={photo}
            alt=""
          />
        </td>
        <td className="py-2 md:py-4">
          <p className="font-medium text-xs md:text-lg text-start p-4">{title}</p>
        </td>
        <td>
          <Link to={`/community/postDetails/${_id}`}>
            <p className="ml-4">
              <FaEye className="w-3 h-3 md:w-4 md:h-4" />
            </p>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default PostListCard;
