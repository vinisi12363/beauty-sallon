import styled from "styled-components";

type PProps = {
  textSize: string;
  textColor: string;

};

export const StyledP = styled.h1<PProps>`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.textSize};
  color: ${(props) => props.textColor};
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    forn-weight: 700;
  }
`;
