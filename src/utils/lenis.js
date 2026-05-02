import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function useLenis() {
  const lenisRef = useRef(null)

    useEffect(()=>{
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        lenisRef.current = lenis

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
            lenisRef.current = null
        }
    },[])

    return lenisRef
}
