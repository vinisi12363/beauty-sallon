import { LeftPainel } from "./style";
import { LeftTextArea } from "./style";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { Button } from "../Buttons/Button";

export default function LeftPanel () {
    const alertMssage = () =>{
        alert('clickou!');
    }
    return(
        <LeftPainel>
            <LeftTextArea>
                <Title text="Saúde Natural para os seus cabelos."  textColor="black" textSize="30px"></Title>
                <Subtitle  text="Um salão exclusivo em Jequié, especializado em tratamentos naturais." textColor="#000333" textSize="25px"></Subtitle>
                <Button functionClick={alertMssage} title="Agende agora"></Button>
            </LeftTextArea>
    
        </LeftPainel>
    );    

}