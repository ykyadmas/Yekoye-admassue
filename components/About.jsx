import Image from 'next/image'
import React from 'react'


const About =()=>{

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/full_stack_banner.avif" 
        width={500} height={500} 
        className='h-[400px]' 
        alt='fullstack banner&apos;'/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a new web developer who loves building websites and apps that work on any device. I know how to use JavaScript, React, Next.js, HTML, CSS, WordPress, and Git. I'm always learning new things and trying to improve my skills.
          </p>

          <div className="flex flex-row justify-start mt-8">
          
       <div  className='flex gap-16'>
      <div>
    <h1 className='font-bold text-2xl text-[#380e0e] text-center border-b border-pink-800'>Skills</h1>
   <ul className="list-disc pl-2 mt-8">
     <li>HTML</li>
     <li>Tailwind CSS</li>
     <li>SQL</li>
     <li>JavaScript</li>
     <li>React</li>
     <li>Nextjs</li>
     <li>Wordpress</li>
   </ul>
        </div>
  
  

    <div>
    <h1 className='font-bold text-2xl text-center text-[#380e0e] border-b border-pink-800'>Education</h1>
      <ul className="list-disc pl-2 mt-8">
        <li>Information Ststem</li>
        <li>Addis Ababa University ,Ethiopia</li>
      </ul>
    </div>
       </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;