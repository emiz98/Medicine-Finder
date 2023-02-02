import React, { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import request from "../../../axios";
import Select from "react-select";

const AddDrug = ({ setAddModal, refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedOption, setSelectedOption] = useState(null);
  const { isLoading, error, data } = useQuery("repoDrugs", () =>
    request.get("/drugs").then((res) => res.data)
  );

  const submitForm = async (data) => {
    await request
      .post("/agency/drug", {
        agency: { id: 1 },
        drug: { id: selectedOption },
        price: data.price,
        stock: data.stock,
      })
      .then((res) => {
        refetch();
        setAddModal(false);
      })
      .catch((err) => setAddModal(false));
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
          <Select
            onChange={(e) => setSelectedOption(e.id)}
            className="w-full"
            styles={{
              control: (base) => ({
                ...base,
                width: 285,
              }),
            }}
            getOptionLabel={(option) =>
              `${option.name} - ${option.brand} (${option.strength}g)`
            }
            getOptionValue={(option) => option.id}
            options={data}
          />
          {/* <select className="inputField" {...register("drug")}>
            {data.map(({ id, name, brand, strength }) => (
              <option key={id} value={id}>
                ds
              </option>
            ))}
          </select> */}
          <input
            {...register("stock", { required: true })}
            className="inputField"
            type="number"
            placeholder="Enter stock"
          />
          <input
            {...register("price", { required: true })}
            className="inputField"
            type="number"
            placeholder="Enter price"
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
