import React from 'react';
import { BatteryCharging, Wifi, Signal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

const PhoneFrame = ({ videoSrc, avatar, name, quote, country, location }) => {
  return (
    <div className='relative w-72 md:w-80 h-[500px] md:h-[650px] mx-auto'>
      {/* Phone Case/Border */}
      <div className='absolute inset-0 bg-(--black)/30 rounded-[3rem] border-4 border-(--white) shadow-2xl overflow-hidden ring-1 ring-white/10'>
        {/* Status Bar */}
        <div className='absolute top-0 left-0 right-0 h-10 flex justify-between items-center px-8 z-20 text-white'>
          <span className='text-[11px] font-semibold'>9:41</span>
          <div className='flex items-center gap-1.5'>
            <Signal className='size-3' />
            <Wifi className='size-3' />
            <BatteryCharging className='size-3.5' />
          </div>
        </div>

        {/* Notch (Dynamic Island Style) */}
        <div className='absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center border border-white/5'>
            <div className='size-2 bg-neutral-900 rounded-full ml-auto mr-4 shadow-inner' />
        </div>

        {/* Screen / Content */}
        <div className='absolute inset-1 rounded-[2.6rem] bg-black overflow-hidden'>
          {/* Instagram-like Video Player */}
          <div className='relative h-full w-full'>
            <video
              className='h-full w-full object-cover'
              preload='metadata'
              autoPlay
              loop
              muted
              playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Instagram Overlays */}
            <div className='absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/80 via-black/20 to-transparent flex justify-between items-end'>
                <div className='space-y-3'>
                    <div className='flex items-center gap-2.5'>
                        <div className='size-8 rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]'>
                            <div className='size-full rounded-full bg-black border-2 border-black overflow-hidden'>
                                <img src={avatar} alt="avatar" className='size-full object-cover'/>
                            </div>
                        </div>
                        <span className='text-xs text-white font-bold tracking-tight'>{name}</span>
                    </div>
                    <p className='text-xs text-white/90 leading-snug max-w-[200px] font-medium'>
                        {quote.slice(0,120)}... 🇳🇵
                        <br />
                        #{location} #Nepal  #Trekking #Mountains #Travel
                    </p>
                    <div className='flex items-center gap-2 text-[10px] text-white/70'>
                        <span className='bg-white/10 px-2 py-0.5 rounded-full'>♫ Original Audio</span>
                    </div>
                </div>
                
                {/* Side Icons (Instagram Style) */}
                <div className='flex flex-col gap-5 text-white mb-2 items-center'>
                    <div className='flex flex-col items-center gap-1'>
                        <Heart className='size-6 drop-shadow-lg' />
                        <span className='text-[10px] font-medium'>12.5k</span>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <MessageCircle className='size-6 drop-shadow-lg' />
                        <span className='text-[10px] font-medium'>428</span>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <Send className='size-6 drop-shadow-lg' />
                    </div>
                    <div className='flex flex-col items-center gap-1 pt-2'>
                        <Bookmark className='size-6 drop-shadow-lg' />
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20' />
      </div>
    </div>
  );
};

export default PhoneFrame;
