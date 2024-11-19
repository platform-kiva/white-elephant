export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 4, // Start slightly below
    },
    visible: (customDelay = 0) => ({
        opacity: 1,
        y: 0, // Move to original position
        transition: {
            duration: 0.3, // Adjust duration for fade-in
            ease: "easeOut",
            delay: customDelay, // Add custom delay
        },
    }),
    exit: {
        opacity: 0,
        y: -4, // Move slightly above while fading out
        transition: {
            duration: 0.3, // Duration for fade-out
            ease: "easeIn",
        },
    },
};