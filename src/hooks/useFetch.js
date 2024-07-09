import { useEffect, useState } from 'react'

function useFetch({ url, searchTerm, page }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(`${url}&s=${searchTerm}&page=${page}`)
        if (!response.ok) throw new Error(response.status)

        const data = await response.json()
        if (data.Error) throw new Error(data.Error)

        setData(data.Search)
        setTotalResults(data.totalResults)
        setError(null)
        setLoading(false)
      } catch (error) {
        setData([])
        setTotalResults(0)
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url, searchTerm, page])

  return { data, error, loading, totalResults }
}

export default useFetch
