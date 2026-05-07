import React from 'react'
import { motion } from 'motion/react'
import { menuSlide, slide, staggerChildren } from './anim'
import AnimatedCurv from './animated_curv'

const menuList = [
    { title: "Home", link: "#hero" },
    { title: "Destinations", link: "#destination" },
    { title: "Experience", link: "#experience" },
    { title: "Gallery", link: "#gallery" },
    { title: "Testimonials", link: "#testimonials" },
]

const socials = [
    { name: "Github", link: "#" },
    { name: "Dribble", link: "#" },
    { name: "Linkedin", link: "#" },
    { name: "Instagram", link: "#" },
]

export default function MenuList({ setIsOpen }) {
  return (
   <div className='h-screen w-screen bg-(--black)/60 fixed inset-0'>
     <motion.div 
        variants={menuSlide} 
        initial="hidden" 
        animate="show" 
        exit="exit" 
        className='fixed h-screen w-full md:w-[500px] top-0 right-0 bg-(--white) z-60 shadow-2xl'>
        <div className='p-12 md:py-24 md:px-16 flex flex-col justify-between h-full'>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <div className='mb-12 border-b border-(--white)/10 pb-4'>
                        <p className='text-xs text-(--black)/40 uppercase tracking-[0.3em] font-medium'>Quick Access</p>
                    </div>
                    <motion.div variants={staggerChildren} className='flex flex-col gap-8'>
                        {menuList.map((item, index) => (
                            <motion.div 
                                variants={slide} 
                                key={index} 
                                className='group'
                                onClick={() => setIsOpen(false)}>
                                <a href={item.link} className='block overflow-hidden'>
                                    <motion.p className='text-(--black) text-4xl md:text-5xl uppercase font-bold 
                                    tracking-tighter hover:text-(--green) transition-colors duration-300'>
                                        {item.title}
                                    </motion.p>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className='mt-auto'>
                     <div className='mb-6 border-b border-(--black)/10 pb-4'>
                        <p className='text-xs text-(--black)/40 uppercase tracking-[0.3em] font-medium'>Socials</p>
                    </div>
                    <motion.div variants={staggerChildren} className='flex gap-6'>
                        {socials.map((item, index) => (
                            <motion.div variants={slide} key={index}>
                                <a href={item.link} className='text-(--black)/60 hover:text-(--black) text-sm transition-colors'>
                                    {item.name}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
        <AnimatedCurv bg_color="white"/>
    </motion.div>
   </div>
  )
}
