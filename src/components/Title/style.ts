import styled from "styled-components";

type H1Props = {
  textSize: string;
  textColor: string;

};

export const StyledH1 = styled.h1<H1Props>`
  font-size: ${(props) => props.textSize}px;
  color: ${(props) => props.textColor};
  font-family:'Poppins';
  @media (max-width: 768px) {
    font-size: 1.5rem;
    forn-weight: 700;
  }
`;
