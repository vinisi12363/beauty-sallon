import { HeaderStyle, HeaderNav } from "./style";
import { Logo } from "../Logo/Logo";

export const Header = ()=>{
    return (
        <HeaderStyle>
            <Logo></Logo>
            <HeaderNav>
                <p  className="option selected" style={{color:"#F67797"}}> Início</p>
                <p className="option"> Serviços</p>
                <p className="option"> Sobre</p>
                <p className="option"> Contato</p>
            </HeaderNav>
        </HeaderStyle>
    );

}