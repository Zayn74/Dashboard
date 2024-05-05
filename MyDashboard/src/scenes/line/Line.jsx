import React from 'react'
import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineCharts from './../../components/LineCharts';




export default function Bar() {
  return (
    <Box m="20px">
        <Header title="LINE CHART" subTitle="Simple Line Chart"/>
        <Box height="75vh">
            <LineCharts/>
        </Box>
    </Box>
  )
}
