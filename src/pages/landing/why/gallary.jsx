import React, { useRef } from 'react'
import Transition from '../../../components/transition'
import { Content } from '../expereinces/Expereince'
import { useScroll, useSpring, useTransform, motion } from 'motion/react'
import useMouseHover from '../../../hooks/useMouseHover'

export default function Gallery() {
    const mainDivRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target: mainDivRef,
        offset: ["start end", "end start"]
    })

    const scale = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 0.9]),
        {stiffness: 100, damping: 30}
    )
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 0.6]),
        {stiffness: 100, damping: 30}
    )


  return (
    <div ref={mainDivRef} className='relative h-[650vh] bg-(--black)'> 
        <div className={`h-screen w-full flex items-center justify-center shrink-0 sticky top-0`}>
            <motion.h1 className='text-(--white) text-center text-[46px] lg:text-[132px]'
            style={{fontFamily:'qaveria', scale, opacity}}>
                <span className={`lg:block inline-block`}>Why </span> 
                <span className={`lg:block inline-block text-(--green)`}>Nepal</span> 
                <span className={`lg:block inline-block`}>is Different?</span>
            </motion.h1>
        </div>

        <div className='h-fit w-full absolute inset-0 z-20 overflow-scroll'>
            {/* content 5 */}
            <div className='h-screen w-full overflow-hidden'>
                <Content 
                title1='Human'
                title2='Warmth'
                title3='Within'
                tag='05/05'
                image1="/exp5_pic1.png"
                image2="/exp5_pic2.jpg"
                image3="/exp5_pic3.jpg"
                paragraph={
                    <>
                        In shared moments and quiet smiles, connection feels effortless <span className="text-(--green) font-bold">
                            Warm, Genuine & Love Care.
                        </span>
                    </>
                }/>
            </div>

            <div className='h-[80vh] -top-100'/>
                <ImageGallery 
                    image1="/gallery3.jpg" image2="/gallery4.jpg" 
                    alt1="pokhara" alt2="pokhara" 
                    heading1="Always Connected" supporting1="Even in quiet landscapes, the world stays within reach—connected, simple, and seamless."
                    heading2="Unmatched Diversity" supporting2="From peaks to lowlands, every journey reveals something different, vast, and unexpected."
                    image1_position='object-left' image2_position='object-left'/>
                    
                <ImageGallery 
                    image1="/gallery1.jpg" image2="/gallery2.jpg" 
                    alt1="pokhara" alt2="pokhara" 
                    heading1="Genuine Hospitality" supporting1="A warmth that feels natural—welcoming, open, and quietly genuine."
                    heading2="Safe To Explore" supporting2="A place where you move freely, feeling secure, comfortable, and at ease."
                    image1_position='object-center'/>


                <ImageGallery 
                    image1="/gallery5.jpg" image2="/gallery6.webp" 
                    alt1="pokhara" alt2="pokhara" 
                    heading1="Effortless Value" supporting1="Experiences that feel rich and meaningful—yet remain accessible, balanced, and rewarding."
                    heading2="Meaningful Travel" supporting2="More than a visit—moments that stay with you, feeling deep, personal, and lasting."/>
            </div>
    </div>
  )
}

const ImageGallery = ({image1, image2, alt1, alt2, heading1, supporting1, heading2, supporting2, 
    image2_position='object-center', image1_position='object-center'})=>{
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)
    const {handleMouseEnter, left, top} = useMouseHover({ref:imageRef})
    
    const {scrollYProgress} = useScroll({
        target: imageDivRef,
        offset: ["start end", "end start"]
    })

    const imageFly1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -350]),
        {stiffness: 100, damping: 20}
    )
    const textFly1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -450]),
        {stiffness: 100, damping: 20}
    )
    const textFly2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -400]),
        {stiffness: 100, damping: 20}
    )

    const imageFlyScale = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 1.6]),
        {stiffness: 100, damping: 20}
    )


    return(
        <div ref={imageDivRef} className='h-fit w-full object object-center-cover px-16'>
            <motion.div
            ref={imageRef} 
            onMouseEnter={handleMouseEnter}
            className='text-(--white)
            space-y-4 relative w-fit'>
                <motion.div
                style={{y: imageFly1}}
                className='h-140 w-100 2xl:h-170 2xl:w-130 overflow-hidden'>
                    <motion.img 
                        style={{
                            scale: imageFlyScale,
                            top: top,
                            left: left,
                            translateX: '-65%',
                            translateY: '-50%'
                        }}
                    src={image1} alt={alt1} 
                    className={`h-full w-full object-cover absolute ${image1_position}`}/>
                </motion.div>
                <motion.div
                style={{y:textFly1}}>
                    <h1>{heading1}</h1>
                    <p className='w-sm text-(--white)'>{supporting1}</p>
                </motion.div>
            </motion.div>
            <motion.div 
            ref={imageRef} 
            onMouseEnter={handleMouseEnter} 

            className='flex item-end justify-end'>
                <div className='text-(--white) space-y-4'>
                    <motion.div 
                    style={{y: imageFly1}}
                    className='h-140 w-100 2xl:h-170 2xl:w-130 overflow-hidden'>
                        <motion.img 
                        style={{
                            scale: imageFlyScale
                        }}
                        src={image2} alt={alt2} className={`h-full w-full object-cover ${image2_position}`}/>
                    </motion.div>
                    <motion.div
                        style={{y:textFly2}} 
                        className='flex flex-col items-end'>
                        <h1 className='text-right'>{heading2}</h1>
                        <p className='w-sm text-right text-(--white)'>{supporting2}</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
