import styled from "styled-components";


export const ContactContainer = styled.div`

    width:100%;
    display:flex;
    flex-direction:row;
    background-color:#ffffff;

    @media screen and (max-width:415px) {
        flex-direction:column;
        
        align-items:center;
        height:auto;
    }

`
export const LeftContactBox = styled.div `
    width:40vw;
    height:30vw;
    display:flex;
    border-radius:10px;
    flex-direction:column;
    background-color:#F67797;
    align-items:center;
    
    @media screen and (max-width:415px) {
        width:100%;
        height:50dvh;
        background-color:#ffffff;
     
    }

`

export const RightContactBox = styled.div `
    width:40vw;
    height:30vw;
    display:flex;
    flex-direction:column;
    background-color:#F67797;
    align-items:center;
    border-radius:10px;
    @media screen and (max-width:415px) {
        width:100%;
        height:50dvh;
        background-color:lightgray;
     
    }

`

export const LeftContainerPainel = styled.div`
    width: 100%;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;

`

export const RightContainerPainel = styled.div`
    width: 100%;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;

`