import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchDadJoke = async () => {
    setLoading(true)
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json'
        }
      })
      console.log(response)

      if (response.status >= 200 && response.status < 300) {
        setLoading(false)
        setJoke(response?.data?.joke)
      }
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <section className="section text-center">
      <button
        className="btn"
        onClick={fetchDadJoke}>
        random joke
      </button>

      {/* Let can do it mutually exclusive for each of the state */}
      <p className="dad-joke">
        {loading && 'Loading ...'}
        {error && 'Error loading resource, please refresh again'}
        {!loading && !error ? joke : ''}
      </p>
    </section>
  )
}
export default Headers
