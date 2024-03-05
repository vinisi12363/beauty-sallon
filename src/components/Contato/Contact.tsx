import { MainContainer } from "../MainContainer/style";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import {WhatsButton} from '../Buttons/ButtonWhats'

export default function Contact (){
    return(
        <MainContainer>
            <Title text="Contatos" textColor="black" textSize="45px"></Title>
            <Subtitle text="Fale Comigo aqui:" textColor="black" textSize="30px"></Subtitle>
            <WhatsButton></WhatsButton>
        </MainContainer>
    );

}