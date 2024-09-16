import React from 'react'
import "./spinner.css"
import { RingLoader } from 'react-spinners'
const Spinner = () => {
  return (
    <div className='w-screen h-[calc(100vh-80px)] flex justify-center items-center'>
      <RingLoader
        color="#16a34a"
        speedMultiplier={1.2}
        size={70}
        className=""
      />
    </div>
  )
}

export default Spinner