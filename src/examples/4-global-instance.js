import { useEffect } from 'react'
import axios from 'axios'

const productsUrl = 'https://www.course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const response1 = await axios.get(productsUrl)
      const response2 = await axios.get(randomUserUrl)
      console.log(response1)
      console.log(response2)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">global instance</h2>
}
export default GlobalInstance
