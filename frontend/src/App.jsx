import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NutrientChecker from './pages/NutrientChecker'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrientChecker" element={<NutrientChecker />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
