import React, { useState } from 'react'
import gsap from 'gsap'


const AnimateCard = () => {

  const [step, setStep] = useState(0)

  const handelClick = () => {

    if (step == 0) {
      gsap.to('#silde-circle', {
        translateX: "-0%",
        left: "0%",
        duration: 1,
        delay: 0.1,
        ease: 'bounce',
        "--bgColor": "red"

      })
      setStep(1)
      return
    }


    if (step == 1) {
      gsap.to('#silde-circle', {
        translateX: "-50%",
        left: "50%",
        duration: 1,
        delay: 0.1,
        ease: 'bounce',
        "--bgColor": ""

      })
      setStep(2)
      return
    }

    if (step == 2) {
      gsap.to('#silde-circle', {
        translateX: "-100%",
        left: "100%",
        duration: 1,
        delay: 0.1,
        ease: 'bounce',
        "--bgColor": "green",
      })




      setStep(0)
      return
    }

  }


  return (
    <div className='h-[450px] w-[350px] rounded-2xl overflow-hidden'>
      <div className='h-[60%] w-full bg-orange-400'></div>
      <div className='h-[40%] w-full bg-white'>
        <div className='h-[40%] flex items-center w-[96%] mx-auto cursor-pointer' onClick={() => handelClick()}>
          <div className='h-[80px] w-[80px] bg-white rounded-full relative top-[-40%] flex items-center justify-center ' id='silde-circle' ></div>
        </div>
        <div className='h-[30%]  w-full mb-20 py-[4px] flex items-center justify-center gap-[25px]'>
          <div className='h-full w-[8px] bg-black rounded-2xl line-1'></div>
          <div className='h-[40%] w-[7px] bg-gray-500 rounded-2xl'></div>
          <div className='h-[40%] w-[7px] bg-gray-500 rounded-2xl'></div>
          <div className='h-[40%] w-[7px] bg-gray-500 rounded-2xl'></div>
          <div className='h-full w-[8px] bg-gray-600 rounded-2xl line-2'></div>
          <div className='h-[40%] w-[7px] bg-gray-500 rounded-2xl'></div>
          <div className='h-[40%] w-[7px] bg-gray-500 rounded-2xl'></div>
          <div className='h-[40%] w-[7px] bg-gray-500 rounded-2xl'></div>
          <div className='h-full w-[8px] bg-gray-600 rounded-2xl line-3'></div>

        </div>
      </div>
    </div>
  )
}


export default AnimateCard