import React, { useState } from 'react'
import gsap from 'gsap'


const AnimateCard = () => {

  const [step, setStep] = useState(0)

  const handelClick = () => {


    if (step == 0) {
      gsap.to('#silde-circle', {
        translateX: "-0%",
        left: "0%",
        duration:0.3,
        rotate: 360,
        delay: 0.1,
        "--bgColor": "red",
         onStart:()=>{
            gsap.to(".top-part",{
              backgroundColor:"red",
              duration:0.3,
              delay:0.1
            })

            gsap.to(".eye-black-part",{
              top:"20%",
              left:'10%',
              duration:0.3,
              delay:0.1
            })

            gsap.to(".main-eye",{
               scale:1.21,
               duration:0.3,
               delay:0.1
            })

             gsap.to(".lips",{
             height:"70px",
             duration:0.3,
             delay:0.1,
             width:"15%"
          })
         }

      })
      setStep( 1)
      return
    }


    if (step == 1) {
      gsap.to('#silde-circle', {
        translateX: "-50%",
        left: "50%",
        duration: 0.3,
        delay: 0.1,
        rotate: 360,
        "--bgColor": "orange",

        onStart:()=>{
          gsap.to(".top-part",{
            backgroundColor:"orange",
            duration:0.3,
            delay:0.1
          })

          gsap.to(".eye-black-part",{
            top:"30%",
            left:'30%',
            duration:0.3,
            delay:0.1,
          })

          gsap.to(".main-eye",{
            scale:1,
            duration:0.3,
            delay:0.1
          })

          gsap.to(".lips",{
            height:"40px",
            duration:0.3,
            delay:0.1,
            width:"30%"
          })

       }

      })
      setStep(2)
      return
    }

    if (step == 2) {
      gsap.to('#silde-circle', {
        translateX: "-100%",
        left: "100%",
        duration: 0.3,       
        rotate: 360,
        delay: 0.1,
        "--bgColor": "green",

        onStart:()=>{
          gsap.to(".top-part",{
            backgroundColor:"green",
            duration:0.3,
            delay:0.1
          })

          gsap.to(".eye-black-part",{
            top:"40%",
            left:'40%',
            duration:0.3,
            delay:0.1
          })

          gsap.to(".main-eye",{
            scale:0.9,
            duration:0.3,
            delay:0.1
          })

          gsap.to(".lips",{
            height:"20px",
            duration:0.3,
            delay:0.1,
            width:"40%"
          })
       }

      })

      setStep(0)
      return
    }

  }


  return (
    <div className='h-[450px] w-[350px] rounded-2xl overflow-hidden'>
      <div className='h-[70%] w-full bg-orange-400 top-part flex items-center justify-center flex-col'>

          {/* <div className='h-[35%] text-5xl  text-gray-300 font-extrabold items-center justify-center gap-[10px] relative shadow-bottom '>
    
            <span className='h-full w-full  text-center shrink-0 flex items-center justify-center relative txt-1 bg-red-50'>Confuse</span>
            <span className='h-full w-full  text-center shrink-0  flex items-center justify-center relative txt-2 bg-red-200'>Happy</span>
            <span className='h-full w-full  text-center shrink-0 flex items-center justify-center relative txt-3 bg-red-400'>Sad</span>
          </div> */}


          {/* eyes */}
          <div className='flex items-center gap-[30px] justify-center'>

             <div className='h-[80px] w-[80px] overflow-hidden bg-white rounded-full border-b-gray-300 border-b-8 relative shadow-2xl shadow-gray-700 main-eye '>
              <span className='h-[35px] w-[35px] bg-amber-950 rounded-full  eye-black-part absolute flex items-center justify-center'>
                <span className='block h-[15px] w-[15px] bg-white rounded-full'></span>
              </span>
             </div>

             <div className='h-[80px] w-[80px] bg-white overflow-hidden rounded-full border-b-gray-300 border-b-8 relative shadow-2xl shadow-gray-700 main-eye'>
              <span className='h-[30px] w-[30px] bg-amber-950 rounded-full nline-block eye-black-part absolute flex items-center justify-center'>
                  <span className='block h-[15px] w-[15px] bg-white rounded-full'></span>
              </span>
            </div>

          </div>

          {/* lips */}

         <div className='border-ridge h-[45px] w-[20%] mx-auto rounded-4xl mt-[20px] lips'>

         </div>

      </div>
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