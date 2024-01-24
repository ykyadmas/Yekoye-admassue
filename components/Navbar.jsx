"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import {Bars3Icon,XCircleIcon} from "@heroicons/react/24/outline"

import MenuNav from './MenuNav'

const navLinks=[
    {
        title:"About",
        path: "#about"
     
    },
    {
        title:"Projects",
        path: "#project"
    },
    {
        title:"Contact",
        path: "#contact"  
    },
 

]

const Navbar = () => {

const[navbarOpen,setNavbarOpen] =useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-opacity-500'> 
      <div className='flex flex-wrap items-center justify-between max-auto px-4'>
        <Link href="/" className='text-2xl md:text-5xl text-white font-semibold'> 
      
        </Link>
        <div className='mobile-menu  block md:hidden'>
          
            {!navbarOpen ? (
              <button  onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='w-6 h-6' />
                </button>
            ) :(
              <button  onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XCircleIcon className='w-6 h-6' />
                </button>
            )
              
            }
          </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
      
       <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
    
   {navLinks.map((link,index) =>(
     <li key={index}>
    <NavLink href={link.path} title={link.title} />
     </li>
   ))}        
        
       </ul>
        </div>
      </div>
      {navbarOpen ? <MenuNav links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar
