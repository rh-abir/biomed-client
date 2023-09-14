import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useTasktData = () => {
  const { user, loading } = useContext(AuthContext);

  const currentUserEmail = user.email;

  const { data: allApplayJobs = [], refetch } = useQuery({
    queryKey: ["allApplyJob", currentUserEmail],
    queryFn: async () => {
      const res = await fetch(
        `https://biomed-server.vercel.app/allApplyJob?email=${currentUserEmail}`
      );
      return res.json();
    },
  });

  return [allApplayJobs, refetch, loading];
};

export default useTasktData;
