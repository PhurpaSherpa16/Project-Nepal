import BurgerIcon from "./burger_icon"
import MenuList from "./menu_list"
import { AnimatePresence } from "motion/react"

export default function CurvedMenu({setIsOpen, isOpen}) {

    return(
        <div className="relative">
            <BurgerIcon setIsOpen={setIsOpen} isOpen={isOpen}/>

            <AnimatePresence mode="wait">
                {isOpen && <MenuList setIsOpen={setIsOpen} />}
            </AnimatePresence>
        </div>
    )
}
