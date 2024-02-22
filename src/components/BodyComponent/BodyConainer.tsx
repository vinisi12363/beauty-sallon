import React from "react";
import { BodyStyled } from "./style";

type bodyProps = {

    children: React.ReactNode;
    
}

export const Body: React.FC<bodyProps> = ({children})=>{
        return(
                <BodyStyled>
                    {children}
                </BodyStyled>
        );


}