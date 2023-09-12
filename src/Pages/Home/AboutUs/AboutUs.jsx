import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="py-10 md:py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
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
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 mb-4">
              About Us
            </h2>
            <p className="mb-4">
              Welcome! We're dedicated to revolutionizing the way job seekers
              find opportunities and demonstrate their skills. Our platform
              bridges the gap between job seekers and employers by offering a
              unique approach to evaluating candidates through real-world tasks.
            </p>
            <p className="mb-4">
              We believe in the power of showcasing skills through practical
              tasks, which helps employers make informed decisions based on
              actual performance rather than just resumes. Our mission is to
              empower job seekers to stand out and demonstrate their abilities
              while giving employers a reliable way to assess candidates.
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-green-500 mr-2 text-lg">&#10003;</span>
                <p>Quality and excellence in task evaluation.</p>
              </div>
              <div className="flex items-center mb-2 text-lg">
                <span className="text-green-500 mr-2">&#10003;</span>
                <p>Innovation and creativity in our approach.</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2 text-lg">&#10003;</span>
                <p>Enhancing job seeker and employer interactions.</p>
              </div>
            </div>
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
