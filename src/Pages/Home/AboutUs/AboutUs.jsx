import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const AboutUs = () => {
  //   Getting data for Default value
  const { data: aboutUs = [] } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/aboutDetails");
      return res?.data;
    },
  });

  // console.log("Home About data", aboutUs[0]?.descOne);

  return (
    <Container>
      <div className="py-10 md:py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Image*/}
          <div
            className="w-full lg:w-1/2 mb-6 md:mb-0 md:mr-6"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <img
              src="https://i.ibb.co/jhh5rzh/about-us.png"
              alt="About Us"
              className="mx-auto md:mx-0 rounded-lg"
            />
          </div>

          {/* Content */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 mb-4">
              About Us
            </h2>
            <p className="mb-4">{aboutUs[0]?.descOne}</p>
            <p className="mb-4">{aboutUs[0]?.descTwo}</p>
            <Link to="/about-details">
              <button className="flex items-center justify-center gap-1 text-[#5BBB7B] border-[3px] border-[#5BBB7B] hover:bg-[#5BBB7B] hover:text-white hover:border-[#5BBB7B] rounded px-2 py-2 md:px-5 md:py-3 duration-500 text-sm md:text-lg font-semibold">
                More About Us <BsArrowUpRight className="mt-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
