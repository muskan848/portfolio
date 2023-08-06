import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Routes/Home.js';
import About from './Routes/About.js';
import Contact from './Routes/Contact.js';
import Project from './Routes/Project.js';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}> </Route>
         <Route path='/about' element={<About/>}> </Route>
         <Route path='/contact' element={<Contact/>}> </Route>
         <Route path='/projects' element={<Project/>}> </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
