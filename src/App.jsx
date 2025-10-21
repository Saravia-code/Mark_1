
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {

  return (
    <>

    <BrowserRouter>

    <NavBar/>
    <Routes>

      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />


    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
