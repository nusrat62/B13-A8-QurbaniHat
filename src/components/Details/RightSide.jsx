"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RightSide = () => {

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // submit function
  const getSubmit = async (userData) => {

    console.log(userData);

    reset();

    toast.success("Booking Confirmed!");
  };

  return (
    <div className="card shadow-2xl p-8 bg-white w-[380px] rounded-3xl border border-gray-100">

      {/* Title */}
      <h2 className="text-[2rem] text-[#2D6A4F] font-bold mb-6 text-center">
        Book This Animal
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit(getSubmit)}
        className="space-y-4"
      >

        {/* Name */}
        <div>

          <label className="block mb-2 font-medium text-gray-700">
            Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
          />

          {
            errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )
          }

        </div>

        {/* Email */}
        <div>

          <label className="block mb-2 font-medium text-gray-700">
            Email
          </label>

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
          />

          {
            errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )
          }

        </div>

        {/* Phone */}
        <div>

          <label className="block mb-2 font-medium text-gray-700">
            Phone Number
          </label>

          <input
            {...register("phone", {
              required: "Phone Number is required",
            })}
            type="text"
            placeholder="Your Phone Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
          />

          {
            errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )
          }

        </div>

        {/* Address */}
        <div>

          <label className="block mb-2 font-medium text-gray-700">
            Address
          </label>

          <input
            {...register("address", {
              required: "Address is required",
            })}
            type="text"
            placeholder="Your Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#40916C]"
          />

          {
            errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )
          }

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#40916C] hover:bg-[#2D6A4F] text-white font-semibold py-3 rounded-xl transition mt-4"
        >
          Confirm Booking
        </button>

      </form>
    </div>
  );
};

export default RightSide;