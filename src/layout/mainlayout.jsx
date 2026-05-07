import { Outlet } from "react-router-dom";
import useLenis from "../utils/lenis";
import Navbar from "../components/nav/navbar";
import { useEffect, useState } from "react";

export default function MainLayout(){
    const [isOpen, setIsOpen] = useState(false)

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

    return(
        <>
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
            <Outlet/>
        </>
    )
}