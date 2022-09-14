import { motion } from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";

const DragBox = () => {

    const biggerBoxRef = useRef<HTMLDivElement>(null);

    return (
        <BiggerBox ref={biggerBoxRef}>
            <Box
                drag
                dragConstraints={biggerBoxRef}
                dragElastic={1}
                variants={BoxVariants}
                whileHover="hover"
                whileTap="while"
                whileDrag="drag" >
            </Box>
        </BiggerBox>
    )
}

export default DragBox

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoxVariants = {
    start: {
        opacity: 0,
        scale: 0.5,
        },
        end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
        },
            hover: {
            scale: 1.3,
            rotateZ: 90
        },
            while: {
            borderRadius: "100px",
            scale: 0.8
        },
            drag: {
            backgroundColor: "#4cd137",
            transition: {duration: 2}
        }
}
    