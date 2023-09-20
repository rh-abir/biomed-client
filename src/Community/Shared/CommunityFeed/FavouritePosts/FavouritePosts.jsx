import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import PostListCard from "./PostListCard/PostListCard";

const FavouritePosts = () => {
  const { user } = useContext(AuthContext);

  const { data: favouritePosts = [] } = useQuery({
    queryKey: ["favouritePosts"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/favouritePosts/${user?.email}`
      );
      return res.data;
    },
  });
  console.log(favouritePosts);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="m-2 lg:m-3 xl:mx-auto">
          <thead className="bg-gray-50 text-green-400">
            <tr>
              <th className="text-start p-4 text-sm lg:text-base">Image</th>
              <th className="text-start p-4 text-sm lg:text-base">Title</th>
              <th className="text-start pe-4 text-sm lg:text-base">Details</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {favouritePosts.length === 0 ? (
              <tr className="">
                <td colSpan="4" className="text-center py-4 px-[118px] md:px-60 text-gray-500">
                You have not selected any favorite posts yet!
                </td>
              </tr>
            ) : (
              favouritePosts.map((favourite) => (
                <PostListCard
                  key={favourite.post._id}
                  postItems={favourite.post}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouritePosts;
