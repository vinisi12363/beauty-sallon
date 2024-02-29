import { StyledP } from "./style";

type TextTypeProps = {
    textSize: string;
    textColor:string;
    text:string;
  };

export const Subtitle = (data:TextTypeProps)=>{
    return (
        <StyledP textColor={data.textColor} textSize={data.textSize}>{data.text}</StyledP>
    );


}