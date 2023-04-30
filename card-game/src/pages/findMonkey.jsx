import styled from 'styled-components';

import { useState } from 'react';
import CardSectionLayout from '../components/CardSectionLayout';
import HeaderLayout from '../components/HeaderLayout';

export default function FindMonkey({correct, setCorrect}) {
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