import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import PreferenceItem from "./PreferenceItem/PreferenceItem";

const PreferenceJobs = () => {
  const { isLoading, data: preference = [] } = useQuery({
    queryKey: ["preference"],
    queryFn: async () => {
      const res = await axios("preferencesData.json");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(preference);

  return (
    <div className="bg-[#f4fdf4] py-10">
      <Container>
        <SectionTitle
          heading={"Preference jobs"}
          text={"Here is your preference jobs"}
        />
        <Swiper
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          loop={true} 
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3, 
            },
            1440: {
              slidesPerView: 4, 
            },
          }}
        >
          {preference.map((pre, index) => (
            <SwiperSlide key={index}>
              <PreferenceItem data={pre} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default PreferenceJobs;
