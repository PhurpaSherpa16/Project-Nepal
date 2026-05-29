import { Mouse } from "lucide-react";
import { motion, useScroll, useTransform, useVelocity } from "motion/react";
import { useRef } from "react";

const ScrollDownDecorative = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
    
    return (
        <div className="w-full h-fit relative" ref={containerRef}>
            <motion.div
                className="fixed z-100 bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit pointer-events-none"
                style={{ opacity: opacity, y: y }}>
                <motion.div className='pt-2 w-full flex justify-center'
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5, delay: 1.8, ease: 'easeInOut'
                    }}>
                    <motion.div
                        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className='flex flex-col items-center gap-2'>
                        <Mouse className='size-6 text-(--white)' />
                        <motion.p className='text-(--white) text-xs uppercase tracking-widest'>scroll down</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ScrollDownDecorative