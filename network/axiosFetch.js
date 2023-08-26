import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
})

const axiosFetch = async (method, endPoint, query = {}) => {
  const options = {
    method,
    url: `/${endPoint}`,
    params: query,
  }

  try {
    const response = await axiosInstance(options)
    return response.data.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default axiosFetch
