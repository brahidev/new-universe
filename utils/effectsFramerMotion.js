const dropFromUp = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const dropFromDown = {
    hidden: {
        y: "100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    exit: {
        y: "-100vh",
        opacity: 0
    }
}

export const animationsFramer = {dropFromUp,dropFromDown}