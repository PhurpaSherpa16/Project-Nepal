import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Heading } from '../../../components/heading'
import { faqs } from '../../../data/site'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

const springTransition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.8,
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  })
  const activePositionRef = useRef(null)
  const hoveredIndexRef = useRef(null)
  const itemRefs = useRef([])
  const containerRef = useRef(null)

  // Shared measure function
  const measureItem = useCallback((index) => {
    const el = itemRefs.current[index]
    const container = containerRef.current
    if (el && container) {
      const containerRect = container.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      return {
        top: elRect.top - containerRect.top,
        height: elRect.height,
        opacity: 1,
      }
    }
    return null
  }, [])

  // RAF polling — continuously measures the active item during expand/collapse
  // This replaces ResizeObserver for buttery smooth height tracking
  useEffect(() => {
    let rafId
    let lastHeight = 0
    let stableCount = 0
    const startTime = Date.now()

    const poll = () => {
      const pos = measureItem(activeIndex)
      if (pos) {
        activePositionRef.current = pos

        // Determine what the cursor should show
        const isHoveringDifferent = hoveredIndexRef.current !== null && hoveredIndexRef.current !== activeIndex
        if (!isHoveringDifferent) {
          setCursorPosition(pos)
        }

        // Stop polling once height stabilizes (animation done)
        if (Math.abs(pos.height - lastHeight) < 0.5) {
          stableCount++
        } else {
          stableCount = 0
        }
        lastHeight = pos.height

        // Keep polling until stable for 10 frames or max 800ms
        if (stableCount < 10 && Date.now() - startTime < 800) {
          rafId = requestAnimationFrame(poll)
        }
      }
    }

    rafId = requestAnimationFrame(poll)
    return () => cancelAnimationFrame(rafId)
  }, [activeIndex, measureItem])

  const handleHover = (index) => {
    hoveredIndexRef.current = index
    const pos = measureItem(index)
    if (pos) setCursorPosition(pos)
  }

  const handleLeave = () => {
    hoveredIndexRef.current = null
    if (activePositionRef.current) {
      setCursorPosition(activePositionRef.current)
    }
  }

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div id='faq' className='min-h-screen bg-(--green) '>
        <div className='lg:px-16 lg:py-16 py-8 flex flex-col-reverse lg:flex-row  min-h-screen lg:h-screen w-full'>
            <div ref={containerRef} className='h-fit lg:min-h-screen flex flex-col justify-center lg:w-2/3 w-full relative'>
                {/* Sliding background cursor — bouncy rubbery spring */}
                <motion.div 
                  animate={{
                    top: cursorPosition.top,
                    height: cursorPosition.height,
                    opacity: cursorPosition.opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 14,
                    mass: 0.6,
                  }}
                  className='absolute left-0 w-full rounded-2xl bg-white/6 backdrop-blur-sm pointer-events-none z-0'
                  style={{ top: 0, height: 0 }}
                />

                {
                    faqs.map((faq,index)=>(
                        <div 
                        key={index}
                        ref={el => itemRefs.current[index] = el}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(index)}
                        className='relative z-10'
                        >
                            <FaqContent
                            heading={faq.question}
                            paragraph={faq.answer}  
                            index={index}
                            isOpen={activeIndex === index}
                            />
                        </div>
                    ))
                }

            </div>

            <div className='h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:items-end lg:justify-end gap-8 pb-8 2xl:pb-16'>
                <Heading text1='Before' text2='You' text3='Go' className='text-(--white) text-center lg:text-right text-[46px] md:text-[132px]'/>
                <p className='text-center lg:text-right w-sm text-(--white)'>
                    Everything you need to know before setting out—designed to 
                    make every journey feel Effortless, Informed, and Inspiring.
                </p>
            </div>
        </div>
    </div>
  )
}

const FaqContent = ({heading, paragraph, index, isOpen})=>{
  return(
    <div className='py-6 px-6 cursor-pointer'>
      <div className='flex items-center justify-between'>
        <h1 className='text-base text-(--white)'>
            {index+1}. {heading}
        </h1>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={springTransition}
        >
            <ChevronDown className='text-(--white)'/>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {
            isOpen && 
            <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springTransition}
            className='max-w-xl 2xl:max-w-4xl overflow-hidden pt-4'>
                    {paragraph}
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
