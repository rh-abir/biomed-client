import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

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
  return <div>
    <p>Hello {user?.displayName}! Your Selected Favourite Posts List</p>
    {
        favouritePosts?.map(favourite=><p>{favourite.post.category}</p>)
    }
  </div>;
};

export default FavouritePosts;
