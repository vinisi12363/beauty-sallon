import { LogoArea } from "./style";
export const Logo = ()=> {
    return(
        <LogoArea onClick={()=>(alert('clicando no logo'))}>
            <h2 style={{color:"black"}}> Logo Aqui</h2>
        </LogoArea>
    );

}