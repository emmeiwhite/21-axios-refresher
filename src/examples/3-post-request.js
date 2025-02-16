import { useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
const url = 'https://www.course-api.com/axios-tutorial-post'

// Sending data to the server with axios's post method
const PostRequest = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [serverResponse, setServerResponse] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(name, email)
    if (!name || !email) return

    try {
      const response = await axios.post(url, { name, email })

      if (response.status === 201) {
        setServerResponse('User Created Successfully!')
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label
            htmlFor="email"
            className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block">
          login
        </button>

        {serverResponse && <p>{serverResponse}</p>}
      </form>
    </section>
  )
}
export default PostRequest
