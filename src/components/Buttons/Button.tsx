import { ButtonSyled } from "./style";
import React from "react";
type buttonProps = {
    title: string;
    functionClick: ()=>void;
}

export const Button: React.FC<buttonProps> = ({title , functionClick}) =>{
    return (
        <ButtonSyled onClick={functionClick} >{title}</ButtonSyled>
    );

}