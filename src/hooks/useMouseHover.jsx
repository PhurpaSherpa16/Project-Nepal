import { useMotionValue, useSpring, useTransform } from 'motion/react'


export default function useMouseHover({ref, invert = false}) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const xSpring = useSpring(x, {stiffness: 100, damping: 5})
    const ySpring = useSpring(y, {stiffness: 100, damping: 5})

    const top = useTransform(ySpring, [0.5, -0.5], ['45%', '55%'])
    const left = useTransform(xSpring, [0.5, -0.5], ['65%', '75%'])

    const handleMouseEnter = (e) =>{
        const element = ref.current
        if(!element) return
        const position = element.getBoundingClientRect()

        const width = position.width
        const height = position.height

        const mouseX = e.clientX - position.left
        const mouseY = e.clientY - position.top

        const xPercent = mouseX / width - 0.5
        const yPercent = mouseY / height - 0.5

        const factor = invert ? -1 : 1
        x.set(xPercent * factor)
        y.set(yPercent * factor)
    }
    
  return {
    top,
    left, 
    handleMouseEnter
  }
}
