import styled from 'styled-components';


import { useState } from 'react';
import CardSectionLayout from '../components/CardSectionLayout';
import HeaderLayout from '../components/HeaderLayout';
import Modal from '../components/Modal';

export default function FindMonkey({correct, setCorrect}) {
    const [all, setAll] = useState(5);
    const [success, setSuccess] = useState(false);

  return (
    <MainBox>
        <HeaderLayout correct={correct} all={all}/>
        <CardSectionLayout all={all} setAll={setAll} correct={correct} setCorrect={setCorrect} setSuccess={setSuccess}/>
        <Modal success={success} setSuccess={setSuccess}/>
    </MainBox>
  )
}

const MainBox = styled.main`
  display:flex;
  flex-direction: column;

  position: absolute;
  
  width: 100%;
  
`