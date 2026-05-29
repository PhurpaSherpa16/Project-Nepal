import React from 'react'
import { motion } from 'motion/react'

export default function BurgerIcon({ setIsOpen, isOpen, bgColor = 'bg-(--green)' }) {
    
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className={`size-12 md:size-16 rounded-full flex items-center justify-center cursor-pointer relative z-100 ${isOpen ? 'bg-neutral-50' : bgColor} shadow-lg`}
      onClick={() => setIsOpen((p)=>!p)}
    >
        <div className={`burger ${isOpen ? "burger_active" : ""}`} />
    </motion.div>
  )
}
