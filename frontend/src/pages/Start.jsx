import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
          <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/originals/17/1a/cb/171acb9c2f6762107232c6e51e4854ba.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-16 ml-8' src="https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png" alt="" />
            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
          </div>
        </div>
      )
}

export default Start