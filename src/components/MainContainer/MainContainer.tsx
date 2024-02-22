import React from 'react';
import {MainContainer} from './style';

type mainContainerProps = {
  children:React.ReactNode;
}

export const MainContainerArea: React.FC<mainContainerProps> = ({children})=>{
    return(
        <MainContainer>{children}</MainContainer>
    );
}
