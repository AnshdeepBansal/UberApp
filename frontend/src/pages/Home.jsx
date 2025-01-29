import React, { useRef,useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const panelRef =useRef(null)
  const panelCloseRef=useRef(null)
  const submitHandler=(e)=>{
    e.preventDefault()
  }
  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current,{
        //opacity:1,
        height:'70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }
    else{
      gsap.to(panelRef.current,{
        //opacity:0,
        height:'0%',
        padding:20
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
    }
  },[panelOpen])
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute right-6 top-6 text-2xl opacity:0'><i className='ri-arrow-down-wide-line'></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
            onClick={()=>{setPanelOpen(true)}}
            value={pickup}
            onChange={(e)=>{setPickup(e.target.value)}}
            type="text"
            placeholder='Add a pick-up location' />

            <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
            onClick={()=>{setPanelOpen(true)}}
            value={destination}
            onChange={(e)=>{setDestination(e.target.value)}}
            type="text"
            placeholder='Enter destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
            <LocationSearchPanel></LocationSearchPanel>
        </div>
      </div>
    </div>
  )
}

export default Home