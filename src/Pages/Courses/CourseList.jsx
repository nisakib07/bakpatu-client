import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  const {
    data: courses = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("/courses.json");
      return res?.data;
    },
  });

  return (
    <div className="grid grid-cols-3 gap-2">
      {courses?.map((course) => (
        <div key={course?.id} className="mt-3 shadow-2xl p-3 rounded-lg mr-4">
          <img
            className="w-full h-[200px] rounded-lg"
            src={course?.bannerImg}
            alt=""
          />
          <div className="mt-3">
            <h1 className="text-xl font-semibold">{course?.courseName}</h1>
            <p className="mt-2 text-lg">
              <span className="font-semibold">Duration : </span>
              {course?.durationHours}
            </p>

            <Link to={`/bpbpadmin/adminCourseDetails/${course?.id}`}>
              <p className="bg-green-500 w-32 text-center py-2 rounded-lg mt-2 text-gray-800 font-medium">
                View Details
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
