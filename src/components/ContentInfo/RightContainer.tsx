import { RightPainel, RightImgArea} from "./style";
import image from '../../assets/banner.png';

export default function RightPanel () {
    return(
        <RightPainel>
            <RightImgArea>
              <img src={image}></img>
            </RightImgArea>
     
        </RightPainel>
    );    

}