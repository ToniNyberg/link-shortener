import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/statistics'

const getStatistics = (urlCode) => {
    const url = baseUrl + '/' + urlCode
    console.log(url)
    return axios.get(url)
}

const statisticsService = {
    getStatistics
}

export default statisticsService