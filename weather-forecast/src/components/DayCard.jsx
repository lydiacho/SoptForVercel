import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { WEATER_TYPE } from '../constants/weather';
import Skeleton from './Skeleton';


const DayCard = () => {

  const {area} = useParams();
  const [data,setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getWeather = () => {
    try {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setLoading(true);
    getWeather();
  }, [])

  useEffect(() => {
    setLoading(true);
    getWeather();
  }, [area])

  const { name, weather, main, clouds } = data;

  const imgUrl = WEATER_TYPE.filter(item => weather && (item.description === weather[0].description))

  return (
    <>
      { weather && main && clouds &&
      <St.TotalWrapper>
        {loading? <Skeleton/> :
        <St.CardWrapper>
          <h1>{name}</h1>
          {imgUrl && <img src={imgUrl[0].imgURL}/> }
          <St.CardText>
            <p>온도</p>
            <p>{main?.temp}</p>
          </St.CardText>
          <St.CardText>
            <p>체감 온도</p>
            <p>{main?.feels_like}</p>
          </St.CardText>
          <St.CardText>
            <p>최저/최고</p>
            <p>{main?.temp_min}/{main?.temp_max}</p>
          </St.CardText>
          <St.CardText>
            <p>구름</p>
            <p>{clouds?.all}%</p>
          </St.CardText>
        </St.CardWrapper>
        }
        </St.TotalWrapper>
      }
    </>
  )
}

export default DayCard

const St = {
  TotalWrapper: styled.div`
    display: flex;
    justify-content: center;    

    position: relative;

    width:100%;
    height:40rem;
  `,
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