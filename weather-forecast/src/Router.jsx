import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import DayForecast from './pages/DayForecast';
import WeekForecast from './pages/WeekForecast';



const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/day" element={<DayForecast/>}>
                <Outlet/>
            </Route>
            <Route path="/day" element={<WeekForecast/>}>
                <Outlet/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router