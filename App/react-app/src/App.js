import Main from './mainPage.js';
import About from './aboutMePage.js';
import Projects from './projectsPage.js';
import Resume from './resumePage.js';
import Nav from './navBar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";


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