import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";

const Login = ({ setLoginModal }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    if (isSignUp) {
      signup(data.email, data.password, "USER");
      setLoginModal(false);
    } else {
      login(data.email, data.password);
      setLoginModal(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute z-50 flex h-screen w-screen items-center backdrop-blur-sm top-0 left-0"
    >
      <div
        className="h-screen w-screen absolute"
        onClick={() => setLoginModal(false)}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          scale: 0,
        }}
        className="relative mx-auto rounded-lg bg-white p-5
                shadow-md border border-primary"
      >
        <div className="flex items-center justify-between gap-x-5">
          <span className="text-xl font-medium">
            {!isSignUp ? "Login to your account" : "Create a new account"}
          </span>
          <XMarkIcon
            onClick={() => setLoginModal(false)}
            className="w-10 object-contain cursor-pointer 
                    rounded-full p-1 text-3xl border-2 border-primary text-primary
                    hover:text-white hover:bg-primary fade"
          />
        </div>
        <form
          className="flex flex-col items-start gap-y-2 mt-10 mb-5"
          onSubmit={handleSubmit(submitForm)}
        >
          {errors.email && errors.email.type === "required" && (
            <span className="text-xs font-medium text-red-500">
              Email is required
            </span>
          )}
          <input
            {...register("email", { required: true, maxLength: 30 })}
            className={`inputField ${
              errors.email &&
              errors.email.type === "required" &&
              "!border-red-500"
            }`}
            type="email"
            placeholder="Enter email"
          />

          {errors.password && errors.password.type === "required" && (
            <span className="text-xs font-medium text-red-500">
              Password is required
            </span>
          )}
          <input
            {...register("password", { required: true })}
            className={`inputField ${
              errors.password &&
              errors.password.type === "required" &&
              "!border-red-500"
            }`}
            type="password"
            placeholder="Enter password"
          />

          <button type="submit" className="btnPrimaryLarge w-full">
            {!isSignUp ? "Login" : "Create a new account"}
          </button>
        </form>
        {!isSignUp ? (
          <div className="flex items-center gap-x-2 mt-2 justify-center text-sm">
            <span>Don't have an account</span>
            <span
              onClick={() => setIsSignUp(true)}
              className="font-medium hover:underline text-primary
                        cursor-pointer"
            >
              Sign up
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-x-2 mt-2 justify-center text-sm">
            <span>Already have an account</span>
            <span
              onClick={() => setIsSignUp(false)}
              className="font-medium hover:underline text-primary
                        cursor-pointer"
            >
              Log in
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Login;
