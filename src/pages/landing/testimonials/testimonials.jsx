import React, { useRef } from 'react'
import { Heading } from '../../../components/heading'
import { Quote } from 'lucide-react'
import { content, travelers, reviews } from '../../../data/site'
import { useScroll, useSpring, useTransform, motion, useMotionValue } from 'motion/react'
import useMouseHover from '../../../hooks/useMouseHover'

export default function Testimonials() {
  return (
    <div className='relative z-20'>
        <div className="bg-(--white) h-screen pb-16 2xl:pb-32">
            <div className='padding_inline_block flex flex-col gap-16 lg:flex-row items-center justify-center lg:justify-end lg:items-end min-h-full relative'>
                <div className='text-center space-y-4 relative z-10 w-fit h-full flex justify-center lg:justify-end lg:items-end flex-col'>
                    <Heading text1='Stories' text2='That' text3='Says' className='text-(--black) text-center lg:text-left text-[46px] md:text-[132px]'/>
                </div>
                <div className='w-full min-h-full relative flex flex-col gap-8 justify-center items-center lg:justify-end lg:items-end'>
                    <div className='w-fit fit'>
                        <div className='flex justify-center lg:justify-end flex-col lg:items-end h-full'>
                            <h1 className='text-(--black) text-3xl md:text-6xl text-center lg:text-right'>
                                200K<span className='text-sm align-top'>+</span>
                            </h1>
                        </div>

                        <div className='flex flex-col justify-center lg:justify-end items-center lg:items-end h-full space-y-4'>
                            <p className='text-center lg:text-right w-sm text-(--black)'>{content.paragraph}</p>
                            <div className='flex lg:items-end items-center flex-col justify-end'>
                                <div className='flex items-center lg:items-end -space-x-2  lg:-space-x-4'>
                                    {travelers.map((traveler, index) => (
                                        <img key={index} src={traveler} alt="" className='size-8 md:size-12 rounded-full border border-(--white)'/>
                                    ))}
                                </div>
                                <p className='text-(--black) text-right'>WorldWide Stories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='testimonials' className='bg-(--black) min-h-screen lg:min-h-[320vh] pb-20 lg:pb-70 overflow-hidden'>
            {reviews.map((review, index) => (
                <Reviews key={index} review={review} index={index}/>
            ))}
        </div>
    </div>
  )
}

const Reviews =({review, index})=>{
    const mainDivRef = useRef(null);
    const {handleMouseEnter, left, top} = useMouseHover({ref:mainDivRef})
    

    const {scrollYProgress} = useScroll({
        target: mainDivRef,
        offset: ["start end", "end start"]
    })

    const imageScale = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 1.3]),
        {stiffness: 100, damping: 20}
    )

    const ImageFlyIn = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, -20]),
        {stiffness: 100, damping: 20}
    )
    const textFlyIn1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [160, -150]),
        {stiffness: 100, damping: 20}
    )
    const textFlyIn2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [100, 0]),
        {stiffness: 100, damping: 20}
    )

    const textScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1])

    return(
        <motion.div ref={mainDivRef} 
        onMouseMove={handleMouseEnter}
        className='h-screen bg-(--black) flex lg:flex-col items-center justify-center sticky'>
            <motion.div className='w-120 md:w-full h-160 md:h-full lg:h-160 lg:w-120 flex items-center justify-center relative' 
            style={{
                y: ImageFlyIn,
                scale:imageScale
            }}>
                <motion.img
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.3, delay:0.2, ease:"easeIn"}}
                src={review.image} alt="pokhara" className='h-80 w-60 md:w-[40%] md:h-[40%] lg:w-full lg:h-full object-cover origin-top lg:absolute lg:-translate-x-[50%] lg:-translate-y-[50%]' 
                style={{scale: imageScale, 
                    top: top,
                    left: left,
                }}/>
            </motion.div>
            <motion.div 
            style={{y:textFlyIn1}}
            className={`space-y-4 absolute top-30 2xl:top-50 ${index % 2 === 0 ? 'left-4 md:left-20 lg:left-45 2xl:left-105' : 'right-4 md:right-20 lg:right-45 2xl:right-105'}`}>
                <div className={`absolute -top-2 ${index % 2 === 0 ? '-left-5' : '-right-5'}`}>
                    <Quote size={36} className={`text-(--white)/30 ${index % 2 === 0 ? 'rotate-180' : 'rotate-360'}`}/>
                </div>
                <p className={`w-sm text-(--white) text-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{review.quote}</p>
                <div className={`flex gap-4 items-end justify-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div>
                        <p className={`text-(--white) font-bold ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{review.name}</p>
                        <p className={`text-(--white) font-thin ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{review.country}</p>
                    </div>
                    <img src={review.avatar} alt="avatar" className='size-8 rounded-full border border-(--white)'/>
                </div>
            </motion.div>
            <motion.div 
            style={{y: textFlyIn2}}
            className={`absolute bottom-20 ${index % 2 === 0 ? 'right-10 md:right-20 2xl:right-60' : 'left-10 md:left-20 2xl:left-60'}`}>
                <motion.h1 className={`text-[46px]  md:text-[132px] text-(--white) ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                style={{fontFamily:'qaveria', scale:textScale}}>
                    <span className='md:block inline-block'>{review.location}</span> 
                    <span className='md:block inline-block'>Nepal</span> 
                </motion.h1>
            </motion.div>
        </motion.div>
    )
}


