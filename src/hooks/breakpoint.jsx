import { useEffect, useState } from "react";

const breakpoints = {
    xs: 475,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
}

export const useBreakPoints = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        width,
        isXs: width < breakpoints.xs,
        isSm: width < breakpoints.sm,
        isMd: width < breakpoints.md,
        isLg: width < breakpoints.lg,
        isXl: width < breakpoints.xl,
        is2xl: width < breakpoints["2xl"],
        current: width > breakpoints["2xl"]
            ? "2xl"
            : width > breakpoints.xl
            ? "xl"
            : width > breakpoints.lg
            ? "lg"
            : width > breakpoints.md
            ? "md"
            : "sm",
    }
}