import styled from 'styled-components';


export const CarouselContainer = styled.div`

    width:100%;
    background-color:#f9f9f9;
    overflow-x:hidden;
    display:flex;
    align-items:center;
    justify-content:center;


`
export const CarouselBox = styled.div`

    position: relative;
    top:2vw;
    left:25%;
    background-color:transparent;
    display:flex;
    align-items:center;
    justify-content:center;
  

`
export const CarouselBoxContainer = styled.div`
 width:80vw;
 height:50vw;
 background-color:transparent;
 overflow-x:hidden;
 @media screen and (max-width:415px) {
    width:100%;
    height:80dvh;
    background-color:transparent;
 }
`