import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const box = {
    entry: (back:boolean) => ({
        x: back ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3
        }
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (back:boolean) => ({
        x: back ? -500 : 500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3
        }
    })
}

const AnimateSlider = () => {

    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => {
        setBack(false);
        setVisible((prev) => (prev === 10 ? prev = 1 : prev + 1))
    }

    const prevPlease = () => {
        setBack(true);
        setVisible((prev) => (prev === 1 ? prev = 10 : prev - 1))
    }

    return (
        <>
            <AnimatePresence mode='wait' custom={back}>
                <Box
                    custom={back}
                    key={visible}
                    variants={box}
                    initial="entry"
                    animate="center"
                    exit="exit" >
                    {visible}
                </Box>
            </AnimatePresence>
            <button onClick={nextPlease} style={{ marginBottom: '20rem' }}>next</button>
            <button onClick={prevPlease} style={{ marginBottom: '20rem' }}>prev</button>
        </>
    )
}

export default AnimateSlider;

const Box = styled(motion.div)`
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
