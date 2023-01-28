import './App.css';
import Main from './Pages/mainPage';
import About from './Pages/aboutMePage';
import Projects from './Pages/projectsPage';
import Resume from './Pages/resumePage';
import Nav from './Components/navBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path = '/aboutme' element = {<About/>} />
            <Route path = '/main' element = {<Main/>} />
            <Route path = '/' element = {<Main/>} />
            <Route path = '/projects' element = {<Projects/>} />
            <Route path = '/resume' element = {<Resume/>} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;