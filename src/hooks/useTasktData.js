import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useTasktData = () => {
  const user = useContext(AuthContext);
  const currentUserEmail = user.user.email;

  const { data: allApplayJobs = [], refetch } = useQuery({
    queryKey: ["allApplyJob", currentUserEmail],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/allApplyJob?email=${currentUserEmail}`
      );
      return res.json();
    },
  });

  return [allApplayJobs, refetch];
};

export default useTasktData;
