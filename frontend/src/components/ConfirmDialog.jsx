import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {motion} from 'framer-motion'

const ConfirmDialog = ({ handler, message,setModal }) => {
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
                onClick={() => setModal(false)}
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
                    <span className="font-medium w-2/3">Are you sure you want to perform
                    this action?</span>
                    <XMarkIcon
                        onClick={() => setModal(false)}
                        className="w-10 object-contain cursor-pointer 
                rounded-full p-1 text-3xl border-2 border-primary text-primary
                hover:text-white hover:bg-primary fade"
                    />
                </div>
                <div className='flex items-center gap-x-2 mt-4'>
                    <button onClick={()=>setModal(false)}
                    className='btnPrimaryLarge bg-gray-500 hover:bg-gray-400'>Cancel</button>
                    <button onClick={handler}
                    className='btnPrimaryLarge
                     bg-red-500 hover:bg-red-400'>{message}</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ConfirmDialog