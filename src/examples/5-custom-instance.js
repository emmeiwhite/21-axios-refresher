import { useEffect } from 'react'
import axios from 'axios'

import authFetch from '../axios/custom'
const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    //  Lets make 2 API calls : one from the custom axios instance and one from normal axios call

    try {
      const response1 = await authFetch('/react-store-products')
      const response2 = await axios.get(randomUserUrl)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">custom instance</h2>
}
export default CustomInstance
