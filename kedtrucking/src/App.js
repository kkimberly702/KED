import './App.css';
import { Route, Routes } from "react-router-dom";



//Components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Apply from './Components/Apply';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar/>

      
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Apply" element={<Apply />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
          
        

        </Routes>
      </main>
      
    </div>
  );
}

export default App;
