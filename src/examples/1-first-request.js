import { useEffect } from 'react'
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products'

const FirstRequest = () => {
  // fetching the API data with axios

  async function fetchData() {
    console.log('inside the fetchData function')
    try {
      const response = await axios(url)
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  // useEffect gets invoked after the initial render for the component
  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">first request</h2>
}
export default FirstRequest
