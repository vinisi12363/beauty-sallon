import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { LeftPainel, RightPainel, RightImgArea } from "../ContentInfo/style";
import image from "../../assets/img2.png";
import { AboutContainer, AboutTextArea } from "./style";

export default function About() {
  return (
    <AboutContainer>
      <LeftPainel>
        <RightImgArea>
          <img src={image}></img>
        </RightImgArea>
      </LeftPainel>
      <RightPainel>
        <AboutTextArea>
          <Title text="Sobre nós" textColor="black" textSize="40px"></Title>
          <Subtitle
            textColor="black"
            textSize="20px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. "
          ></Subtitle>
          <Subtitle
            textColor="black"
            textSize="20px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. "
          ></Subtitle>
          <Subtitle
            textColor="black"
            textSize="20px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. "
          ></Subtitle>
        </AboutTextArea>
      </RightPainel>
    </AboutContainer>
  );
}
