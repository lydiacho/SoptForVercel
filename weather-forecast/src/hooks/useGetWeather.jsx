import axios from 'axios';
import { useEffect, useState } from "react"


const useGetWeather = (range, area) => {

    const [dataList,setDataList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getWeekWeather = () => {
        try {
            if (range === "week") {
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
                .then(response => {
                    setDataList(response.data.list.filter((_,idx)=>idx%8===0));
                    setLoading(false);
                })
            }
            else if (range === "day") {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
                .then(response => {
                    setDataList(response.data);
                    setLoading(false);
                })
            }
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