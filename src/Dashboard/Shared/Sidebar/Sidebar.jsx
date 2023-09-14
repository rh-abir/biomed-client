import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import AdminMenu from "../../DashboardAdmin/AdminMenu/AdminMenu";
import CandidateMenu from "../../DashboardCandidate/CandidateMenu/CandidateMenu";
import ClientMenu from "../../DashboardClient/ClientMenu/ClientMenu";
import ModeratorMenu from "../../DashboardModerator/ModeratorMenu/ModeratorMenu";
import Loader from "../../../components/Loader/Loader";

const Sidebar = () => {
  const { clientRole, adminRole, moderatorRole } = useContext(AuthContext);



  return (
    <div className="fixed top-[100px] z-40 overflow-x-scroll dark:bg-gray-800 dark:text-white">
      {adminRole ? (
        <AdminMenu />
      ) : clientRole ? (
        <ClientMenu />
      ) : moderatorRole ? (
        <ModeratorMenu />
      ) : (
        <CandidateMenu />
      )}
    </div>
  );
};

export default Sidebar;
