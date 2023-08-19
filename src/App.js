import './App.css';
import Header from './components/Header';
import { ManBat } from './components/Header'; // Destructured way of importing in Node.js


function App() {
  return (
    <div id='23' className='Different'>
      <Header/>
      Hello 
       
      World!!

      <ManBat/>
      <button>Press</button>
    </div>
  );
}

export default App;
