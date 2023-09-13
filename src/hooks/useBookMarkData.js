import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useBookMarkData = () => {
  const user = useContext(AuthContext);
  const currentUserEmail = user.user.email;

  const { data: bookMarkJobs = [], refetch } = useQuery({
    queryKey: ["Bookmark", currentUserEmail],
    queryFn: async () => {
      const res = await fetch(
        `https://biomed-server.vercel.app/bookmark?email=${currentUserEmail}`
      );
      return res.json();
    },
  });

  return [bookMarkJobs, refetch];
};

export default useBookMarkData;
