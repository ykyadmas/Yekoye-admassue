import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='contact'>
     <h1 className='flex justify-center font-bold text-white text-5xl mt-32 border-b border-pink-800 pb-10 '>Contact Me On Social Media</h1>
     <div className='flex justify-center gap-5 mt-16 '>
     <SocialIcon url="https://www.linkedin.com/in/yekoye-admassue-85528627b/" />
     
     <SocialIcon url="mailto:yekoyeadmas@gmail.com"/>
         
     <SocialIcon url="https://www.facebook.com/profile.php?id=100068994760295" />
    
     <Link href={"https://t.me/ykyadmas" }>
     <FontAwesomeIcon  className='h-10 w-10 mt-1 bg-slate-300' icon={faTelegram}/>
     </Link>
        <SocialIcon url="https://github.com/ykyadmas" />
     </div>
    </div>
  )
}

export default Contact
