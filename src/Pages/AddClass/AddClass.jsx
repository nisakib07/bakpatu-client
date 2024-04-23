import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const AddClass = () => {
  const { id } = useParams();
  console.log(id);
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
      <h1 className="text-2xl font-semibold mb-4">Add New Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="courseName"
              className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Class Title..."
              {...register("title", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="serial"
              className="block text-sm font-bold text-gray-700 mb-2">
              Serial
            </label>
            <input
              type="number"
              placeholder="Serial No..."
              id="serial"
              {...register("serial", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.serial && (
              <span className="text-red-500">Serial is required</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="videoURL"
              className="block text-sm font-bold text-gray-700 mb-2">
              Video URL
            </label>
            <input
              type="text"
              id="videoURL"
              placeholder="Duration of the course..."
              {...register("videoURL", { required: true })}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.videoURL && (
              <span className="text-red-500">Video URL is required</span>
            )}
          </div>

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
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
