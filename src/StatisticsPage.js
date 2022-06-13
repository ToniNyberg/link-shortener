import React, { useState, useEffect } from 'react'
import statisticsService from './services/statisticsService'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Bar } from "react-chartjs-2";
import _ from 'lodash';
import { Chart, registerables } from 'chart.js'

const StatisticsPage = () => {
  const [statistics, setStatistics] = useState([])
  Chart.register(...registerables)
  let params = useParams()
  const urlCode = params.urlCode

  useEffect(() => {
    if(urlCode && Object.keys(statistics).length === 0) {

      statisticsService
      .getStatistics(urlCode)
      .then(response => {
        console.log('statistics', response.data)
        setStatistics(response.data)
      })
    }
  }, [urlCode, statistics])

  const datestamps = statistics?.urlVisits?.map(visits => visits.date)
  const dates = datestamps?.map(datestamp => {
    const date = new Date(datestamp).toISOString().replace(/T.*/,'').split('-').reverse().join('-');
    return date
  })

  const datesAndFrequency = _.countBy(dates);
  const visitData = Object.values(datesAndFrequency)
  const labels = _.uniq(dates)

  console.log(datesAndFrequency,'data', Object.values(datesAndFrequency), 'labels', _.uniq(dates))
  const data = {
    labels: labels,
    datasets: [
      {label: "Visits", 
      data: visitData,
      backgroundColor: "#6699CC"
    } ],
    options: {
      maintainAspectRatio: false,
    }
  }

  return (
    <div>
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center">
      <Grid item xs={2}>
    <Card>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Statistics
        </Typography>
        <Typography variant="h5" component="div">{statistics?.url?.shortUrl}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">Total visits: {statistics.count}</Typography>
      </CardContent>
    </Card>
      </Grid>
    </Grid>
    <Bar data={data} />
    </div>
  )
}

export default StatisticsPage