import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const LayOut = () => {

    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((prev) => !prev);

    return (
        <Box onClick={toggleClicked} style={{
            justifyContent: clicked ? "center" : "flex-start",
            alignItems: clicked ? "center" : "flex-start"
        }}>
            <Circle layout />
        </Box>
    )
};

export default LayOut;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    
`;

const Circle = styled(motion.div)`
    background-color: #00a5ff;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`