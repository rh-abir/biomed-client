import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMessageData = () => {
  const { user, clientRole } = useContext(AuthContext);
  const currentUserEmail = user?.email;

  const { data: getApplyMessage = [], refetch } = useQuery({
    // queryFn: async () => {
    //   if (clientRole) {
    //     // Fetch data for clients
    //     const res = await fetch(
    //       `${import.meta.env.VITE_BASE_URL}/get/clientData`
    //     );
    //     return res.json();
    //   } else {
    //     // Fetch data for non-clients
    //     const res = await fetch(
    //       `${import.meta.env.VITE_BASE_URL}/get/nonClientData`
    //     );
    //     return res.json();
    //   }
    // },

    queryKey: ["allApplyJob", currentUserEmail],
    queryFn: async () => {
      if (clientRole) {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/get/appliedtask/${currentUserEmail}`
        );
        return res.json();
      } else {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/user/appliedtask/${currentUserEmail}`
        );
        return res.json();
      }
    },
  });

  return [getApplyMessage, refetch];
};

export default useMessageData;
