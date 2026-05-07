import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion, scale } from 'motion/react'


export default function ButtonCTA() {
  return (
    <motion.a
    href="#diversity"
    whileHover={{scale: 1.05}}
    whileTap={{scale:0.95}}
    className='group relative px-2 pl-6 py-1.5 
    bg-(--black)/60 hover:bg-transparent
    border border-(--white)/20 hover:border-(--green)
    rounded-full text-(--white) text-sm font-bold tracking-wider
    flex items-center gap-2 overflow-hidden cursor-pointer
    transition-colors duration-500'>
        <span className='relative z-20'>Begin Journey</span>
        <div className='relative z-10 size-8 rounded-full flex items-center justify-center'>
            {/* Green circle that scales to fill the button */}
            <span className='absolute inset-0 bg-(--green) rounded-full
            transition-transform duration-500 ease-in
            scale-100 group-hover:scale-[14]' />
            <ArrowRight className='relative z-20 text-(--white) size-5 -rotate-45
            group-hover:rotate-0 transition-transform duration-300'/>
        </div>
    </motion.a>
  )
}