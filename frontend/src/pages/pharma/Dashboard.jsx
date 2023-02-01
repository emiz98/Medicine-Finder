import React, { useState } from "react";
import Header from "../../components/Header";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import AddDrug from "../../components/pharma/drug/AddDrug";

const Dashboard = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <div className="bg-gray-200 h-screen overflow-hiddens">
      <Header />
      <main className="px-10 md:px-40 mt-10 max-w-7xl m-auto">
        <div className="">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-2xl">All drugs</h4>
            <button
              onClick={() => setAddModal(true)}
              className="btnPrimaryLarge"
            >
              Add drug
            </button>
          </div>
          <div className="mt-5 flex flex-col items-start gap-y-2">
            <DashboardDrug />
            <DashboardDrug />
          </div>
        </div>
      </main>
      <AnimatePresence>
        {addModal && <AddDrug setAddModal={setAddModal} />}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;

const DashboardDrug = () => {
  return (
    <div className="flex items-center w-full justify-between bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center gap-x-1">
        <div className="w-20 flex items-center justify-center h-20 bg-primary rounded-lg relative">
          <img
            className="absolute -top-3 h-full object-contain"
            src="/assets/med.png"
            alt="drug"
          />
        </div>
        <div className="flex flex-col items-start ml-6">
          <div className="flex items-center gap-x-5">
            <h3 className="font-medium">Doliprane</h3>
            <span
              className="bg-primary text-xs px-3 py-1 
                text-white text-sm rounded-lg font-medium"
            >
              600g
            </span>
          </div>
          <p className="text-xs text-gray-500 w-full line-clamp-1">
            Lorem ipsum
          </p>
          <span className="bg-green-500 rounded-lg text-sm px-2 py-1 text-white mt-2">
            In stock
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <PencilIcon
          className="h-10 object-contain p-2 bg-green-500 rounded-lg
                        text-white cursor-pointer fade hover:bg-green-400"
        />
        <TrashIcon
          className="h-10 object-contain p-2 bg-red-500 rounded-lg
                        text-white cursor-pointer fade hover:bg-red-400"
        />
      </div>
    </div>
  );
};
