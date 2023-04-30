import React from 'react';
import styled from 'styled-components';

import { useState } from 'react';
import CardSectionLayout from '../components/CardSectionLayout';
import HeaderLayout from '../components/HeaderLayout';
import ResetButton from '../components/ResetButton';

export default function FindMonkey() {
    // useState 두개 
    const [correct, setCorrect] = useState(0);
    const [all, setAll] = useState(0);


  return (
    <>
        <ResetButton/>
        <HeaderLayout/>
        <CardSectionLayout/>
    </>
  )
}
