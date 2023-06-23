import './App.css';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Project } from './components/Projects/Projects';
import { ContactForm } from './components/ContactForm';
import Footer from './components/Footer/Footer';
import Technologies from './components/Technologies/Technologies';

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
        <Technologies></Technologies>
        <Project></Project>
        <ContactForm></ContactForm>
        <Footer></Footer>

      </div>


  );
}

export default App;