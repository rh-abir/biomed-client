import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Container from "../../../../components/Shared/Container/Container";
import OurTeam from "./OurTeam/OurTeam";

const AboutDetails = () => {
  //   Getting data for Default value
  const { data: aboutUs = [] } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/aboutDetails");
      return res?.data;
    },
  });

  // console.log("About Us Details data", aboutUs[0]?.descOne);

  return (
    <Container>
      <div className="pt-28 md:pt-24 xl:pt-32 pb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-600 dark:text-slate-400 mb-4">
          About Us
        </h2>
        <div className="mx-auto flex flex-col lg:flex-row items-center">
          {/* Image*/}
          <div className="w-full lg:w-1/2 mb-6 md:mb-0 md:mr-6">
            <img
              src="https://i.ibb.co/jhh5rzh/about-us.png"
              alt="About Us"
              className="mx-auto md:mx-0 rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="mb-4">{aboutUs[0]?.descOne}</p>
            <p className="mb-4">{aboutUs[0]?.descTwo}</p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2 text-lg">&#10003;</span>
                <p>{aboutUs[0]?.pointOne}</p>
              </div>
              <div className="flex items-center mb-2 text-lg">
                <span className="text-green-500 mr-2">&#10003;</span>
                <p>{aboutUs[0]?.pointTwo}</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2 text-lg">&#10003;</span>
                <p>{aboutUs[0]?.pointThree}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Team Members */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-600 dark:text-slate-400 mb-4 mt-10">
          Meet Our Team
        </h2>
        <OurTeam />
      </div>
    </Container>
  );
};

export default AboutDetails;
