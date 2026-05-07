import { MoveRight } from 'lucide-react'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion'
import { Heading } from '../../../components/heading'
import Transition from '../../../components/transition'
import { CurveEffect } from '../../../components/curve_effect'

export default function Destination() {
    const verticalRef = useRef(null)
    const {scrollYProgress: verticalScroll} = useScroll({
        target: verticalRef
    })
    
    const x = useTransform(verticalScroll, [0, 1], ["0", "-135%"])

    const {scrollYProgress: pushOpenToX} = useScroll({
        target: verticalRef,
        offset: ["start start", "end end"]
    })

    const pushX = useTransform(pushOpenToX, [0, 0.1, 0.5], ['0', '0', '-110%'])

    // Velocity-based curvature
    const scrollVelocity = useVelocity(verticalScroll)

  return (
    <div ref={verticalRef} id='destinations' className='h-[1000vh] bg-(--black) relative'>
        <div className='sticky top-0 min-h-screen w-full flex items-center overflow-x-hidden'>
            <Transition title1={'More'} title2={'Than'} title3={'Destinations'} hightlight='title3' className={'fixed inset-0'} />
            <OpeningContent pushX={pushX}/>
            <motion.div style={{x}} className='flex items-center shrink-0 relative'>
                {content.map((item, index)=>(
                    <Content key={index} {...item} index={index} velocity={scrollVelocity}/>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

const OpeningContent = ({pushX}) =>{
    return(
        <motion.div 
        style={{x: pushX}}
        className='min-h-screen w-full flex flex-col md:flex-row items-center justify-center padding_inline py-20 md:py-0
        md:justify-between shrink-0 sticky right-0 bg-(--black) gap-12 md:gap-0'>
            <div className='w-full lg:w-[311px] h-fit md:h-140 flex flex-col justify-between relative z-10 gap-6 md:gap-0'>
                <p className='text-left text-(--white)'>
                    <span className='text-(--green) font-bold'>Beyond </span> 
                    the iconic peaks lies a country rich in rhythm, 
                    culture, and contrast. From ancient streets alive with 
                    history to quiet moments shaped by tradition, 
                    Nepal reveals itself not all at once—but in layers, 
                    waiting to be explored.
                </p>

                <div className='mt-4 items-center gap-1 text-(--white) hidden md:flex'>
                    <span className='tracking-wider'>Explore More</span> <MoveRight className='size-4'/>
                </div>
            </div>

            {/*image*/}
            <div className='h-120 md:h-180 lg:h-140 2xl:180 w-70 md:w-150 lg:w-140 2xl:w-140 overflow-hidden absolute left-1/2 -translate-x-1/2 opacity-50 lg:opacity-100'>
                <img src="/swyambhu.jpg" alt="swyambhu image" className='h-full w-full object-cover
                filter grayscale-100'/>
            </div>

            <div className='relative z-10 h-fit md:h-160 lg:h-140 flex items-end lg:-bottom-7'>
                <Heading text1='More' text2='Than' text3='Mountains' className='text-right text-(--white) text-[46px] md:text-[132px]'/>
            </div>
        </motion.div>
    )
}

const Content = ({heading1, heading2, heading3, paragraph, tag, image, image_alt, index, velocity})=>{
    return(
        <div className={`bg-green-950 text-(--white) h-screen w-[130vw] shrink-0 
        flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 relative
        ${index > 0 ? 'pl-8 md:pl-32' : ''}`}>
            
            {/* Curvature SVG - Only for the first item */}
            {index === 0 && (
                <CurveEffect velocity={velocity} side="left" color="fill-green-950" />
            )}

            <div className='w-full lg:w-2/6 padding_inline space-y-4'>
                <Tag tag={tag}/>
                <Heading text1={heading1} text2={heading2}text3={heading3} className='md:text-[56px] lg:text-[132px]'/>
                <Paragraph>
                    {paragraph}
                </Paragraph>
            </div>
            <div className='lg:w-4/6 w-full'>
                <motion.img
                src={image} alt={image_alt} className='h-120 md:h-180 lg:h-screen w-full object-cover object-center'/>
            </div>
        </div>
    )
}

const Tag = ({tag})=>{
    return(
        <div className='flex items-center gap-1 text-(--white) bg-(--green)/30 w-fit px-2 rounded-full text-sm
        border border-(--white)/30'>
            <span className='tracking-wider'>{tag}</span>
        </div>
    )
}

const Paragraph = ({children})=>{
    return(
        <p className='text-(--white) text-sm'>
            {children}
        </p>
    )
}

const content = [
    {
        tag: 'Ancient • Living • Timeless',
        heading1: 'The',
        heading2: 'Sacred',
        heading3: 'Valley',
        image: '/swyambhu.jpg',
        image_alt: 'swyambhu image',
        paragraph: "Where Ancient Temples and Monasteries stand side by side, and spirituality is not observed from afar—but lived in every moment.",  
    },
    {
        tag: 'Calm • Open • Reflective',
        heading1: 'Lake',
        heading2: 'And',
        heading3: 'Stillness',
        image: '/pokhara.jpg',
        image_alt: 'pokhara image',
        paragraph: "A place where the mountains meet their reflection, and the world feels suspended between movement and calm.",  
    },
    {
        tag: 'Untamed • Quiet • Unpredictable',
        heading1: 'Wild',
        heading2: 'Lowland',
        heading3: 'Life',
        image: '/chitwan.jpg',
        image_alt: 'chitwan image',
        paragraph: "Where dense grasslands conceal life at every turn, and the wild moves freely—unseen, untamed, and always present.",  
    },

]