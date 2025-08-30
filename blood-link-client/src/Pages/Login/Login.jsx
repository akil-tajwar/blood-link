import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiOutlineLock,
  AiFillHeart,
} from "react-icons/ai";
import { IoHeart, IoWaterOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { login, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    const response = await login(email, password);
  
    if (!response) {
      console.log("Login failed or API error");
    } else {
      console.log("Login successful:", response);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[url(flower.jpg)] relative overflow-hidden bg-fixed">
      {/* Animated background elements */}

      <div className="relative z-10 flex flex-col bg-red-50 bg-opacity-60 items-center justify-center min-h-screen px-4 py-12">
        {/* Logo/Header */}
        <div className="mb-8 text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="relative">
              <IoHeart className="text-red-500 animate-pulse" size={32} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Blood Link
            </h1>
          </div>
          <p className="text-gray-600 text-sm">
            Connecting lives, saving futures
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-lg">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-[1.02] transition-all duration-300">
            {/* Card header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-500 rounded-full mb-4 shadow-lg">
                <AiOutlineLock className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-red-500">
                  Email Address
                </label>
                <div className="relative">
                  <AiOutlineMail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none transition-all duration-300 hover:border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-red-500">
                  Password
                </label>
                <div className="relative">
                  <AiOutlineLock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                  <input
                    className="w-full pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none transition-all duration-300 hover:border-gray-300"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="px-4 text-sm text-gray-500 bg-white rounded-full">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Google Button */}
            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-200 hover:border-red-300 shadow-sm hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                New to Blood Link?{" "}
                <Link
                  to={"/signup"}
                  className="text-red-500 hover:text-red-600 font-semibold hover:underline transition-all duration-300 cursor-pointer"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
