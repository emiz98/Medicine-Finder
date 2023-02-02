import React, { useState } from "react";
import Header from "../../components/Header";
import { AnimatePresence } from "framer-motion";
import AddDrug from "../../components/admin/drug/AddDrug";
import { useQuery } from "react-query";
import request from "../../../axios";
import DashboardDrug from "../../components/admin/drug/DashboardDrug";

const Dashboard = () => {
  const [addModal, setAddModal] = useState(false);
  const { isLoading, error, data, refetch } = useQuery("repoDrugs", () =>
    request.get("/drugs").then((res) => res.data)
  );

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
            {data?.map(({ id, brand, description, name, strength }) => (
              <DashboardDrug
                key={id}
                id={id}
                brand={brand}
                description={description}
                name={name}
                strength={strength}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      </main>
      <AnimatePresence>
        {addModal && <AddDrug setAddModal={setAddModal} refetch={refetch} />}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
