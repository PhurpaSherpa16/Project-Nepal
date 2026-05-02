import { Mouse } from 'lucide-react'
import { motion } from 'motion/react'
import Logo from '../../../components/logo'
import ButtonCTA from '../../../components/button_cta'
import { staggerVarients, itemsVarients, scaleBackgroundVariant } from '../../../utils/motion'

export default function HeroSection() {

    return (
        <motion.div className='h-screen w-full relative z-10'
            variants={staggerVarients}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
            <motion.div className='absolute inset-0 z-0 overflow-hidden'>
                <motion.img src="/hero_background.jpeg" alt="background"
                    variants={scaleBackgroundVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='size-full object-cover object-center ' />
            </motion.div>
            <div className='padding relative z-10 h-full flex flex-col justify-between'>
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
                        <div className='lg:flex justify-between items-end'>
                            <motion.h1 className='text-(--white) text-center lg:text-left text-[60px] lg:text-[132px] tracking-widest'
                                variants={itemsVarients}
                                custom={{ direction: -1, distance: 100, transitionDelay: 1 }}
                                style={{ fontFamily: 'qaveria' }}> <span className='lg:block inline-block'>
                                    ABOVE</span> THE WORLD</motion.h1>
                            <div className='flex flex-col gap-8 pb-4'>
                                <motion.p variants={itemsVarients} custom={{ distance: 100, transitionDelay: 1.2 }}
                                    className='text-(--white) w-full lg:w-sm text-center lg:text-right'>
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
