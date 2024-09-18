import React from 'react'
import { Carousel } from 'flowbite-react'
import nexLogo from "/assets/nexLogo.jpeg"

function Home() {
  return (
    <div className="bg-neutraliSilver">
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col  md:flex-row-reverse px-10 items-center justify-between gap-12">
          <div >
            <img src={nexLogo} className='w-[300px]' alt=''/>
          </div>
          <div className='md:w-1/2'>
          <h1 className='text-4xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
          <p className='text-neutralGrey text-base mb-8'> Where to grow your business as a photographer: site or social media?</p>
          <button className='px-7 py-2 bg-brandPrimary text-white  rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>Register</button>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col  md:flex-row-reverse px-10 items-center justify-between gap-12">
          <div >
            <img src={nexLogo} className='w-[300px]' alt=''/>
          </div>
          <div className='md:w-1/2'>
          <h1 className='text-4xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>Lets Learn and Earn<span className='text-brandPrimary leading-snug'>In 4 months</span></h1>
          <p className='text-neutralGrey text-base mb-8'> Where to grow your business as a photographer: site or social media?</p>
          <button className='px-7 py-2 bg-brandPrimary text-white  rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>Register</button>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col  md:flex-row-reverse px-10 items-center justify-between gap-12">
          <div >
            <img src={nexLogo} className='w-[300px]' alt=''/>
          </div>
          <div className='md:w-1/2'>
          <h1 className='text-4xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
          <p className='text-neutralGrey text-base mb-8'> Where to grow your business as a photographer: site or social media?</p>
          <button className='px-7 py-2 bg-brandPrimary text-white  rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>Register</button>
          </div>
        </div>

      </Carousel>
      </div>
      </div>
    )
}

export default Home