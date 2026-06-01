import Destination from "./landing/destionation/destination";
import Expereince from "./landing/expereinces/Expereince";
import Footer from "./landing/footer/footer";
import HeroSection from "./landing/hero/hero";
import Testimonials from "./landing/testimonials/testimonials";
import Gallery from "./landing/why/gallary";
import ScrollDownDecorative from "../components/scroll_down_decorative";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Index() {

    const { hash } = useLocation();

    useEffect(() => {
    if (hash) {
        setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    }
    }, [hash]);


    return (
        <div className="bg-(--white)">
            <HeroSection/>
            <ScrollDownDecorative/>
            <Destination/>
            <Expereince/>
            <Gallery/>
            <Testimonials/>
            <Footer/> 
        </div>
    )
}
