import styled from "styled-components";
import { motion } from "framer-motion";

const MainDisplay = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  div {
    place-self: center;
  }
  p {
    align-self: start;
  }

  h3:nth-child(1),
  p:nth-child(4) {
    grid-column: 1 / 4;
  }
  h3:nth-child(2),
  p:nth-child(5) {
    grid-column: 5 / 8;
  }
  h3:nth-child(3),
  p:nth-child(6) {
    grid-column: 9 / 13;
  }
`;

export default MainDisplay;
