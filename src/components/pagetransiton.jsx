import React from 'react'
import { motion, scale } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageTransition({children}) {

    const no_of_columns = 5
    
    const anim = (variants, custom) =>{
        return {
            initial: 'initial',
            animate: 'animate',
            exit: 'exit',
            variants,
            custom
        }
    }

    const overlay = {
        initial:{
            opacity:0.5
        },
        animate:{
            opacity:0
        },
        exit:{
            opacity:0.5
        }
    }

    const transform = {
        initial: {
            x: -20,
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        exit: {
            x: -20,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }



  return (
    <div>
        <motion.div {...anim(overlay)} className='h-screen w-screen fixed inset-0 pointer-events-none select-none bg-black z-20'/>
        <motion.div {...anim(transform)} className='relative z-10'>
            {children}
        </motion.div>
    </div>
  )
}
