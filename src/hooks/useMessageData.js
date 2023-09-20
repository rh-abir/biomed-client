import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMessageData = () => {
  const { user, clientRole } = useContext(AuthContext);
  const currentUserEmail = user?.email;

  const { data: getApplyMessage = [], refetch } = useQuery({
<<<<<<< HEAD

=======
    // queryFn: async () => {
    //   if (clientRole) {
    //     // Fetch data for clients
    //     const res = await fetch(
    //       `https://biomed-server.vercel.app/get/clientData`
    //     );
    //     return res.json();
    //   } else {
    //     // Fetch data for non-clients
    //     const res = await fetch(
    //       `https://biomed-server.vercel.app/get/nonClientData`
    //     );
    //     return res.json();
    //   }
    // },
>>>>>>> 22fc0655d8544ff66220d28cee9e3240c8e82fd2

    queryKey: ["allApplyJob", currentUserEmail],
    queryFn: async () => {
      if (clientRole) {
        const res = await fetch(
          `https://biomed-server.vercel.app/get/appliedtask/${currentUserEmail}`
        );
        return res.json();
      } else {
        const res = await fetch(
          `https://biomed-server.vercel.app/user/appliedtask/${currentUserEmail}`
        );
        return res.json();
      }
    },
  });

  return [getApplyMessage, refetch];
};

export default useMessageData;
