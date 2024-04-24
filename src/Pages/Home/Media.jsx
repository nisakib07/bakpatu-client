import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Heading from "../../components/Heading";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Wrapper from "../../components/Wrapper";

const Media = () => {
  const { data: news = [], isFetching } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get("./news.json");
      return res?.data;
    },
  });
  return (
    <div>
      <Heading title={"গণমাধ্যমে বাকপটু"}></Heading>

      <Wrapper>
        <div className="my-16">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper">
            <div>
              {news?.map((singleNews) => (
                <SwiperSlide
                  className="bg-gray p-3 rounded-lg"
                  key={singleNews?.id}>
                  <img className="rounded-lg" src={singleNews?.image} alt="" />
                  <h1 className="mt-4 text-lg">
                    {singleNews?.heading.slice(0, 50)}
                  </h1>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};

export default Media;
