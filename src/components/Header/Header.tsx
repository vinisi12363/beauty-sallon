import { HeaderStyle, HeaderNav } from "./style";
import { Logo } from "../Logo/Logo";

export const Header = ()=>{
    return (
        <HeaderStyle>
            <Logo></Logo>
            <HeaderNav>
                <p> opção 1</p>
                <p> opção 2</p>
                <p> opção 3</p>
                <p> opção 4</p>
            </HeaderNav>
        </HeaderStyle>
    );

}