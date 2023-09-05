import React from "react";
import Container from "../../../components/Shared/Container/Container";
import SearchForm from "../../Shared/Header/SearchForm/SearchForm";
import banner from "../../../assets/banner/banner.png"
const Banner = () => {
  return (
    <div className="bg-green-200">
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center md:min-h-[calc(100vh-20px)]">
        <div>
          <div className="flex flex-col h-full justify-center">
            <h1 className="md:text-3xl lg:text-6xl text-2xl py-5 md:mt-4 font-semibold dark:text-slate-200 text-slate-700">
            Empower Your Tasks: TaskEval's Evaluation Platform..!
            </h1>
            <p className="md:my-2 font-semibold pb-3">
              Millions of people use BIOMED. to turn their ideas into reality.
            </p>
            <SearchForm />
          </div>
        </div>

        <div className="hidden md:block">
          <img src={banner} alt="" />
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Banner;
