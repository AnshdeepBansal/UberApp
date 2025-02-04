import React from 'react'
const LocationSearchPanel = (props) => {
  console.log(props)
  const locations=[
    "217, A Mansarovar Pal Bypasss Opposite Dps Jodhpur",
    "210, B Mansarovar Pal Bypasss Opposite Dps Jodhpur",
    "D-21, Roop Rajat, Bhadu market Jodhpur",
    "2A, lane b, Ravi Nagar Jodhpur"
  ]
  return (
    <div>
      {
      locations.map(function (elem,idx)
      {return(
        <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
        <h3 className='font-medium'>{elem}</h3>
        </div>
      )
      })
      }
    </div>
  )
}

export default LocationSearchPanel