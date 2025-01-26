import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("")
  const [userData, setUserData] = useState({})
  const submitHandler=(e)=> {
    e.preventDefault()
    setUserData({
      email:email,
      pass:pass
    })
    setEmail("")
    setPass("")
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png" alt="" />
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input
            required 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }} 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter your password</h3>

          <input
            required
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
          <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new account</Link></p>
        </form>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin