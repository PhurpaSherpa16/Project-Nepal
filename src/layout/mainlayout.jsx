import { Link, Outlet, useLocation } from "react-router-dom";
import useLenis from "../utils/lenis";
import Navbar from "../components/nav/navbar";
import { useEffect, useState } from "react";

export default function MainLayout(){
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const lenisRef = useLenis()

    useEffect(()=>{
        if(!lenisRef.current) return
        if (isOpen) {
            lenisRef.current?.stop()
            document.body.style.overflow = "hidden"
        } else {
            lenisRef.current?.start()
            document.body.style.overflow = ""
        }
    },[isOpen])

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    },[location.pathname])

    return(
        <>
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
            <Outlet/> 
        </>
    )
}