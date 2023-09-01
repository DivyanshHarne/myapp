import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './components/Home';
// import Task from './components/Task';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/about' element={<About/>}/>  
        <Route path='/contact' element={<Contact/>}/>  
        <Route path='/user' element={<User/>}/>  
      </Routes>       
      <Footer/>       
              
       
        
    </BrowserRouter>
  );
}

export default App;
