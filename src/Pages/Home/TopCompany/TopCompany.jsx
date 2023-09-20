import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/marquee/com-1.png";
import logo8 from "../../../assets/marquee/com-11.png";
import logo2 from "../../../assets/marquee/com-2.png";
import logo3 from "../../../assets/marquee/com-3.png";
import logo4 from "../../../assets/marquee/com-4.png";
import logo5 from "../../../assets/marquee/com-5.png";
import logo6 from "../../../assets/marquee/com-6.png";
import logo7 from "../../../assets/marquee/com-8.png";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const TopCompany = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };
  return (
    <Container>
      <SectionTitle
        heading="Top Companies"
        text="Industry Leaders Rely on Us"
      ></SectionTitle>
      <hr />
      <Marquee
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        speed={40}
        gradient={false}
        pauseOnHover={!isPaused}
        className="mt-10 mb-20 cursor-pointer"
      >
        <img
          className="mr-12 w-[150px] object-contain h-[52px] lg:w-[180px]"
          src={logo1}
          alt=""
        />
        <img
          className="mr-12 w-[150px] object-contain h-[52px] lg:w-[180px]"
          src={logo2}
          alt=""
        />
        <img
          className="mr-12 w-[150px] object-contain h-[52px] lg:w-[120px]"
          src={logo3}
          alt=""
        />
        <img
          className="mr-12 w-[100px] object-contain h-[52px] lg:w-[120px]"
          src={logo4}
          alt=""
        />
        <img
          className="mr-12 mt-2 w-[100px] object-contain h-[37px] lg:w-[150px]"
          src={logo5}
          alt=""
        />
        <img
          className="mr-12 w-[100px] object-contain h-[52px] lg:w-[150px]"
          src={logo6}
          alt=""
        />
        <img
          className="mr-12 w-[100px] object-contain h-[52px] lg:w-[150px]"
          src={logo7}
          alt=""
        />
        <img
          className="mr-12 w-[100px] object-contain h-[52px] lg:w-[150px]"
          src={logo8}
          alt=""
        />
      </Marquee>
    </Container>
  );
};

export default TopCompany;
