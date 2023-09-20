import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import SpecificCategoryCard from "./SpecificCategoryCard";

const SpecificCategory = () => {
  const { title } = useParams();

  const [specificCategoryData, setSpecificCategoryData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/categoryjobs/?industry=${title}`)
      .then((res) => res.json())
      .then((data) => setSpecificCategoryData(data));
  }, [title]);

  return (
    <div className="pt-32">
      <Container>
        <SectionTitle
          heading="Explore Task Categories"
          text="Discover a World of Opportunities"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-5 mb-6 md:col-span-4">
          {specificCategoryData?.map((singleData) => (
            <SpecificCategoryCard
              key={singleData._id}
              singleData={singleData}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SpecificCategory;
