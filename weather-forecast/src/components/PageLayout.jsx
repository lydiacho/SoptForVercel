import React from 'react'
import styled from 'styled-components';
import HeaderLayout from './HeaderLayout';
import SearchBar from './SearchBar';

const PageLayout = () => {
  return (
   <St.Wrapper>
    <HeaderLayout/>
    <SearchBar/>
   </St.Wrapper> 
  )
}

export default PageLayout

const St = {
    Wrapper : styled.section`
        background-color:${({ theme }) => theme.colors.skyblue};
        width:100vw;
        height:100%;
    `
}