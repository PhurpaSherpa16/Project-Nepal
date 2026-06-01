import React from 'react'
import { motion } from 'motion/react'
import { menuSlide, slide, staggerChildren } from './anim'
import AnimatedCurv from './animated_curv'

const menuList = [
    { title: "Home", link: "/#hero" },
    { title: "Destinations", link: "/#destinations" },
    { title: "Experience", link: "/#experience" },
    { title: "Why Nepal?", link: "/#why" },
    { title: "Stories", link: "/#testimonials" },
    { title: "Explore", link: "/explore#horizon" },
]

const socials = [
    {label: 'Github', link: 'https://github.com/PhurpaSherpa16', icon:'/social_github.png'},
    {label: 'Dibble', link: 'https://dribbble.com/ksab-khanal', icon:'/social_dribble.png'},
    {label: 'Linkedin', link: 'https://www.linkedin.com/in/phurpa-sherpa/', icon:'/social_linkedin.png'},
    {label: 'Instagram', link: 'https://www.instagram.com/', icon:'/social_instagram.png'},
]

export default function MenuList({ setIsOpen }) {
    const transition={type:"spring"}
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
                    <motion.div variants={staggerChildren} className='flex flex-col gap-8 relative'>
                        {menuList.map((item, index) => (
                            <motion.div 
                                variants={slide} 
                                key={index} 
                                className='group'
                                onClick={() => setIsOpen(false)}>
                                <motion.a href={item.link} className='relative'
                                initial='initial'
                                whileHover="whileHover">
                                    <motion.p className='text-(--black) group-hover:text-(--green) text-4xl md:text-5xl uppercase font-bold 
                                    tracking-tighter transition-colors duration-300'
                                    variants={{
                                        initial: {x: 0},
                                        whileHover: {x: -20,}
                                    }}
                                    transition={{
                                        type:'spring',
                                        delayChildren:0.2,
                                        staggerChildren:0.075
                                    }}>
                                        {[...item.title].map((letter,index)=>(
                                            <motion.span key={index} variants={{
                                                initial: {x: 0},
                                                whileHover: {x: 20}
                                            }}
                                            transition={transition}
                                            className='inline-block'>
                                                {letter === " " ? "\u00A0" : letter}
                                            </motion.span>
                                        ))}
                                    </motion.p>
                                </motion.a>
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
                                <motion.a href={item.link} target='_blank' title={item.label} className='text-(--black)/60 hover:text-(--black) text-sm transition-colors group relative'
                                initial='initial'
                                whileHover="whileHover">
                                    <motion.p className='text-(--black) group-hover:text-(--green)
                                    flex flex-col items-center justify-center'
                                    variants={{
                                        initial: {x: 0},
                                        whileHover: {x: -8,}
                                    }}
                                    transition={{
                                        type:'spring',
                                        delayChildren:0.2,
                                        staggerChildren:0.075
                                    }}>
                                        <motion.img 
                                        variants={{
                                            initial: {x: 0},
                                            whileHover: {x: 8}
                                        }}
                                        transition={transition}
                                        src={item.icon} alt={item.label} className='w-5 h-5'/>
                                        <div>
                                            {[...item.label].map((letter,index)=>(
                                                <motion.span key={index} variants={{
                                                    initial: {x: 0},
                                                    whileHover: {x: 8}
                                                }}
                                                transition={transition}
                                                className='inline-block'>
                                                    {letter === " " ? "\u00A0" : letter}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.p>
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
        <AnimatedCurv bg_color="fill-(--white)"/>
    </motion.div>
   </div>
  )
}
