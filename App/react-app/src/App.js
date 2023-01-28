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
            <Route path = '/Portfolio_Website/aboutme' element = {<About/>} />
            <Route path = '/Portfolio_Website/main' element = {<Main/>} />
            <Route path = '/Portfolio_Website' element = {<Main/>} />
            <Route path = '/Portfolio_Website/projects' element = {<Projects/>} />
            <Route path = '/Portfolio_Website/resume' element = {<Resume/>} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;