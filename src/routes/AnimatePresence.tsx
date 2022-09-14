import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import styled from 'styled-components';

const boxVariants = {
    initial: { 
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 360
    },
    leaving: {
        opacity: 0,
        scale: 0,
        y: -100
    },
}

const AnimatePre = () => {

    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);

    return (
        <>
            <button onClick={toggleShowing}>Click Me</button>
            <AnimatePresence>
                {showing
                    ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" />
                    : null}
            </AnimatePresence>
        </>
    )
}

export default AnimatePre;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
