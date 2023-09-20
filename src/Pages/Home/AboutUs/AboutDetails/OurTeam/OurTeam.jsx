import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";

const OurTeam = () => {
  const { isLoading, data: teamMembers = [] } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_BASE_URL}/teamMembers`);
      return res.data;
    },
  });
  console.log("Team Members", teamMembers);

  // To see recent member at the top
  const reversedTeamMembers = [...teamMembers].reverse();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {reversedTeamMembers.map((teamMember) => (
        <TeamMemberCard key={teamMember._id} teamMember={teamMember} />
      ))}
    </div>
    </>
  );
};

export default OurTeam;
