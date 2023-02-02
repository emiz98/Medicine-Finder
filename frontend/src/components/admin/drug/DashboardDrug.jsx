import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import React,{ useState } from "react";
import request from "../../../../axios";
import ConfirmDialog from "../../ConfirmDialog";
import EditDrug from "./EditDrug";

const DashboardDrug = ({ id, brand, description, name, strength, refetch }) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
  
    const deleteDrug = async () => {
      await request.delete(`/drug/delete/${id}`)
      .then(res => refetch())
      .catch(err => console.log(err))
  
    }
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
              <h3 className="font-medium">{name}</h3>
              <span
                className="bg-primary px-3 py-1 
                  text-white text-sm rounded-lg font-medium"
              >
                {strength}g
              </span>
            </div>
            <p className="text-xs text-gray-500 w-full line-clamp-1">
              {brand}
            </p>
            {/* <span className="bg-green-500 rounded-lg text-sm px-2 py-1 text-white mt-2">
              In stock
            </span> */}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <PencilIcon onClick={() => setEditModal(true)}
            className="h-10 object-contain p-2 bg-green-500 rounded-lg
                          text-white cursor-pointer fade hover:bg-green-400"
          />
          <TrashIcon onClick={() => setDeleteModal(true)}
            className="h-10 object-contain p-2 bg-red-500 rounded-lg
                          text-white cursor-pointer fade hover:bg-red-400"
          />
        </div>
  
        <AnimatePresence>
          {deleteModal &&
            <ConfirmDialog setModal={setDeleteModal} handler={deleteDrug} message="Delete" />
          }
          {editModal &&
            <EditDrug
            setModal={setEditModal}
            brand={brand}
            description={description}
            id={id}
            strength={strength}
            name={name}
            refetch={refetch}/>
          }
        </AnimatePresence>
      </div>
    );
  };
  
  export default DashboardDrug