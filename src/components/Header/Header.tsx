import { HeaderStyle, HeaderNav , Option} from "./style";
import { Logo } from "../Logo/Logo";
import { useState } from "react";

export const Header = ()=>{
 const [optionClass , setOptionClass] = useState('');
   
      const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const target = event.target as HTMLParagraphElement;
        
        if (target.className) {
            setOptionClass(target.className);
        }
        if(target.className.includes('inicio')){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
        }
        if(target.className.includes('sobre')){
            window.scrollTo({
                top: 990,
                behavior: 'smooth'
              });
        }
        if(target.className.includes('servicos')){
            window.scrollTo({
                top: 1880,
                behavior: 'smooth'
              });
        }
        if(target.className.includes('contato')){
            window.scrollTo({
                top: 3000,
                behavior: 'smooth'
              });
        }
     
      };
      
    return (
        <HeaderStyle>
            <Logo></Logo>
            <HeaderNav>
                <Option  selected={optionClass.includes('inicio') && true} className="inicio"  onClick={handleClick} > Início</Option>
                <Option  selected={optionClass.includes('sobre') && true} className="sobre"  onClick={handleClick}> Sobre </Option>
                <Option  selected={optionClass.includes('servicos') && true} className="servicos"  onClick={handleClick}> Serviços</Option>
                <Option  selected={optionClass.includes('contato') && true} className="contato"  onClick={handleClick}> Contato</Option>
            </HeaderNav>
        </HeaderStyle>
    );

}