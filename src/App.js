import './App.css';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
