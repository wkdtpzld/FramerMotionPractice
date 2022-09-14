import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const LayOut2 = () => {

    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((prev) => !prev);

    return (
        <div onClick={toggleClicked} style={{padding: '30px'}}>
            <Box>
                {!clicked ? <Circle layoutId='CIRCLE' /> : null}
            </Box>
            <Box>
                {clicked ? <Circle layoutId='CIRCLE' /> : null}
            </Box>
        </div>
        
    )
};

export default LayOut2;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = styled(motion.div)`
    background-color: #00a5ff;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`