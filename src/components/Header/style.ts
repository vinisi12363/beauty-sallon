import styled from "styled-components";


export const HeaderStyle =  styled.header`

    width:100vw;
    height:auto;
    background: #F9F9F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index:999;
    position:fixed;
    top:0;

`

export const HeaderNav = styled.div `
    width: 40vw;
    height:auto;
    background-color:#F9F9F9;
  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right:10px;
    p {
        font-family: 'DM Sans';
        font-size: 20px;
        font-weight:500;
        color: black;
    }
    .selected {
        border-bottom: 3px solid #f67797;
    }
    .option{
        &:hover{
            cursor: pointer;
        }
    }
` 