import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Wrapper from "../../components/Wrapper";

const Reviews = () => {
  const { data: reviews = [], isFetching } = useQuery({
    queryKey: ["Allreviews"],
    queryFn: async () => {
      const res = await axios.get("./reviews.json");
      return res?.data;
    },
  });

  return (
    <div className="mt-28">
      <Heading title={"বাকপটু নিয়ে কে কী ভাবছে?"}></Heading>

      <Wrapper>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper h-[500px] my-16 shadow-xl rounded-lg bg-gray"
          style={{
            backgroundImage: `url('https://i.ibb.co/TcGmhwt/left-quote.png)`,
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",

            backgroundSize: "100px",
          }}>
          {reviews?.map((review) => (
            <SwiperSlide key={review?.id}>
              <div className="flex flex-col justify-center items-center max-w-[500px] mx-auto text-center h-full">
                <img className="w-60 rounded-full" src={review?.img} alt="" />
                <p className="text-lg font-medium mt-8">{review?.review}</p>
                <h1 className="mt-8 text-2xl font-semibold">{review?.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
};

export default Reviews;
