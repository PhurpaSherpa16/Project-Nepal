import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Index from "../pages";
import Explore from "../pages/explore/Explore";
import { AnimatePresence } from 'framer-motion';
import PageTransition from "../components/pagetransiton";

export default function MainRoutes(){
    const location = useLocation()

    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<PageTransition><Index/></PageTransition> }/>
                    <Route path="/explore" element={<PageTransition><Explore/></PageTransition>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}