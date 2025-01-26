import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("")
  const [userData,setUserData]=useState({})
  const submitHandler=(e)=> {
    e.preventDefault()
    setUserData({
      fullname:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      pass:pass
    })
    setFirstName("")
    setLastName("")
    setEmail("")
    setPass("")
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png" alt="" />
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
          <div className='flex gap-4 mb-5'>
            <input 
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
              type="text"
              placeholder='First Name' 
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
              />
            <input 
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
              type="text"
              placeholder='Last Name' 
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
              />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

          <input 
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com' 
            value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />

          <h3 className='text-lg font-medium mb-2'>Enter your password</h3>

          <input
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Password'
            value={pass}
              onChange={(e)=>{
                setPass(e.target.value)
              }}
          />

          <button
            className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-sm'>
            Sign up
          </button>
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>By proceeding, you accept to get calls, Whatsapp or SMS messages, including by automated means from uber and it's affiliates to the number provider</p>
      </div>
    </div>
  )
}

export default UserSignup