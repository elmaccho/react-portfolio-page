import './App.css';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Project } from './components/Projects/Projects';

function App() {
  return (


      <div className="App">
        
        <span className='blobApp'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </span>


        <NavBar></NavBar>
        <Header></Header>
        <AboutMe></AboutMe>
        <Project></Project>



      </div>


  );
}

export default App;
