"use client"
import Image from 'next/image'
import React from 'react'
import Education from './Education';
import Skill from './Skill';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

const links=[

  {
    name:"Skills",
    link:<Skill />
  },
  {
    name:"Education",
    link:<Education />
  },
  
]

const About =()=>{

  const currentPath=usePathname();
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/net.jpg" 
        width={500} height={500} 
        className='h-[400px]' 
        alt='fullstack banner' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a new web developer who loves building websites and apps that work on any device. I know how to use JavaScript, React, Next.js, HTML, CSS, WordPress, and Git. I'm always learning new things and trying to improve my skills.
          </p>

          <div className="flex flex-row justify-start mt-8">
          
       <div  className='flex gap-16'>
   
   {/* <Skill />
  
 <Education /> */}
 
 {
    links.map((links)=>(
          <div
          className={classNames({
          "bg-gray-700 px-3 rounded-full text-white":links.path===currentPath,
          "white":links.path !==currentPath,
          })}
           href={links.link} 
           key={links.name}>
            {links.link}
            </div>
        ))
      }
   
       </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;