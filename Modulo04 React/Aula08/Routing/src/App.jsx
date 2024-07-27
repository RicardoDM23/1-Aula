import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import QB from './components/QB'
import QG from './components/QG'
import QR from './components/QR'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      
      <Router>
        {/* Routes ou Switch */}
        <Navigation/>
        <Routes>
          {/* Forma 1 sintaxe*/}
          {/* <Route path='/' Component={QB} />
          <Route path='/green' Component={QG} />
          <Route path='/red' Component={QR} /> */}

          {/* Forma 2 sintaxe*/}
          <Route path='/' Component={QB} />
          <Route path='/green' Component={QG} />
          <Route path='/red' element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
