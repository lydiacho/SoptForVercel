import React from 'react'
import { useParams } from "react-router-dom";
import styled from "styled-components";


const DayCard = () => {

  const {area} = useParams();

  return (
    <St.CardWrapper>
      <h1>{area}</h1>
      <img src="https://i.pinimg.com/236x/fa/80/5a/fa805af9a1642835c51cdff085ab40f4.jpg"/>
      <St.CardText>
        <p>온도</p>
        <p>11.75</p>
      </St.CardText>
      <St.CardText>
        <p>체감 온도</p>
        <p>10.91</p>
      </St.CardText>
      <St.CardText>
        <p>최저/최고</p>
        <p>00/00</p>
      </St.CardText>
      <St.CardText>
        <p>구름</p>
        <p>20%</p>
      </St.CardText>
    </St.CardWrapper>
  )
}

export default DayCard

const St = {
  CardWrapper : styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    width: 20%;
    padding : 2rem 0rem;

    background-color: ${({ theme }) => theme.colors.cardBlue};
    border-radius: 1.5rem;

    color:black;
    font-size: 4rem;

    & > h1 {
      color:white;
      font-size: 5rem;
    }

    & > img {
      width: 70%;
      
      border-radius: 1rem;
    }
    
  `, 
  CardText : styled.div`
    display: flex;
    justify-content: space-between;

    width: 70%;
  `
}