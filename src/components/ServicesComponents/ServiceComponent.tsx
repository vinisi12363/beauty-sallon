import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { LeftPainel, RightPainel } from "../ContentInfo/style";
import { ServiceContainer } from "./style";
import CarouselSection from "../Carroussel/Carousel";

export default function Services (){
    return(
        <ServiceContainer>
            <LeftPainel>
                <Title text="Serviços" textColor="black" textSize="45px"></Title>
            </LeftPainel>
            <RightPainel>
                <Subtitle text="Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais" textColor="black" textSize="25px"></Subtitle>
               
            </RightPainel>
            <CarouselSection></CarouselSection>
        </ServiceContainer>
    );

}