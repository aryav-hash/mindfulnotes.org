import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NutrientChecker from './pages/NutrientChecker';
import RecordParameters from './pages/RecordParameters';
import Report from './pages/Report';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrientChecker" element={<NutrientChecker />}></Route>
          <Route path="/recordParameters" element={<RecordParameters />}></Route>
          <Route path="/report" element={<Report />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
