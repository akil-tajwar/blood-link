import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiOutlineLock,
  AiFillHeart,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineCamera,
} from "react-icons/ai";
import {
  MdBloodtype,
  MdOutlineLocationOn,
  MdOutlineDateRange,
} from "react-icons/md";
import { FaGlobeAsia, FaCity } from "react-icons/fa";

const Signup = () => {
  const { signup } = useSignup();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    const role = "user"; // default
    await signup(
      data.name,
      data.email,
      data.phone,
      data.bloodGroup,
      data.password,
      role
    );
    setIsLoading(false);
  };

  const nextTab = () => setActiveTab((prev) => prev + 1);
  const prevTab = () => setActiveTab((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-[url(flower.jpg)] w-full overflow-hidden bg-fixed">
      <div className="relative z-10 flex flex-col bg-red-50 bg-opacity-60 items-center justify-center min-h-screen px-4 py-12">
        {/* Logo/Header */}
        <div className="mb-6 text-center">
          <Link to="/">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="relative">
                <AiFillHeart className="text-red-500 animate-pulse" size={32} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Blood Link
              </h1>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting lives, saving futures
            </p>
          </Link>
        </div>

        {/* Signup Card */}
        <div className="w-full max-w-lg">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-500 rounded-full mb-4 shadow-lg">
                <AiOutlineUser className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent mb-2">
                Join Blood Link
              </h2>
              <p className="text-gray-600">Create your account step by step</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* TAB 1: Basic Info */}
              {activeTab === 1 && (
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <AiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Enter full name"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        placeholder="Enter email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="pb-3">
                    <label className="block text-sm font-semibold mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <AiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        placeholder="Enter phone number"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={nextTab}
                    className="w-full bg-gradient-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* TAB 2: Location Info */}
              {activeTab === 2 && (
                <div className="space-y-5">
                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Country
                    </label>
                    <div className="relative">
                      <FaGlobeAsia className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("country", {
                          required: "Country is required",
                        })}
                        placeholder="Enter country"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      City
                    </label>
                    <div className="relative">
                      <FaCity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("city", { required: "City is required" })}
                        placeholder="Enter city"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MdOutlineLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("location", {
                          required: "Location is required",
                        })}
                        placeholder="Enter detailed location"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-5 pt-3">
                    <button
                      type="button"
                      onClick={prevTab}
                      className="w-full border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={nextTab}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: Profile Info */}
              {activeTab === 3 && (
                <div className="space-y-5">
                  {/* Profile Photo */}
                  <div className="relative group">
                    {" "}
                    <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-red-500">
                      {" "}
                      Profile Photo{" "}
                    </label>{" "}
                    <div className="relative">
                      {" "}
                      <AiOutlineCamera
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                        size={20}
                      />{" "}
                      <input
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none transition-all duration-300 hover:border-gray-300 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-sm file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                        type="file"
                        name="image"
                        {...register("image", {
                          required: "Profile photo is required",
                        })}
                        accept="image/*"
                      />{" "}
                    </div>{" "}
                    {errors.image && (
                      <p className="text-red-500 text-sm mt-1">
                        {" "}
                        {errors.image.message}{" "}
                      </p>
                    )}{" "}
                  </div>

                  {/* Blood Group */}
                  <div className="relative group">
                    {" "}
                    <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-red-500">
                      {" "}
                      Blood Group{" "}
                    </label>{" "}
                    <div className="relative">
                      {" "}
                      <MdBloodtype
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                        size={20}
                      />{" "}
                      <select
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none transition-all duration-300 hover:border-gray-300 cursor-pointer appearance-none"
                        name="bloodGroup"
                        {...register("bloodGroup", {
                          required: "Blood group is required",
                        })}
                      >
                        {" "}
                        <option value="">Select your blood group</option>{" "}
                        <option value="A+">A+</option>{" "}
                        <option value="B+">B+</option>{" "}
                        <option value="AB+">AB+</option>{" "}
                        <option value="O+">O+</option>{" "}
                        <option value="A-">A-</option>{" "}
                        <option value="B-">B-</option>{" "}
                        <option value="AB-">AB-</option>{" "}
                        <option value="O-">O-</option>{" "}
                      </select>{" "}
                      {/* Custom dropdown arrow */}{" "}
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        {" "}
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />{" "}
                        </svg>{" "}
                      </div>{" "}
                    </div>{" "}
                    {errors.bloodGroup && (
                      <p className="text-red-500 text-sm mt-1">
                        {" "}
                        {errors.bloodGroup.message}{" "}
                      </p>
                    )}{" "}
                  </div>

                  {/* Bio */}
                  {/* <div>
                    <label className="block text-sm font-semibold mb-1">
                      Bio
                    </label>
                    <textarea
                      {...register("bio")}
                      placeholder="Write something about yourself"
                      className="w-full border-2 p-3 rounded-xl"
                    />
                  </div> */}

                  {/* Last Donate */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Last Donation Date
                    </label>
                    <div className="relative">
                      <MdOutlineDateRange className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        {...register("lastDonate")}
                        className="w-full pl-12 border-2 p-3 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-5 pt-3">
                    <button
                      type="button"
                      onClick={prevTab}
                      className="w-full border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={nextTab}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 4: Security */}
              {activeTab === 4 && (
                <div className="space-y-5">
                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                          minLength: { value: 6, message: "At least 6 chars" },
                        })}
                        placeholder="Create password"
                        className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("confirmPassword", {
                          validate: (val) =>
                            val === password || "Passwords do not match",
                        })}
                        placeholder="Confirm password"
                        className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 outline-none"
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-5 pt-3">
                    <button
                      type="button"
                      onClick={prevTab}
                      className="w-full border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Prev
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? "Creating..." : "Create Account"}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-500 font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
