import React from 'react'

function Services() {

    const services=[
        {
            id:1,
            title:"Membership Organization",
            description:"Our  membership management software provides full automationof membership renewals and payments",
            image: "/assets/one.svg"


        },
        {
            id:2,
            title:"National Associations",
            description:"Our  membership management software provides full automationof membership renewals and payments",
            image: "/assets/two.svg"


        },
        {
            id:3,
            title:"Clubs And Groups",
            description:"Our  membership management software provides full automationof membership renewals and payments",
            image: "/assets/three.svg"


        }
    ]
  return (
    <div className='md:px-14 px-4 py-16 mx-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralGrey'>We have been working with some Fortune 508+ clients</p>
        </div>
        {/* company logo */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
        <img src="/assets/Logo1.svg" alt="oh"/>
        <img src="/assets/Logo2.svg" alt="oh"/>
        <img src="/assets/Logo3.svg" alt="w"/>
        <img src="/assets/Logo4.svg" alt="w"/>
        <img src="/assets/Logo5.svg" alt="w"/>
        <img src="/assets/Logo6.svg" alt="w"/>
        <img src="/assets/Logo7.svg" alt="w"/>
        </div>

        {/* services card */}
        <div className='mt-28 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage  your entire community in a single system</h2>
        <p className='text-neutralGrey'>Who is Nexcent suitale for?</p>
        </div>

        {/* cards */}

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols1 md-w-11/12 mx-auto gap-12'>
            {
                services.map(service=> 
                    <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow  cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                            <img src={service.image} className='ml-5' alt=''/>
                        </div>
                            <h4 className='text-2xl font-bold text-neutralGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>

                    </div>
                    
                    )
            }
        </div>

    </div>
  )
}

export default Services