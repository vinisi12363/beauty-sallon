import styled from "styled-components";

type PProps = {
    selected: boolean
}
 

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
    @media screen and (max-width:420px) {
      height:10vw;
      width:100dvh;
      background-color:#f9f9f9;
    }

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
      
        
    }
 
    .option{
      
    }

    @media screen and (max-width:420px) {
        display:none;
    }
` 

export const Option = styled.p<PProps>`
        font-family: 'DM Sans';
        font-size: 20px;
        font-weight:500;
        color:${props=>props.selected? '#F67797': 'black'};
        border-bottom:${ props=>props.selected? '  3px solid #F67797': 'none'}; 
        &:hover{
            cursor: pointer;
        }
`