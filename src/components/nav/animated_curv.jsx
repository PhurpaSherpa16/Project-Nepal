import { motion } from 'motion/react'

export default function AnimatedCurv() {

  // curved while open
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-50 ${window.innerHeight / 2} 100 0`
  // reset the curved
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

  const pathAnimation = {
    initial: { d: initialPath },
    animate: { d: targetPath },
    exit: { d: initialPath },
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  }

  return (
    <svg className="h-full w-[100px] absolute top-0 -left-[99px] fill-(--white)">
      <motion.path {...pathAnimation}></motion.path>
    </svg>
  )
}
