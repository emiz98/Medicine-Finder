import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Map from "./pharma/Map";
import { useGeolocated } from "react-geolocated";
import { useForm } from "react-hook-form";
import request from "../../axios";
import { useNavigate } from "react-router-dom";

const PharmaLogin = ({ setLoginModal }) => {
  const navigate = useNavigate();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    await request
      .post("/agency", {
        name: data.name,
        address: data.address,
        lat: coords.latitude,
        lon: coords.longitude,
      })
      .then((res) => {
        setLoginModal(false);
        navigate("/pharmacy");
      })
      .catch((err) => setLoginModal(false));
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
      className="absolute z-50 flex h-screen w-screen items-center 
            backdrop-blur-sm top-0 left-0 bottom-0 right-0"
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
          <span className="text-xl font-medium">Get started</span>
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
          <input
            {...register("name", { required: true })}
            className="inputField"
            type="text"
            placeholder="Pharmacy name"
          />
          <input
            {...register("address", { required: true })}
            className="inputField"
            type="text"
            placeholder="Enter address"
          />
          {coords && <Map center={[coords.latitude, coords.longitude]} />}
          <button type="submit" className="btnPrimaryLarge w-full">
            Get started
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PharmaLogin;
