import React from 'react'
import { Outlet } from 'react-router-dom'
import DayCard from '../components/DayCard';
import PageLayout from '../components/PageLayout'

const DayForecast = () => {
  console.log("이거는 잘 들어오냐?");
  return (
    <PageLayout>
      <DayCard/>
    </PageLayout>
  )
}

export default DayForecast