import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

const CommonBox = () => {

    return (
        <Box transition={{ type: "spring", bounce: 0.5 }} initial={{ scale: 2 }} animate={{ scale: 1, rotateZ: 360 }} />
    )
}

export default CommonBox

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

