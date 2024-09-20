import React from 'react'
import product from "/assets/product.svg"
import tesla from "/assets/imageD.png"


function Product() {
  return (
    <div >
        <div className='px-4 lg:px-14 max-w-screen-2xl max-auto my-8' id="product">
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>

            <div>
                <img src={product} alt=''/>
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

                <div className='md:w-1/3'>
                <img src={tesla} alt=''/>
                </div>
                <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 tex-sm text-neutralGrey mb-8 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and 
                scrambled it to make a 
                type specimen book.</p>
                <h4 className='text-brandPrimary text-xl font-semibold mb-2 '>Dennis Masiror</h4>
                <p className='text-base text-neutralGray mb-8'>British Dragon Boat Racing Association</p>
                <div>
                    <div className='flex flex-wrap items-center gap-5'>
                    <img src='/assets/Logo1.svg' alt='' className='cursor-pointer'/>
                    <img src='/assets/Logo2.svg' alt='' className='cursor-pointer'/>
                    <img src='/assets/Logo3.svg' alt='' className='cursor-pointer'/>
                    <img src='/assets/Logo4.svg' alt='' className='cursor-pointer'/>
                    <img src='/assets/Logo6.svg' alt='' className='cursor-pointer'/>
                    <img src='/assets/Logo7.svg' alt='' className='cursor-pointer'/>
                    <div className='flex items-center gap-8'>
                        <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

            </div>

            </div>
  )
}

export default Product