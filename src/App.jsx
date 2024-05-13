import './App.css';
import Navbar from './components/Navbar';
import { lineInterference } from './assets';
import Hero from './components/Hero';
import About from './components/About';

function App() {

  return (
    <div className='min-h-screen bg-n-7'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
