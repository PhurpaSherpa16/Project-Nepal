import { MoveRight } from 'lucide-react'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heading } from '../../../components/heading'
import Transition from '../../../components/transition'

export default function Destination() {
    const verticalRef = useRef(null)
    const { scrollYProgress: verticalScroll } = useScroll({
        target: verticalRef
    })

    const x = useTransform(verticalScroll, [0, 1], ["0", "-83.1%"])

    const { scrollYProgress: pushOpenToX } = useScroll({
        target: verticalRef,
        offset: ["start start", "end end"]
    })

    const pushX = useTransform(pushOpenToX, [0, 0.2, 0.5], ['0', '0', '-100%'])


    return (
        <div ref={verticalRef} className='h-[700vh] bg-(--black) relative'>
            <div className='sticky top-0 h-fit w-fit flex items-center overflow-x-hidden '>
                <motion.div style={{ x }} className='flex items-center shrink-0 relative bg-amber-400'>
                    <OpeningContent />
                    {content.map((item, index) => (
                        <Content key={index} {...item} index={index} />
                    ))}
                    <Transition title1={'More'} title2={'Than'} title3={'Destinations'} hightlight='title3' />
                </motion.div>
            </div>
        </div>
    )
}

const OpeningContent = () => {
    return (
        <motion.div
            className='h-screen w-screen flex items-center padding_inline
        justify-between shrink-0 bg-(--black) relative'>
            <div className='w-[311px] h-140 flex flex-col justify-between relative z-10'>
                <p className='text-left text-(--white)'>
                    <span className='text-(--green) font-bold'>Beyond </span>
                    the iconic peaks lies a country rich in rhythm,
                    culture, and contrast. From ancient streets alive with
                    history to quiet moments shaped by tradition,
                    Nepal reveals itself not all at once—but in layers,
                    waiting to be explored.
                </p>

                <div className='mt-4 flex items-center gap-1 text-(--white)'>
                    <span className='tracking-wider'>Explore More</span> <MoveRight className='size-4' />
                </div>
            </div>

            {/*image*/}
            <div className='h-140 w-100 overflow-hidden absolute left-1/2 -translate-x-1/2'>
                <img src="/swyambhu.jpg" alt="swyambhu image" className='h-full w-full object-cover
                filter grayscale-100'/>
            </div>

            <div className='relative z-10 h-140 flex items-end -bottom-7'>
                <Heading text1='More' text2='Than' text3='Mountains' className='text-right' />
            </div>
        </motion.div>
    )
}

const Content = ({ heading1, heading2, heading3, paragraph, tag, image, image_alt, index }) => {
    return (
        <div className={`bg-green-950 text-(--white) h-screen w-[130vw] shrink-0 
        flex items-center justify-center gap-16
        ${index > 0 ? 'pl-32' : ''}`}>
            <div className='w-2/6 padding_inline space-y-4'>
                <Tag tag={tag} />
                <Heading text1={heading1} text2={heading2} text3={heading3} />
                <Paragraph>
                    {paragraph}
                </Paragraph>
            </div>
            <div className='w-4/6'>
                <img src={image} alt={image_alt} className='h-screen w-full object-cover object-center' />
            </div>
        </div>
    )
}

const Tag = ({ tag }) => {
    return (
        <div className='flex items-center gap-1 text-(--white) bg-(--green)/30 w-fit px-2 rounded-full text-sm
        border border-(--white)/30'>
            <span className='tracking-wider'>{tag}</span>
        </div>
    )
}

const Paragraph = ({ children }) => {
    return (
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