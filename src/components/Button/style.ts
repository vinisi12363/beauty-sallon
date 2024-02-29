import styled from 'styled-components';


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
    color: #FFFFFF;
    background-color: #FF3366;
    transition: background-color 0.3s, color 0.3s;
  
  
  &:hover {
    background-color: #F67797;
    color: #fff;
  }
`