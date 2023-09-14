import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMessageData = () => {
  const user = useContext(AuthContext);
  const currentUserEmail = user?.user?.email;

  const { data: getApplayMessage = [], refetch } = useQuery({
    queryKey: ["allApplyJob", currentUserEmail],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/get/appliedtask/${currentUserEmail}`
      );
      return res.json();
    },
  });

  return [getApplayMessage, refetch];
};

export default useMessageData;
