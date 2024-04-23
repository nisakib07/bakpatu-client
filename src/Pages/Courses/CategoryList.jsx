import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const CategoryList = () => {
  const { data: categories = [], isFetching } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("/categories.json");
      return res?.data;
    },
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="border-2 border-t-0 p-2 border-r-0 border-black">
      <h1 className="text-xl font-semibold mb-2">Categories</h1>
      {categories?.map((category) => (
        <div
          key={category?.id}
          className="border-2 border-gray-500 mb-3 p-1 flex justify-between items-center">
          <p>{category.category}</p>

          <FaRegEdit></FaRegEdit>
        </div>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2">
              Add Category
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Category name..."
                id="category"
                {...register("category", { required: true })} // Use register with validation
                className="input input-bordered py-2 px-3 text-gray-700 leading-tight "
              />

              <button type="submit" className="font-semibold text-xl">
                <IoIosAddCircleOutline></IoIosAddCircleOutline>
              </button>
            </div>
            {errors.category && (
              <span className="text-red-500 mt-2">
                {errors.category.message || "Category is required"}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoryList;
