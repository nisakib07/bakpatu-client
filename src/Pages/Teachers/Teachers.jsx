import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import TeachersRow from "./TeachersRow";

const Teachers = () => {
  const {
    data: teachers = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axios.get("/teachers.json");
      return res?.data;
    },
  });

  if (isFetching) {
    return <p>Fetching...</p>;
  }

  return (
    <div className="mt-4 mr-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">All Teachers</h1>
        <Link to="/bpbpadmin/addTeacher">
          <button className="btn bg-gray-700 hover:bg-gray-800 text-white">
            Add Teacher
          </button>
        </Link>
      </div>{" "}
      <div className="overflow-x-auto mt-4">
        <table className="table table-s">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Phone</th>
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers?.map((teacher) => (
              <TeachersRow key={teacher?.id} teacher={teacher}></TeachersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers;
