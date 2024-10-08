import React from 'react'
import aboutImg from "/assets/about.svg"

function About() {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl max-auto my-8' id="about">
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>

            <div>
                <img src={aboutImg} alt=''/>
            </div>
            <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey txt-semibold mb-4 md:w-4/5'> The unseen of spending three years at pixelgrade</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and 
                scrambled it to make a 
                type specimen book.
            </p>
            <button className='btn-primary'>Learn More</button>

            </div>
            </div>
            </div>


            {/* stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'> 
                <h2 className='text-4xl text-neutralDGrey txt-semibold mb-4 md:w-2/3'> Helping a local<br/><span className='text-brandPrimary'>Business reinvent itself</span></h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>We reached here with our hard work and dedication</p>
                </div>

                {/*  stats2*/}

                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center -4'>
                            <img src='/assets/Icon1.svg' alt=''/>

                            <div>
                                <h4 className='text-2xl text-neutralDHrey font-semibold'>2,245,341</h4>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center -4'>
                            <img src='/assets/Icon2.png' alt=''/>

                            <div>
                                <h4 className='text-2xl text-neutralDHrey font-semibold'>46,328</h4>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center -4'>
                            <img src='/assets/Icon3.svg' alt=''/>

                            <div>
                                <h4 className='text-2xl text-neutralDHrey font-semibold'>828,867</h4>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center -4'>
                            <img src='/assets/Icon4.svg' alt=''/>

                            <div>
                                <h4 className='text-2xl text-neutralDHrey font-semibold'>1,926436</h4>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            </div>
  )
}

export default About