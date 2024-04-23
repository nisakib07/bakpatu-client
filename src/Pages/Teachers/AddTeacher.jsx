import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // To set initial image value if needed
  } = useForm();

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    image: null,
    description: "", // Include description field if needed
  });

  const onSubmit = async (data) => {
    const formDataToSend = new FormData();

    const teacherData = {
      name: data?.name,
      designation: data?.designation,
      email: data?.email,
      phone: data?.phone,
      image: data?.image,
      description: data?.description,
    };

    formDataToSend.append("name", teacherData?.name);
    console.log(formDataToSend);

    // try {
    //   const response = await axios.post("YOUR_BACKEND_URL", formDataToSend, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log(response.data);
    //   // Handle success (e.g., redirect, display confirmation message)
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   // Handle errors (e.g., display error message)
    // }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFormData({ ...formData, image: event.target.files[0] });
      setValue("image", event.target.files[0]); // Set image value in form data
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-xl font-semibold">Add Teacher</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
        {/* Form fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter name..."
              id="name"
              {...register("name", { required: true })} // Use register with validation
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <span className="text-red-500">
                {errors.name.message || "Name is required"}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="designation"
              className="block text-gray-700 text-sm font-bold mb-2">
              Designation:
            </label>
            <input
              type="text"
              placeholder="Enter designation..."
              id="designation"
              {...register("designation", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.designation && (
              <span className="text-red-500">
                {errors.designation.message || "Designation is required"}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter email..."
              id="email"
              {...register("email", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email.message || "Email is required"}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              placeholder="Enter phone..."
              id="phone"
              {...register("phone", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.phone && (
              <span className="text-red-500">
                {errors.phone.message || "Phone is required"}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="image"
              {...register("image", { required: true })}
              //   onChange={handleImageChange} // Call handleImageChange on file change
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.image && (
              <span className="text-red-500">Image is required</span>
            )}
          </div>
          {/* Description field */}
          <div className="mb-4 col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Enter description..."
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
