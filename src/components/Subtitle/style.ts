import styled from "styled-components";

type PProps = {
  textSize: string;
  textColor: string;

};

export const StyledP = styled.p<PProps>`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.textSize};
  color: ${(props) => props.textColor};
  font-weight: 400;
  @media (max-width: 415px) {
    font-size: 1.4rem;
    font-weight: normal;
    text-align:justify;
  }
`;
