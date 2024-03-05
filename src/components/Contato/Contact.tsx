import { Title } from "../Title/Title";
import { WhatsButton } from "../Buttons/ButtonWhats";
import { InstaButton } from "../Buttons/ButtonInsta";
import { LeftPainel, RightPainel } from "../ContentInfo/style";
import { ContactContainer, LeftContactBox, RightContactBox } from "./style";

export default function Contact() {
  return (
    <ContactContainer>
      <LeftPainel>
        <LeftContactBox>
        <Title text="Contato 📔" textColor="black" textSize="45px"></Title>
          <WhatsButton></WhatsButton>
          <InstaButton></InstaButton>
        </LeftContactBox>
      </LeftPainel>
      <RightPainel>
        <RightContactBox>
            <Title text="Localização 📍" textColor="black" textSize="45px"></Title>
            <div className="mapBox">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.2706316579106!2d-40.078761303764544!3d-13.853408713966354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x740afdf9ac870e3%3A0x883810ece044b87a!2sCailane%20Souza%20Beauty!5e1!3m2!1spt-BR!2sbr!4v1709645643535!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </RightContactBox>
      </RightPainel>
    </ContactContainer>
  );
}
