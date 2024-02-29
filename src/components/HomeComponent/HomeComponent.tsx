import { Title } from "../Title/Title";
import { Body } from "../BodyComponent/BodyConainer";
import { Header } from "../Header/Header";
import LeftPanel from "../ContentInfo/LeftContainer";
import RightPanel from "../ContentInfo/RightContainer";
import { HomeContent } from "./style";

export const HomePageComponent = () =>{

     return (
        <>
        
        <Header></Header>
        <Body>
            <HomeContent>
                <div className='infoContent'>
                    <LeftPanel></LeftPanel>
                    <RightPanel></RightPanel>
                </div>   
               
                <div>
                    <Title textColor="black" text="Conteúdo" textSize="45px"></Title>
                </div>
                <div>
                    <Title textColor="black" text="Conteúdo" textSize="45px"></Title>
                </div>
                <div>
                    <Title textColor="black" text="Conteúdo" textSize="45px"></Title>
                </div>
            </HomeContent>
           
      
            </Body>

        </>
     );

}