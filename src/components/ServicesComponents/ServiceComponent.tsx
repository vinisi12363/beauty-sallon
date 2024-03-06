import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { ServiceContainer, ServiceRightPainel, ServiceLeftPainel} from "./style";
import CarouselSection from "../Carroussel/Carousel";
import { useState } from "react";

export default function Services (){
    const  [windowSize] = useState(window.innerWidth);
    return(
        <ServiceContainer>
            <ServiceLeftPainel>
                <Title text="Serviços" textColor="black" textSize="45px"></Title>
            </ServiceLeftPainel>
            <ServiceRightPainel>
                <Subtitle 
                    text="Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais" 
                    textColor="black" 
                    textSize={windowSize >= 415 ? "25px" : "15px"}
                ></Subtitle>
               
            </ServiceRightPainel>
            <CarouselSection></CarouselSection>
        </ServiceContainer>
    );

}