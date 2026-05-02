import React from 'react'
import FAQ from '../faq/FAQ'
import { footerData } from '../../../data/site'
import { Globe, MoveUp } from 'lucide-react'
import { motion } from 'motion/react'
import Logo from '../../../components/logo'
import { Link } from 'react-router-dom'
import { staggerVarients, footerVarients } from '../../../utils/motion'

export default function Footer() {
  return (
    <div className="h-[200vh] w-full relative">
      <div className='h-screen bg-(--green) absolute inset-0 z-10'>
        <FAQ />
      </div>
      <div className='h-screen bg-(--white) sticky top-0'>
        <FooterContent footerData={footerData} />
      </div>
    </div>
  )
}

const FooterContent = ({ footerData }) => {
  const { hero, supporting, quicklink, trendyplaces, socials, privacy, copy } = footerData

  return (
    <motion.div
      variants={staggerVarients}
      initial='hidden'
      whileInView='visible'
      className='padding_inline_block space-y-8 h-full flex flex-col justify-between'
    >
      {/* Top Section: Logo & Back to Top */}
      <motion.div className='flex justify-between items-end pt-32'>
        <motion.div variants={footerVarients} custom={{ direction: -1 }}>
          <Logo className='bg-(--green) w-fit p-2' secondTextColor='text-(--white)' iconColor='text-(--white)' />
        </motion.div>
        <motion.h2
          className='tracking-[.2em] uppercase text-xs flex items-center justify-center gap-2 cursor-pointer'
          variants={footerVarients}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP
          <MoveUp className='size-4' />
        </motion.h2>
      </motion.div>

      {/* Middle Section: Links & Socials */}
      <motion.div className='flex justify-between'>
        <motion.div className='space-y-4'>
          <motion.p variants={footerVarients} custom={{ direction: -1 }} className='w-sm text-sm'>
            {supporting}
          </motion.p>
          <motion.div className='flex gap-4'>
            {socials.map((social, index) => (
              <motion.div
                key={index}
                title={social.label}
                custom={{ direction: -1 }}
                variants={footerVarients}
                className='hover:-translate-y-1 hover:scale-110 transition-all duration-300'
              >
                <Link to={social.link}>
                  <img src={social.icon} alt={social.label} className='size-6' />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className='flex gap-16'>
          {/* Quick Links */}
          <div className='space-y-4'>
            <motion.div variants={footerVarients}>
              <span className='font-bold'>Quick Links</span>
            </motion.div>
            <motion.div className='space-y-2'>
              {quicklink.map((link, index) => (
                <motion.div key={index} className='flex justify-between' variants={footerVarients}>
                  <Link to={link.link} className='text-base hover:text-(--green) transition-colors duration-300 hover:underline'>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Popular Destinations */}
          <motion.div className='space-y-4'>
            <motion.div variants={footerVarients}>
              <span className='font-bold'>Popular Destination</span>
            </motion.div>
            <motion.div className='space-y-2'>
              {trendyplaces.map((link, index) => (
                <motion.div key={index} className='flex justify-between' variants={footerVarients}>
                  <Link to={link.link} className='text-base hover:text-(--green) transition-colors duration-300 hover:underline'>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Section: Copy & Large Hero Text */}
      <div className='border-t border-black/20 pt-8 2xl:pt-16'>
        <div className='flex justify-between pt-4'>
          <motion.p
            variants={footerVarients}
            custom={{ direction: -1 }}
            className='w-full lg:w-1/2 text-sm'
          >
            {copy}
          </motion.p>
          <div className='flex flex-col justify-between gap-4'>
            <motion.p
              variants={footerVarients}
              className='text-right flex items-center gap-2 text-sm'
            >
              {privacy}
              <Link to="https://phurpasherpa-portfolio.netlify.app/" target='_blank'>
                <Globe className='size-4 hover:text-(--black) transition-colors duration-300' />
              </Link>
            </motion.p>
          </div>
        </div>
        <motion.h1
          className='text-[170px] 2xl:text-[200px] origin-top text-(--green) uppercase text-center tracking-[.15em] font-black'
        >
          {hero.split('').map((letter, index) => (
            <HeroFooter key={index} letter={letter} delay={index * 0.02} />
          ))}
        </motion.h1>
      </div>
    </motion.div>
  )
}

const HeroFooter = ({ letter, className, delay }) => {
  return (
    <motion.span
      initial={{ y: 40, opacity: 0, scaleY: 0 }}
      whileInView={{ y: 0, opacity: 1, scaleY: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay }}
      className={`text-(--green) inline-block tracking-widest origin-top text-center leading-none font-black ${className || ''}`}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  )
}
