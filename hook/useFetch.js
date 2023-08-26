import { useState, useEffect } from 'react'
import axiosFetch from '@/network/axiosFetch'

const useFetch = ({ method = 'GET', endPoint, query }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await axiosFetch(method, endPoint, query)
      setData(res)
    } catch (err) {
      console.log(err)
      setError(err)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  const refetch = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, isLoading, refetch }
}

export default useFetch
