import InstaIcon from '../../assets/instagram-icon.png';
import {InstaButtonStyle} from './style'

export const InstaButton = () =>{
    return(
        <InstaButtonStyle>
            <img src={InstaIcon}></img>
        </InstaButtonStyle>
    );
}