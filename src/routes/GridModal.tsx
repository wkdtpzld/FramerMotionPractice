import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const GridModal = () => {

    const [clickedId, setClickedId] = useState<null | string>(null);

    return (
        <>
            <Grid>
                {[1, 2, 3, 4].map(i =>
                    <Box key={i} layoutId={i + ""} onClick={() => setClickedId(i + "")} />
                )}
            </Grid>
            <AnimatePresence>
                {clickedId
                    ? <Overlay
                        initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
                        animate={{ backgroundColor: 'rgba(0,0,0,0.5)'  }}
                        exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
                        onClick={() => setClickedId(null)}
                        >
                            <Box style={{width: 200, height: 200}} layoutId={clickedId} />
                        </Overlay>
                    : null}
            </AnimatePresence>
        </>
    )
};

export default GridModal;

const Box = styled(motion.div)`
    height: 200px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 50vw;

    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;