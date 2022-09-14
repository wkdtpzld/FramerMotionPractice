import styled from 'styled-components'
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommonBox from './routes/CommonBox';
import DragBox from './routes/DragBox';
import DragX from './routes/DragXTransColor';
import SvgAnimation from './routes/SvgAnimation';
import AnimatePre from './routes/AnimatePresence';
import AnimateSlider from './routes/AnimateSlider';
import LayOut from './routes/LayOutAnimation';
import LayOut2 from './routes/LayOutAnimation2';
import GridModal from './routes/GridModal';

function App() {

  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path='/1' element={<CommonBox />}></Route>
          <Route path="/2" element={<DragBox />}></Route>
          <Route path="/3" element={<DragX />}></Route>
          <Route path="/4" element={<SvgAnimation />}></Route>
          <Route path='/5' element={<AnimatePre />}></Route>
          <Route path='/6' element={<AnimateSlider />}></Route>
          <Route path='/7' element={<LayOut />}></Route>
          <Route path='/8' element={<LayOut2 />}></Route>
          <Route path='/9' element={<GridModal />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(59, 46, 55), rgb(221,0,238));
`;