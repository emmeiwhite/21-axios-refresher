import { useState } from 'react'
import Title from './components/Title'
import Setup from './examples/6-interceptors'

function App() {
  const [isError, setIsError] = useState('')
  const [products, setProducts] = useState([])
  return (
    <main>
      <Title />
      <Setup
        isError={isError}
        setIsError={setIsError}
        products={products}
        setProducts={setProducts}
      />
    </main>
  )
}

export default App
