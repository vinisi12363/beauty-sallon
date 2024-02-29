import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100dvh;
  height: 100dvh;
  background-color: purple;
  display: flex;
  flex-direction: column;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: crimson;
  .infoContent {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 50vw;
    background-color: green;
  }
`;
