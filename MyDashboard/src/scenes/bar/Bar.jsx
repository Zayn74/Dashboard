import React from 'react'
import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarCharts from '../../components/BarCharts';


export default function Bar() {
  return (
    <Box m="20px">
        <Header title="BAR CHART" subTitle="Simple Bar Chart"/>
        <Box height="75vh">
            <BarCharts/>
        </Box>
    </Box>
  )
}
