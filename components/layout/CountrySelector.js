import styled from "styled-components";
import { motion } from "framer-motion";

const CountrySelector = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  select {
    width: 200px;
    background-color: var(--blue);
    padding: 10px;
    border-radius: 10px;
    color: #fff;
  }
`;

export default CountrySelector;
