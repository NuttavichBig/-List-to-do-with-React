import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-between items-center bg-gray-700 text-white h-16 fixed w-full top-0'>
        <div className='flex gap-8 ml-8 font-bold'>
            <Link to='/' >Home</Link><Link to='/About'>About</Link><Link to='/yourlist'>Your List</Link>
        </div>
        <div className='flex gap-2 mr-8'>
            <Link to='/login' className='underline'>Log in</Link><h1 className='font-bold'>or</h1><Link to='/register' className='underline'>Register</Link>
        </div>
    </div>
  )
}
