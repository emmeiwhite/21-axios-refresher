import { useEffect } from 'react'
import authFetch from '../axios/interceptors'

const url = 'https://www.course-api.com/react-store-products'

const Interceptors = ({ isError, setIsError, products, setProducts }) => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-products')
      setProducts(resp.data)
      // console.log(resp.data)
    } catch (error) {
      setIsError('Error Loading projects')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h2 className="text-center">Interceptors</h2>

      {isError && <p>{isError}</p>}

      {products?.length ? <h3>Total Products are: {products.length}</h3> : ''}
    </>
  )
}
export default Interceptors
