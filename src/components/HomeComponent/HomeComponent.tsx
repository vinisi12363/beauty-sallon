import { Body } from "../BodyComponent/BodyConainer";
import { Header } from "../Header/Header";
import LeftPanel from "../ContentInfo/LeftContainer";
import RightPanel from "../ContentInfo/RightContainer";
import { HomeContent } from "./style";
import About from "../AboutComponent/About";
import Services from "../ServicesComponents/ServiceComponent";
import Contact from "../Contato/Contact";

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
               
                <div  className='infoContent'>
                   <About></About>
                </div>
                <div className="infoContentServices">
                    <Services></Services>
                
                </div>
                <div  className='infoContent'>
                    <Contact></Contact>
                </div>
            </HomeContent>
           
      
            </Body>

        </>
     );

}