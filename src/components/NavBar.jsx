import React, { useEffect, useState } from 'react'
import yoh from '/assets/yoh.svg'
import { Link } from 'react-router-dom'
import { FaXmark, FaBars } from 'react-icons/fa6'

function NavBar() {
    const [isMenuOpen, setMenuOpen]=useState(false)
    const [isSticky, setIsSticky]=useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)

        return()=>{
            window.addEventListener('scroll', handleScroll)
        }
    })

    const navItems =[
        {link:"Home", path:"home"},
        {link:"Service", path:"service"},
        {link:"About", path:"about"},
        {link:"Product", path:"product"},
        {link:"Testimonial", path:"testimonial"},
        {link:"FAQ", path:"faq"},
    ]

  return (
    <header className='w-full  md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-8 ${isSticky? "top-8 left-0 right-0 border-b bg-white duration-300": "" }`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href="" className='text-2xl font-semibold flex items-center'><img src={yoh} className=' inline-block items-center'/></a>
            <ul className='md:flex space-x-12 hidden '>
                {
                   navItems.map(({link, path})=>(
                    <li key={link} className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium' ><Link to={path} spy={true} smooth={true}>{link}</Link></li>
                   ))
                }

            </ul>

            <div className='space-c-12 hidden lg:flex items-center'>

                <a href='' className='hidden lg:flex items-center text-brandPrimary hover:text-gray500'>Login</a>
                <button className='bg-brandPrimary text-white py-2 px-4 transition-all rounded hover:bg-neutralGrey'>Sign Up</button>

            </div>
            {/* menu btn for only mobile devices */}
            <div className='md:hidden'>
            <button
            onClick={toggleMenu}
             className='focus:outline' >
                {
                    isMenuOpen ? (<FaXmark  className='h-6 w-6 text-neutralGrey'/>): (<FaBars className='h-6 w-6 text-neutralGrey'/>)
                }

            </button>
            </div>
            </div>
            {/* items for navs mobile device */}

            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                   navItems.map(({link, path})=>(
                    <li key={link} className='block text-base text-white text-gray-900 hover:text-brandPrimary first:font-medium' ><Link to={path} spy={true} smooth={true} offset={-100}>{link}</Link></li>
                   ))
             }
            </div>


        </nav>
    </header>
  )
}

export default NavBar