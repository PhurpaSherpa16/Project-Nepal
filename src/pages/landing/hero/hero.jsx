import { Mouse } from 'lucide-react'
import { motion } from 'motion/react'
import Logo from '../../../components/logo'
import ButtonCTA from '../../../components/button_cta'
import { staggerVarients, itemsVarients, scaleBackgroundVariant } from '../../../utils/motion'
import { HeroSectionData } from '../../../data/site'

export default function HeroSection() {

    return (
        <motion.div id='hero' className='h-screen w-full relative z-10'
            variants={staggerVarients}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
            <motion.div className='absolute inset-0 z-0 overflow-hidden'>
                <motion.img src={HeroSectionData.hero_background} alt="background"
                    variants={scaleBackgroundVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='size-full object-cover object-center'/>
            </motion.div>
            <div className='padding relative z-10 h-full flex flex-col justify-between pb-20'>
                <header className='flex justify-between'>
                    <motion.div variants={itemsVarients} custom={{ direction: -1, distance: 100, transitionDelay: 0.5 }} >
                        <Logo />
                    </motion.div>
                    <motion.div variants={itemsVarients} custom={{ distance: 100, transitionDelay: 0.7 }}>
                        <ButtonCTA />
                    </motion.div>
                </header>
                <div className='h-fit w-full'>
                    <div>
                        <div className='md:flex justify-between items-end'>
                            <motion.h1 className='text-(--white) text-center md:text-left text-[60px] md:text-[132px] tracking-widest'
                                variants={itemsVarients}
                                custom={{ direction: -1, distance: 100, transitionDelay: 1 }}
                                style={{ fontFamily: 'qaveria' }}> <span className='md:block inline-block'>
                                    ABOVE</span> THE WORLD</motion.h1>
                            <div className='flex flex-col gap-8 pb-4'>
                                <motion.p variants={itemsVarients} custom={{ distance: 100, transitionDelay: 1.2 }}
                                    className='text-(--white) w-full md:w-sm text-center md:text-right'>
                                    <span style={{
                                        fontFamily: 'qaveria'
                                    }} className='text-(--green) text-[20px]'>Discover Nepal, </span> where vast mountain views
                                    meet quiet cultural richness.
                                    A destination both expansive and intimate— crafted for those seeking meaning.
                                </motion.p>
                                <div className='flex justify-between items-end'>
                                    <motion.div variants={itemsVarients} custom={{ distance: 100, transitionDelay: 1.4 }}>
                                        <h1 className='text-(--white) text-[20px] text-right'>Millions <span className='align-top text-xs'>+</span></h1>
                                        <p className='text-(--green) text-right'>Visitors Annually</p>
                                    </motion.div>
                                    <motion.div variants={itemsVarients} custom={{ distance: 100, transitionDelay: 1.6 }}>
                                        <div className='flex items-end justify-end -space-x-2'>
                                            {travelers.map((traveler, index) => (
                                                <img key={index} src={traveler} alt="" className='size-8 rounded-full border border-(--white)' />
                                            ))}
                                        </div>
                                        <p className='text-(--green) text-right'>Loved WorldWide</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full bg-linear-to-t from-(--black) to-transparent absolute inset-0' />
        </motion.div>
    )
}


const travelers = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png'
]
