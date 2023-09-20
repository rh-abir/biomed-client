import React from "react";
import banner from "../../../assets/banner/banner.png";
import Container from "../../../components/Shared/Container/Container";
import SearchForm from "../../Shared/Header/SearchForm/SearchForm";

const Banner = () => {
  return (
    <div className="bg-green-200 dark:bg-gray-800 pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center md:min-h-[calc(100vh-60px)]">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <div className="flex flex-col h-full justify-center">
              <h1 className="md:text-3xl lg:text-6xl text-2xl py-5 md:mt-4 font-semibold dark:text-slate-200 text-slate-700">
                Empower Your Tasks: Biomed Evaluation Platform..!
              </h1>
              <p className="md:my-2 font-semibold pb-3">
                Millions of people use BIOMED. to turn their ideas into reality.
              </p>
              <SearchForm />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-offset="200"
            className="hidden md:block"
          >
            <img src={banner} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
