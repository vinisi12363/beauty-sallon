import whatsIcon from '../../assets/whats-icon.png';
import {WhatsButtonStyle} from './style'

export const WhatsButton = () =>{
    return(
        <WhatsButtonStyle>
            <img src={whatsIcon}></img>
        </WhatsButtonStyle>
    );
}