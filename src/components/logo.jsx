import { Boxes } from 'lucide-react'
import React from 'react'

export default function Logo({className, mainTextColor='text-(--white)', 
  secondTextColor='text-(--green)', iconColor='text-(--green)'}) {
  return (
    <div className={className + ' flex items-center gap-2'}>
        <Boxes className={`size-8 ${iconColor}`}/>
        <div className='-space-y-1'>
            <span className={`block ${mainTextColor} text-2xl uppercase tracking-[6px]`}>
                <span style={{fontFamily:'qaveria'}}>Nepal</span>
            </span>
            <span className={`block ${secondTextColor} text-xs`}>Land of Himalayas</span>
        </div>
    </div>
  )
}
