import { StyledP } from "./style";

type TextTypeProps = {
    textSize: string;
    textColor:string;
  };

export const Subtitle = (data:TextTypeProps)=>{
    return (
        <StyledP textColor={data.textColor} textSize={data.textSize}></StyledP>
    );


}