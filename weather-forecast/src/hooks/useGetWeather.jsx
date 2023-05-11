import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react"


const useGetWeather = (area) => {

    const [dataList,setDataList] = useState([]);
    const [loading, setLoading] = useState(true);


    const getWeekWeather = () => {
        try {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
        .then(response => {
            setDataList(response.data.list.filter((_,idx)=>idx%8===0));
            setLoading(false);
        })
        } catch (err) {
        console.log(err);
        }
    }

    useEffect(() => {
        setLoading(true);
        getWeekWeather();
    }, [])

    useEffect(() => {
        setLoading(true);
        getWeekWeather();
    }, [area])

    return { dataList, loading };

}

export default useGetWeather