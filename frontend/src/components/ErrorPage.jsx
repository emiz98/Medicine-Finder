import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='p-10 flex flex-col overflow-hidden
    items-center justify-center h-screen w-screen font-apple'>
      <img className='w-28 mb-5 object-contain' src="/assets/logo.png" alt="logo" />
      <h3 className='text-8xl font-bold text-primary'>404</h3>
      <h1 className='text-3xl font-bold text-gray-800'>Page not found</h1>
      <p className='text-gray-400 w-2/3 text-center'>Please check the URL un the address bar and try again</p>
        <Link to="/">
        <button className='btnPrimaryLarge mt-8'>Go back home</button>
        </Link>
    </div>
  )
}

export default ErrorPage