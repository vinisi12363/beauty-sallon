import styled from 'styled-components';

export const AboutContainer = styled.div`

        width:100%;
        background-color: #ffffff;
        display:flex;
        @media screen and (max-width:415px) {
            display:flex;
            flex-direction:column;
            background-color:#ffffff; 
        }

`

export const AboutTextArea = styled.div `

    display:flex;
    flex-direction:column;

`
 
export const AboutLeftPainel = styled.div`
  width: 50%;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:415px) {
         width:95%;
         height:40dvh;
         background-color:#ffffff;
    }
`
export const AboutRightPainel = styled.div`
  width: 50%;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:415px) {
         width:95%;
         background-color:#ffffff;
         h2{
            font-size:10px;
         }
    }
`