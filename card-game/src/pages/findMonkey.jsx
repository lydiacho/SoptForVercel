import styled from 'styled-components';

import { useState } from 'react';
import CardSectionLayout from '../components/CardSectionLayout';
import HeaderLayout from '../components/HeaderLayout';

export default function FindMonkey() {
    // useState 두개 
    const [correct, setCorrect] = useState(0);
    const [all, setAll] = useState(0);


  return (
    <MainBox>
        <HeaderLayout/>
        <CardSectionLayout/>
    </MainBox>
  )
}

const MainBox = styled.main`
  display:flex;
  flex-direction: column;

  position: absolute;
  
  width: 100%;
  
`