import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddCourse = () => {
  const { data: categoryList = [], isFetching } = useQuery({
    queryKey: ["categoryList"],
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

  const onSubmit = (data) => {
    // You can handle form submission here
    console.log(data);
  };

  return (
    <div className=" mx-auto mt-4 mr-4">
      <h1 className="text-2xl font-semibold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="courseName"
              className="block text-gray-700 text-sm font-bold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              placeholder="Course name..."
              {...register("courseName", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.courseName && (
              <span className="text-red-500">Course name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-bold text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              placeholder="Price..."
              id="price"
              {...register("price", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="duration"
              className="block text-sm font-bold text-gray-700 mb-2">
              Duration (hours)
            </label>
            <input
              type="number"
              id="duration"
              placeholder="Duration of the course..."
              {...register("duration", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.duration && (
              <span className="text-red-500">Duration is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="videoUrl"
              className="block text-sm font-bold text-gray-700 mb-2">
              Intro Video URL
            </label>
            <input
              type="text"
              placeholder="Introductory video URL..."
              id="videoUrl"
              {...register("videoUrl", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.videoUrl && (
              <span className="text-red-500">Intro video URL is required</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="bannerImg"
              className="block text-sm font-bold text-gray-700 mb-2">
              Banner
            </label>
            <input
              type="file"
              id="bannerImg"
              {...register("bannerImg", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.bannerImg && (
              <span className="text-red-500">Banner image URL is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-bold text-gray-700 mb-2">
              Category
            </label>

            <select
              defaultValue="default"
              id="category"
              {...register("category", { required: true })}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline">
              <option value="default" disabled>
                Select a category...
              </option>
              {categoryList?.map((category) => (
                <option>{category?.category}</option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-bold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
