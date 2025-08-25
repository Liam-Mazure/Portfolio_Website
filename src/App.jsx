import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Navbar from './components/navagation'
import MainPage from './pages/mainPage'
import P5Background from './components/p5Background'
import DustBackground from './components/dustBackground'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <DustBackground/>
      <Routes>
        <Route path = '/' element = {<MainPage/>} exact/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
