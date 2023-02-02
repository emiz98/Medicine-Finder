import React from 'react'
import Header from '../../components/Header'
import Pharma from '../../components/user/Pharma'
import SuggestDrug from '../../components/user/SuggestDrug'
import {ChevronLeftIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Results = () => {
  return (
    <div className='h-screen overflow-hidden bg-gray-200'>
        <Header/>
        <main className='px-10 lg:px-40 mt-10'>
            <Link to="/search" className='!w-max'>
                <ChevronLeftIcon className='h-12 object-contain p-2 bg-primary rounded-lg
                text-white cursor-pointer fade hover:bg-blue-500'/>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-5'>
                <div className='flex items-center gap-x-3 px-8 py-4 shadow-md h-max rounded-lg bg-white'>
                    <div className='w-28 h-28 bg-primary rounded-lg relative'>
                        <img className='absolute -top-3' src="/assets/med.png" alt="drug" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center gap-x-5'>
                            <h3 className='font-medium text-xl'>Doliprane</h3>
                            <span className='bg-primary text-xs px-3 py-1 
                            text-white rounded-lg font-medium'>600g</span>
                        </div>
                        <p className='line-clamp-2 text-sm text-gray-500 w-full mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Libero</p>
                        <span className='bg-green-500 rounded-lg text-sm px-2 py-1 text-white mt-2'>In stock</span>
                    </div>
                </div>
                <div className='h-[42vh] md:h-[65vh] overflow-y-scroll scrollbar-hide space-y-2'>
                    <Pharma/>
                    <Pharma/>
                    <Pharma/>
                    <Pharma/>
                    <Pharma/>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Results