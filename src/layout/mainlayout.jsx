import { Outlet } from "react-router-dom";
import useLenis from "../utils/lenis";

export default function MainLayout(){
    useLenis()
    return(
        <>
            <Outlet/>
        </>
    )
}
    