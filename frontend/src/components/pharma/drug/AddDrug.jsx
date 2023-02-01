import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import request from "../../../../axios";

const AddDrug = ({ setAddModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    await request
      .post("/drug/create", {
        name: "ff",
        brand: "fff",
        description: "ffff",
        strength: "asdasd",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
        onClick={() => setAddModal(false)}
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
          <span className="text-xl font-medium">Add drug</span>
          <XMarkIcon
            onClick={() => setAddModal(false)}
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
            className={`inputField`}
            type="text"
            placeholder="Enter name"
          />
          <input
            {...register("brand", { required: true })}
            className={`inputField`}
            type="text"
            placeholder="Enter brand"
          />
          <textarea
            {...register("description", { required: true })}
            className={`inputField`}
            placeholder="Enter description"
          />
          <input
            {...register("strength", { required: true })}
            className={`inputField`}
            type="text"
            placeholder="Enter strength"
          />
          <button type="submit" className="btnPrimaryLarge w-full mt-5">
            Add drug
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddDrug;
