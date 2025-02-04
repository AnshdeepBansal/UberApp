import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{props.setVehiclePanel(false)}} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex p-3 border-2 border-white active:border-black mb-2 rounded-xl w-full items-center justify-between'>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
            <div className='ml-2 w-1/2'>
                <h4 className='font-medium text-base'>Uber Go <span><i className='ri-user-3-fill'>4</i></span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable,Compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex p-3 border-2 border-white active:border-black mb-2 rounded-xl w-full items-center justify-between'>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className='-ml-2 w-1/2'>
                <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'>1</i></span></h4>
                <h5 className='font-medium text-sm'>3 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex p-3 border-2 border-white active:border-black mb-2 rounded-xl w-full items-center justify-between'>
            <img className='h-10' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
            <div className='ml-2 w-1/2'>
                <h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-3-fill'>3</i></span></h4>
                <h5 className='font-medium text-sm'>3 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹125</h2>
        </div>
    </div>
  )
}

export default VehiclePanel