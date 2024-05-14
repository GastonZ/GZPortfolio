import './App.css';
import Navbar from './components/Navbar';
import { lineInterference } from './assets';
import Hero from './components/Hero';
import About from './components/About';

function App() {

  return (
    <div className='bg-n-7 overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
