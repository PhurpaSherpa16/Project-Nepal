import Destination from "./landing/destionation/destination";
import Expereince from "./landing/expereinces/Expereince";
import FAQ from "./landing/faq/FAQ";
import Footer from "./landing/footer/footer";
import HeroSection from "./landing/hero/hero";
import Testimonials from "./landing/testimonials/testimonials";
import Gallery from "./landing/why/gallary";

export default function Index() {

    return (
        <div>
            <HeroSection/>
            <Destination/>
            <Expereince/>
            <Gallery/>
            <Testimonials/>
            <Footer/> 
        </div>
    )
}
