import React, { useRef } from 'react'
import { Heading } from '../../../components/heading'
import { useScroll, motion, useSpring, useTransform, useVelocity } from 'framer-motion'
import Transition from '../../../components/transition'
import Gallery from '../why/gallary'
import { useBreakPoints } from '../../../hooks/breakpoint'
import { CurveEffect } from '../../../components/curve_effect'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function Expereince() {
    const {width, current} = useBreakPoints()
    const containerRef = useRef(null)
    
    // Track the scroll of this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    const scrollVelocity = useVelocity(scrollYProgress)

  return (
    <div ref={containerRef} id='experience' className='bg-(--white) relative z-10'>
        {/* Top Curve Effect */}
        <CurveEffect velocity={scrollVelocity} side="top" color="fill-(--white)" />

        <motion.div className='relative overflow-y-hidden space-y-20 py-20 md:py-0 md:space-y-0'>
            {/* content 1 */}
            <Content
            number='01/05'
            title1='Ancient'
            title2='Faith'
            title3='Living'
            tag='culture&faith'
            image1="/exp1_pashupati.jpg"
            image2="/exp1_kumari.jpg"
            image3="/exp1_lumbini.png"
            paragraph={
                <>
                    Where belief is not distant, but woven into daily life—through rituals, devotion, and moments that feel{" "}
                        <span className="text-(--green) font-bold">
                            Timeless, Sacred & Deeply Present.
                        </span>
                </>
            }/>

            {/* content 2 */}
            <Content className="flex-row-reverse"
            number='02/05'
            title1='Beyond'
            title2='Every'
            title3='Horizon'
            tag='horizon'
            left = {false}
            image1="/exp2_EBC.jpg"
            image2="/exp2_langtang.webp"
            image3="/exp2_Tilichio.jpeg"
            paragraph={
                <>
                    Vast mountains and open skies redefine scale, creating a world that feels <span className="text-(--green) font-bold">
                        Limitless, Elevated & Quietly Overwhelming.
                    </span>
                </>
            }/>
            
            {/* content 3 */}
            <Content 
            title1='Path'
            title2='Into'
            title3='Freedom'
            number='03/05'
            tag='trek&trail'
            image1="/exp3_mustang_bike.jpg"
            image2="/exp3_Mountain.jpg"
            image3="/exp3_gandruk.jpg"
            paragraph={
                <>
                    Every trail leads somewhere unknown—through landscapes that feel <span className="text-(--green) font-bold">
                        Timeless, Raw, Remote & Entirely Unrestricted.
                    </span>
                </>
            }/>

            {/* content 4 */}
            <Content className="flex-row-reverse"
            number='04/05'
            title1='Where'
            title2='Flavour'
            title3='Lingers'
            tag='flavour'
            left = {false}
            image1="/exp4_food1.jpg"
            image2="/exp4_food2.jpg"
            image3="/exp4_food3.jpg"
            paragraph={
                <>
                    Food becomes a shared experience, shaped by tradition and connection—simple,  <span className="text-(--green) font-bold">
                        Flavourful & Unforgettable.
                    </span>
                </>
            }/>

        </motion.div>

    </div>
  )
}


export const Content =({className, paragraph, image1, image2, image3, number, title1, title2, title3, left, tag})=>{

    const {width, current} = useBreakPoints()

    return(
        <div>
            {current === 'sm' ? 
                <SmallScreenContent
                    className={className}
                    paragraph={paragraph}
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    number={number}
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    left={left}
                    tag={tag}
                /> 
            :
            current === 'md' ? 
                <MediumScreenContent className={className}
                    paragraph={paragraph}
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    number={number}
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    left={left}
                    tag={tag}
                /> 
                : 
                <LargeScreenContent className={className}
                    paragraph={paragraph}
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    number={number}
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    left={left}
                    tag={tag}
                    />
            }
        </div>
    )
}

const LargeScreenContent = ({ className, paragraph, image1, image2, image3, number, title1, title2, title3, left=true, tag}) => {

    const mainDivRef = useRef(null)
    
    const {scrollYProgress} = useScroll({
        target: mainDivRef,
        offset: ["start end", "end start"]
    })

    const imageFly1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [350, -350]), 
        {stiffness: 100, damping: 20}
    )

    const imageFlyScale1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 1.3]),
        {stiffness: 100, damping: 20}
    )
    
    const imageFly2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [300, -300]), 
        {stiffness: 100, damping: 20}
    )

    const imageFly3 = useSpring(
        useTransform(scrollYProgress, [0, 1], [450, -450]), 
        {stiffness: 100, damping: 20}
    )

    return(
        <>
        <motion.div ref={mainDivRef}
        className={`h-screen w-screen bg-(--white) last:pb-32 flex gap-10 padding_inline_block ${className}`}>
            <div className={`w-full lg:w-4/6 grid place-items-center relative ${left ? 'left-30' : 'right-30'}`}>
                <div className='w-full h-150 md:w-120 2xl:h-200 2xl:w-175 overflow-hidden'>
                    <motion.img src={image1} alt="image 1"
                    style={{y: imageFly1, scale: imageFlyScale1}}
                    className='h-full w-full object-cover object-center relative'/>
                </div>
                <motion.div className={`size-30 md:size-60 2xl:size-72 absolute border-3 border-(--white)
                top-40 ${left ? '-left-5' : 'right-5'} overflow-hidden`}
                style={{y: imageFly2}}>
                    <motion.img src={image2} alt="image 2"
                    style={{scale: imageFlyScale1}}
                    className={`h-full w-full object-cover object-center`}/>
                </motion.div>
                
                <motion.div className={`w-60 h-40 md:h-60 lg:w-100 2xl:h-72 2xl:w-120 overflow-hidden absolute border-3 border-(--white) 
                bottom-0 ${left ? '-left-25' : '-right-25'} overflow-hidden`}
                    style={{y: imageFly3}}>
                    <motion.img src={image3} alt="image 3"
                    style={{scale: imageFlyScale1}}
                    className={`h-full w-full object-cover object-center`}/>
                </motion.div>
            </div>
            <div className='md:w-3/6 h-full flex flex-col gap-4 justify-end relative z-10'>
                <div className={`flex ${left ? 'justify-end':'justify-start'}`}>
                    <p className={`w-sm text-(--black) ${left ? 'text-right':'text-left'}`}>
                    {paragraph}
                    </p>
                </div>
                <Heading text1={title1} text2={title2} text3={title3} className={`text-black text-[46px] md:text-[90px] ${left ? 'text-right':'text-left'}`}/>
                <ExploreButtonSection left={left} number={number} tag={tag}/>
            </div>   
        </motion.div>
        </>
    )
}

const SmallScreenContent = ({paragraph, image1, image2, image3, number, title1, title2, title3, left=true, tag}) => {

    const mainDivRef = useRef(null)
    
    const {scrollYProgress} = useScroll({
        target: mainDivRef,
        offset: ["start end", "end start"]
    })

    const imageFly1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, -50]), 
        {stiffness: 100, damping: 20}
    )

    const imageFlyScale1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 1.3]),
        {stiffness: 100, damping: 20}
    )
    
    const imageFly2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [60, -60]), 
        {stiffness: 100, damping: 20}
    )

    const imageFly3 = useSpring(
        useTransform(scrollYProgress, [0, 1], [40, -40]), 
        {stiffness: 100, damping: 20}
    )

    return(
        <>
            <motion.div ref={mainDivRef}
                className={`h-screen w-screen bg-(--white) flex flex-col gap-10 padding_inline_block`}>
                <div className={`w-full grid place-items-center relative`}>
                    <div className='w-full h-100 overflow-hidden'>
                        <motion.img src={image1} alt="image 1"
                        style={{y: imageFly1, scale: imageFlyScale1}}
                    className='h-full w-full object-cover object-center relative'/>
                </div>
                <motion.div className={`size-30 absolute border-3 border-(--white) right-4 top-0 overflow-hidden`}
                style={{y: imageFly2}}>
                    <motion.img src={image2} alt="image 2"
                    style={{scale: imageFlyScale1}}
                    className={`h-full w-full object-cover object-center`}/>
                </motion.div>
                
                <motion.div className={`w-60 h-40 overflow-hidden absolute border-3 border-(--white) left-4 bottom-10`}
                    style={{y: imageFly3}}>
                    <motion.img src={image3} alt="image 3"
                    style={{scale: imageFlyScale1}}
                    className={`h-full w-full object-cover object-center`}/>
                </motion.div>
            </div>
            <div className='h-full flex flex-col gap-4 justify-start'>
                <div className={`flex`}>
                    <p className={`w-sm text-(--black) ${left ? 'text-right' : 'text-left'}`}>
                    {paragraph}
                    </p>
                </div>
                <Heading text1={title1} text2={title2} text3={title3} className={`text-black text-[46px] md:text-[132px] ${left ? 'text-right':'text-left'}`}/>
                <ExploreButtonSection left={left} number={number} tag={tag}/>
            </div>   
        </motion.div>
        </>
    )
}



const MediumScreenContent = ({ className, paragraph, image1, image2, image3, number, title1, title2, title3, left=true, tag}) => {

    const mainDivRef = useRef(null)
    
    const {scrollYProgress} = useScroll({
        target: mainDivRef,
        offset: ["start end", "end start"]
    })

    const imageFly1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, -50]), 
        {stiffness: 100, damping: 20}
    )

    const imageFlyScale1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 1.3]),
        {stiffness: 100, damping: 20}
    )
    
    const imageFly2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, -50]), 
        {stiffness: 100, damping: 20}
    )

    const imageFly3 = useSpring(
        useTransform(scrollYProgress, [0, 1], [100, -100]), 
        {stiffness: 100, damping: 20}
    )

    return(
        <>
            <motion.div ref={mainDivRef}
        className={`h-screen w-screen bg-(--white) flex padding_inline_block ${className}`}>
            <div className={`w-4/6 grid place-items-center relative ${left ? 'left-20' : 'right-20'}`}>
                <div className='absolute top-100'>
                    <div className='h-200 w-150 overflow-hidden'>
                        <motion.img src={image1} alt="image 1"
                        style={{y: imageFly1, scale: imageFlyScale1}}
                        className='h-full w-full object-cover object-center relative '/>
                    </div>
                    <motion.div className={`size-70 absolute border-3 border-(--white)
                    top-40 ${left ? '-left-15' : '-right-15'} overflow-hidden`}
                    style={{y: imageFly2}}>
                        <motion.img src={image2} alt="image 2"
                        style={{scale: imageFlyScale1}}
                        className={`h-full w-full object-cover object-center`}/>
                    </motion.div>
                    
                    <motion.div className={`h-72 w-120 overflow-hidden absolute border-3 border-(--white) 
                    bottom-0 ${left ? '-left-20' : '-right-15'}`}
                        style={{y: imageFly3}}>
                        <motion.img src={image3} alt="image 3"
                        style={{scale: imageFlyScale1}}
                        className={`h-full w-full object-cover object-center`}/>
                    </motion.div>
                </div>
            </div>
            <div className=' w-3/6 h-full flex flex-col gap-4 justify-end relative z-10'>
                <div className={`flex`}>
                    <p className={`w-sm text-(--black) ${left ? 'text-right' : 'text-left'}`}>
                        {paragraph}
                    </p>
                </div>
                <Heading text1={title1} text2={title2} text3={title3} className={`text-black text-[46px] md:text-[90px] ${left ? 'text-right' : 'text-left'}`}/>
                <ExploreButtonSection left={left} number={number} tag={tag}/>
            </div>   
        </motion.div>
        </>
    )
}

const ExploreButtonSection = ({left, number, tag}) =>{
    return(
        <div className={`flex items-center ${left ? 'justify-end':'justify-start'} gap-4 ${left ? 'text-right':'text-left'}`}>
            <p className={`text-(--black) font-light text-xs pt-1 w-fit`}>{number}</p>
            <Link to={`/explore#${tag}`} className={`tracking-wider flex items-center gap-2 w-fit group`}>Explore More 
                <MoveRight className="group-hover:-rotate-45 transition-all duration-300"/>
            </Link>
        </div>
    )
}