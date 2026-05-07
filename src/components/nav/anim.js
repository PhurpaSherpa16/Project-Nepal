export const menuSlide = {
    hidden: {
        x: "calc(100% + 100px)"
    },
    show: {
        x: "0%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        }
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
        }
    }
}

export const staggerChildren = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.04,
            staggerDirection: -1
        }
    }
}

export const slide = {
    hidden: {
        x: 80,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        x: 80,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}
