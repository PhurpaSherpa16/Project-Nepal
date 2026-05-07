import { motion, useTransform, useSpring } from 'framer-motion'
import { useBreakPoints } from '../hooks/breakpoint'


export const CurveEffect = ({ velocity, side = 'left', color = 'fill-current', className = '' }) => {
    const { current } = useBreakPoints()
    const smoothVelocity = useSpring(velocity, { stiffness: 300, damping: 50 })
    
    const isVerticalSide = side === 'left' || side === 'right'
    
    // Map velocity to a bend value.
    // Responsiveness: Use a smaller bend for mobile/tablet (50) and larger for desktop (150)
    const bendAmount = (current === 'sm' || current === 'md') ? 50 : 150
    const bend = useTransform(smoothVelocity, [-0.1, 0, 0.1], [bendAmount, 0, -bendAmount])
    
    const path = useTransform(bend, (b) => {
        if (isVerticalSide) {
            const h = 1000
            const x = side === 'left' ? 100 : 0
            const controlX = side === 'left' ? 100 + b : -b
            return `M${x} 0 L${x} ${h} Q${controlX} ${h/2} ${x} 0`
        } else {
            const w = 1000
            const y = side === 'top' ? 100 : 0
            const controlY = side === 'top' ? 100 + b : -b
            return `M0 ${y} L${w} ${y} Q${w/2} ${controlY} 0 ${y}`
        }
    })

    const svgClass = isVerticalSide 
        ? `h-full w-[100px] absolute top-0 ${side === 'left' ? '-left-[99px]' : '-right-[99px]'}`
        : `w-full h-[100px] absolute left-0 ${side === 'top' ? '-top-[99px]' : '-bottom-[99px]'}`

    return (
        <svg 
            className={`${svgClass} ${color} pointer-events-none ${className}`}
            viewBox={isVerticalSide ? "0 0 100 1000" : "0 0 1000 100"}
            preserveAspectRatio="none"
        >
            <motion.path d={path} />
        </svg>
    )
}
