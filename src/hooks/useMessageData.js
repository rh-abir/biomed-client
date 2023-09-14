import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMessageData = () => {
  const user = useContext(AuthContext);
  const currentUserEmail = user?.user?.email;

  const { data: getApplyMessage = [], refetch } = useQuery({
    queryKey: ["allApplyJob", currentUserEmail],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/get/appliedtask/${currentUserEmail}`
      );
      return res.json();
    },
  });

  return [getApplyMessage, refetch];
};

export default useMessageData;
