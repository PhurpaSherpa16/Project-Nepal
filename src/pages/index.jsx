import Destination from "./landing/destionation/destination";
import Expereince from "./landing/expereinces/Expereince";
import Footer from "./landing/footer/footer";
import HeroSection from "./landing/hero/hero";
import Testimonials from "./landing/testimonials/testimonials";
import Gallery from "./landing/why/gallary";
import ScrollDownDecorative from "../components/scroll_down_decorative";

export default function Index() {

    return (
        <div className="relative">
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
