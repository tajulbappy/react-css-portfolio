import React from 'react'
import Index from './routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  )
}

export default App
