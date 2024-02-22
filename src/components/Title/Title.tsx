import React from "react";
import { StyledH1 } from "./style";

type TextTypeProps = {
    text : string;
    textSize: string;
    textColor:string;
  };

export const Title:React.FC<TextTypeProps> = (data)=>{
    return (
        <StyledH1 textColor={data.textColor} textSize={data.textSize}>{data.text}</StyledH1>
    );


}