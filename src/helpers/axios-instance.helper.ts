import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7777/api/v1',
})

export default axiosInstance
