import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Index from "../pages";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Index/>}/>
            </Route>
        </Routes>
    )
}