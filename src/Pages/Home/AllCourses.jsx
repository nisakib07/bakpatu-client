import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { MdOutlineAirplay } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import Heading from "../../components/Heading";

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development"); // State for the selected category

  const {
    data: allCourses = [],
    refetch: refetchCourses,
    isFetching: coursesFetching,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("/courses.json");
      return res?.data;
    },
  });

  const { data: allCategories = [], isFetching: categoriesFetching } = useQuery(
    {
      queryKey: ["allCategories"],
      queryFn: async () => {
        const res = await axios.get("/categories.json");
        return res?.data;
      },
    }
  );

  // Function to handle tab click
  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* <h1 className="text-center text-6xl font-bold"></h1> */}

      <Heading title={"আমাদের কোর্সসমূহ"}></Heading>

      {/* Display tabs for each category */}
      <div className="flex justify-center my-16">
        {allCategories.map((category) => (
          <button
            key={category?.id}
            onClick={() => handleTabClick(category?.category)}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === category?.category
                ? "bg-first text-white"
                : "bg-gray hover:bg-hoverBG"
            }`}>
            {category.category}
          </button>
        ))}
      </div>

      {/* Display courses under selected category */}
      <Wrapper>
        <div className="">
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allCourses
                .filter((course) => course.category === selectedCategory)
                .map((course) => (
                  <div
                    key={course.id}
                    className="p-4 border rounded-lg my-2 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:cursor-pointer hover:border-first bg-gray">
                    <img
                      src={course.bannerImg}
                      alt={course.courseName}
                      className="w-full h-auto object-cover mb-4 rounded"
                    />
                    <h2 className="font-bold text-xl mt-3 mb-12">
                      {course.courseName}
                    </h2>

                    <div className="text-lg flex justify-between border-b-2 pb-5">
                      <div className="flex items-center gap-3">
                        <MdOutlineAirplay />
                        <p>১০ টি লাইভ ক্লাস</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <RiLiveLine></RiLiveLine>
                        <p>লাইভ</p>
                      </div>
                    </div>

                    <div className="text-lg flex justify-between items-center mt-3 font-semibold">
                      <p>${course.price}</p>
                      <p className="bg-first px-3 py-2 rounded-lg text-white">
                        {course.durationHours} hours
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default AllCourses;
