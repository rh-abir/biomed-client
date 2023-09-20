import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SingleCategory from "./singleCategory/SingleCategory";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import Container from "../../../components/Shared/Container/Container";

const Categorys = () => {
  const [categorysData, setCategorysData] = useState([]);
  const isLoading = categorysData.length === 0;

  useEffect(() => {
    fetch("categorysData/categorys.json")
      .then((res) => res.json())
      .then((data) => setCategorysData(data));
  }, []);

  return (
    <Container>
      <SectionTitle
        heading={
          isLoading ? (
            <Skeleton height={30} width={200} />
          ) : (
            "Browse talent by category"
          )
        }
        text={
          isLoading ? (
            <Skeleton height={20} width={300} />
          ) : (
            "Get some Inspirations from 1800+ skills"
          )
        }
      ></SectionTitle>
      <SkeletonTheme color="#e0e0e0" highlightColor="#f0f0f0">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-offset="200"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
        >
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="border px-9 py-10 hover:border-slate-600 rounded-md transition"
                >
                  <Skeleton height={50} width={50} />
                  <Skeleton height={20} width={120} />
                  <Skeleton height={20} width={250} />
                  <Skeleton height={20} width={300} />
                  <Skeleton height={20} width={180} />
                </div>
              ))
            : categorysData?.map((items, index) => (
                <SingleCategory items={items} key={index}></SingleCategory>
              ))}
        </div>
      </SkeletonTheme>
    </Container>
  );
};

export default Categorys;
