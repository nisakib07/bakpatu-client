import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";

const TeachersList = ({ id }) => {
  const {
    data: teachersList = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["teachersList"],
    queryFn: async () => {
      const res = await axios.get("/teachers.json");
      return res?.data;
    },
  });

  const addTeacher = (teacherID) => {};
  return (
    <div>
      <h1 className="text-xl font-semibold ">Teachers</h1>

      {teachersList?.map((teacher, idx) => (
        <div key={teacher?.id} idx={idx} className=" text-lg font-medium my-2">
          <div className="flex items-center justify-between mr-4">
            <div className="flex gap-2">
              <p>{idx + 1}. </p>
              <p>{teacher?.name}</p>
            </div>

            <div
              className="text-2xl hover:cursor-pointer"
              onClick={() => addTeacher(`${teacher?.id}`)}>
              <IoIosAddCircleOutline></IoIosAddCircleOutline>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeachersList;
