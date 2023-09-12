import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import AdminMenu from "../../DashboardAdmin/AdminMenu/AdminMenu";
import CandidateMenu from "../../DashboardCandidate/CandidateMenu/CandidateMenu";
import ClientMenu from "../../DashboardClient/ClientMenu/ClientMenu";

const Sidebar = () => {
  const { clientRole, adminRole } = useContext(AuthContext);

  return (
    <div className="fixed top-[100px] z-40 overflow-x-scroll dark:bg-gray-800 dark:text-white">
      {adminRole ? (
        <AdminMenu />
      ) : clientRole ? (
        <ClientMenu />
      ) : (
        <CandidateMenu />
      )}
    </div>
  );
};

export default Sidebar;
