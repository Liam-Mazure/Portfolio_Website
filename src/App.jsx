import { HashRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Navbar from './components/navagation'
import MainPage from './pages/mainPage'
import P5Background from './components/p5Background'
import DustBackground from './components/dustBackground'

function App() {
  

  return (
    <HashRouter>
      <Navbar/>
      <DustBackground/>
      <Routes>
        <Route path = '/' element = {<MainPage/>} exact/>
      </Routes>
    </HashRouter>
  )
}

export default App
