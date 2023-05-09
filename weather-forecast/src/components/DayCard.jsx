import React from 'react'
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';


const DayCard = () => {

  const {area} = useParams();
  const [data,setData] = useState({});

  useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
      .then(response => {
        setData(response.data);
      })
  }, [])

  const { name, weather, main, clouds } = data;

  return (
    <St.CardWrapper>
      <h1>{name}</h1>
      <img src="https://i.pinimg.com/236x/fa/80/5a/fa805af9a1642835c51cdff085ab40f4.jpg"/>
      <St.CardText>
        <p>온도</p>
        <p>{main.temp}</p>
      </St.CardText>
      <St.CardText>
        <p>체감 온도</p>
        <p>{main.feels_like}</p>
      </St.CardText>
      <St.CardText>
        <p>최저/최고</p>
        <p>{main.temp_min}/{main.temp_max}</p>
      </St.CardText>
      <St.CardText>
        <p>구름</p>
        <p>{clouds.all}%</p>
      </St.CardText>
    </St.CardWrapper>
  )
}

export default DayCard

const St = {
  CardWrapper : styled.article`
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