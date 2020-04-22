import styled from "styled-components";
import { motion } from "framer-motion";

const Country = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  div {
    display: flex;
    grid-row: 2;
  }

  div:nth-child(1) {
    grid-column: 2 / 6;
    justify-self: start;
    grid-row: 1;
    h3 {
      margin-right: 10px;

      &:nth-child(2) {
        color: var(--red);
      }
    }
  }

  div:nth-child(2) {
    grid-column: 1 / 4;
    flex-direction: column;
  }
  div:nth-child(3) {
    flex-direction: column;
    grid-column: 5 / 8;
  }
  div:nth-child(4) {
    flex-direction: column;
    grid-column: 9 / 13;
  }
  @media screen and (max-width: 500px) {
    div {
      grid-column: 1 / 13 !important;
      grid-row: auto;
    }
  }
`;

export default Country;
