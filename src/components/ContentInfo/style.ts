import styled from 'styled-components';


export const LeftPainel = styled.div`
    width: 50%;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:415px){
      background-color:#f9f9f9;
      min-width:100%;
    }

`
export const RightPainel= styled.div`
    width: 50%;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: transparent;
    @media screen and (max-width:415px){
      background-color:#f9f9f9;
      min-width:100%;
      height:90vw;
    }
`
export const RightImgArea = styled.div `
    
    display:block;
    margin-left:40px;
    width: 30vw;
    height: 20vw;
    border-radius:10px;
    background-color: #F67797;
    img{
        border-radius:10px;
        position:relative;
        top:30px;
        right:30px;
        width:30vw;
    }
  @media screen and (max-width:415px){
        margin-left:10;
        width:80vw;
        height:50vw;

        img{
        border-radius:10px;
        position:relative;
        top:30px;
        right:30px;
        width:80vw;
        
        }
  } 
`

export const LeftTextArea = styled.div`
    width: 20vw;
    background-color: #F9F9F9;
    @media screen and (max-width:415px){
        width:90vw;
        height:80vw;
        button{
            margin-top:15px;
            width:45vw;
            height:20vw;
            border-radius:25px;
            position:relative;
            left:25vw;
        }
    }

`