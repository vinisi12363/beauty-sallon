import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
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
  background-color: #f9f9f9;
  .infoContent {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 50vw;
    background-color: #f9f9f9;

    @media screen and (max-width:415px){
      flex-direction:column-reverse;
      margin-top:8vw;
      background-color:red;
    }
  }
  
  .infoContentServices {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fefefe;
    @media screen and (max-width:415px){
      flex-wrap:wrap-reverse;
      background-color:purple;
    }

  }

`;
