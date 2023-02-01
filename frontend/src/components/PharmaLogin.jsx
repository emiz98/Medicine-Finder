import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Map from './pharma/Map'
import { useGeolocated } from "react-geolocated";

const PharmaLogin = ({ setLoginModal }) => {
    const [isSignUp, setIsSignUp] = useState(false)
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

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
            <div className="h-screen w-screen absolute" onClick={() => setLoginModal(false)} />
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
                    <span className='text-xl font-medium'>{!isSignUp ? "Login as pharmacy" : "Get started"}</span>
                    <XMarkIcon
                        onClick={() => setLoginModal(false)}
                        className="w-10 object-contain cursor-pointer 
                    rounded-full p-1 text-3xl border-2 border-primary text-primary
                    hover:text-white hover:bg-primary fade"
                    />
                </div>
                <div className='flex flex-col items-start gap-y-2 mt-10 mb-5'>
                    <input required className='inputField' type="text" placeholder='Enter email' />
                    <input required className='inputField' type="password" placeholder='Enter password' />
                    {isSignUp && 
                    <>
                        <input required className='inputField' type="text" placeholder='Pharmacy name' />
                        <Map center={[coords.latitude,coords.longitude]}/>
                    </>
                    }
                </div>
                <button className='btnPrimaryLarge w-full'>{!isSignUp ? "Login" : "Get started"}</button>
                {!isSignUp ?
                    <div className='flex items-center gap-x-2 mt-2 justify-center text-sm'>
                        <span>Don't have an account</span>
                        <span onClick={() => setIsSignUp(true)} className='font-medium hover:underline text-primary
                        cursor-pointer'>Sign up</span>
                    </div>
                    :
                    <div className='flex items-center gap-x-2 mt-2 justify-center text-sm'>
                        <span>Already have an account</span>
                        <span onClick={() => setIsSignUp(false)} className='font-medium hover:underline text-primary
                        cursor-pointer'>Log in</span>
                    </div>
                }
            </motion.div>
        </motion.div>
    )
}

export default PharmaLogin

