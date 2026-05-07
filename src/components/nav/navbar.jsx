import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react'
import CurvedMenu from './curved_menu'

export default function Navbar({setIsOpen, isOpen}) {
    const { scrollY } = useScroll()
    const [isVisible, setIsVisible] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > window.innerHeight) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    })

  return (
    <div className='fixed top-8 right-8 z-70'>
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <CurvedMenu setIsOpen={setIsOpen} isOpen={isOpen}/>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}
