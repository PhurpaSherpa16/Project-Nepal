import React from 'react'

export default function Transition({title1, title2, title3, className, hightlight}) {
  return (
    <div className={`h-screen w-full flex items-center justify-center shrink-0 ${className || ""}`}>
        <h1 className='text-(--white) text-center text-[46px] lg:text-[132px]'
        style={{fontFamily:'qaveria'}}>
            <span className={`lg:block inline-block ${hightlight === 'title1' ? 'text-(--green)' : ''}`}>{title1}</span> 
            <span className={`lg:block inline-block ${hightlight === 'title2' ? 'text-(--green)' : ''}`}>{title2}</span> 
            <span className={`lg:block inline-block ${hightlight === 'title3' ? 'text-(--green)' : ''}`}>{title3}</span>
        </h1>
    </div>
  )
}
