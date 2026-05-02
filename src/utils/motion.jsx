export const staggerVarients = {
    hidden: {},
    visible:{
        transition:{
            delayChildren: 0.6,
            staggerChildren: 0.08
        }
    }
}

export const itemsVarients = {
    hidden : ({ direction = 1, distance = 10 } = {}) =>({
        x: direction * distance,
        opacity:0,
    }),
    visible: ({ transitionDelay } = {}) => ({
        x: 0,
        opacity:1,
        transition:{
            duration: 0.5,
            ease: 'easeOut',
            delay: transitionDelay
        }
    })
}

export const footerVarients = {
    hidden : ({ direction = 1 } = {}) =>({
        x: direction * 10,
        opacity:0,
    }),
    visible: ({
        x: 0,
        opacity:1,
        transition:{
            duration: 0.5,
            ease: 'easeOut',
        }
    })
}

export const scaleBackgroundVariant = {
    hidden: {
        scale: 3,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeIn',
        }
    }
}