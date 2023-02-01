import React from 'react'
import {MapPinIcon,BellIcon} from '@heroicons/react/24/outline'

const Pharma = () => {
  return (
    <div className='flex items-center justify-between shadow-md px-6 py-4 
    bg-white rounded-lg'>
      <div>
        <span className='bg-green-500 rounded-lg text-sm px-2 py-1 text-white mt-2'>In stock</span>
        <h4 className='text-2xl mt-2'>Healthguard</h4>
      </div>
      <div className='flex items-center gap-x-2'>
      <BellIcon className='h-12 object-contain p-2 bg-orange-500 rounded-lg
                text-white cursor-pointer fade hover:bg-orange-400'/>
      <MapPinIcon className='h-12 object-contain p-2 bg-primary rounded-lg
                text-white cursor-pointer fade hover:bg-blue-500'/>
      </div>
    </div>
  )
}

export default Pharma