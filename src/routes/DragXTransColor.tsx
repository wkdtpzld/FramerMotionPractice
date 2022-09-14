import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';

const DragX = () => {

    const x = useMotionValue(0);
    const transformX = useTransform(x, [-800, 800], [-360, 360]);
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const gradient = useTransform(x, [-800, 0, 800],
        [
            "linear-gradient(135deg, rgb(49, 131, 185), rgb(134, 190, 137))",
            "linear-gradient(135deg, rgb(59, 46, 55), rgb(221,0,238))",
            "linear-gradient(135deg, rgb(66, 68, 92), rgb(179, 238, 85))"
        ]);
    
    
    return (
        <BiggerBox style={{background: gradient}}>
            <Box
                drag="x"
                dragSnapToOrigin
                style={{ x, rotateZ: transformX, scale }}
            />
        </BiggerBox>
        
    )
}

export default DragX

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled(motion.div)`
    width: 600px;
    height: 600px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`