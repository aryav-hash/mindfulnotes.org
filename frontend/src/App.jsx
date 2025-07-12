import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import home from './pages/home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </>
  )
}

export default App
