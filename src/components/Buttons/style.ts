import styled from "styled-components";

export const ButtonSyled = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid transperent;
  color: #ffffff;
  background-color: #ff3366;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f67797;
    color: #fff;
  }
`;

export const WhatsButtonStyle = styled.button`
  width: 30vw;
  height: 5vw;

  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  display: inline-block;
  padding: 0px 0px;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-radius: 25px;
  border: 2px solid transperent;
  color: #ffffff;
  background-color: #25d366;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 20px;
  &:hover {
    background-color: lightgreen;
    color: lightgreen;
    border: none;
  }
  img {
    width: 70px;
  }
  @media screen and (max-width:415px) {
    width:30dvh;
    height:10dvh;
    
  }  
`;
export const InstaButtonStyle = styled.button`
  width: 30vw;
  height: 5vw;

  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  display: inline-block;
  padding: 0px 0px;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  color: #ffffff;
  background: linear-gradient(45deg, #ffd353, #fe5440, #9a32c3, #5459ca);
  transition: background-color 0.3s, color 0.3s;
  margin-top: 100px;

  &:hover {
    background-color: lightgreen;
    color: lightgreen;
    border: none;
  }
  img {
    width: 70px;
  }
  @media screen and (max-width:415px) {
    width:30dvh;
    height:10dvh;
    
  }  
`;
