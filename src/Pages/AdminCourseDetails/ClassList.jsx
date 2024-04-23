import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const ClassList = ({ id }) => {
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("/classes.json");
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className=" flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold ">Class List</h1>

        <Link to={`/bpbpadmin/addClass/${id}`}>
          <button className="text-3xl">
            <IoIosAddCircleOutline></IoIosAddCircleOutline>
          </button>
        </Link>
      </div>

      <div>
        {classes?.map((singleClass) => (
          <div key={singleClass?.id} className=" mb-3 p-1 flex gap-4">
            <p>{singleClass.serialNo}.</p>
            <img
              className="w-12"
              src="https://i.ibb.co/T23yNCw/web.jpg"
              alt=""
            />

            <p>
              {/* {singleClass?.serialNo} */}
              {singleClass?.title}
            </p>
          </div>
        ))}
      </div>

      <hr className=" border-1 m-6 border-black" />
    </div>
  );
};

export default ClassList;
