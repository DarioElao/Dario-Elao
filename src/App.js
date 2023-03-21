import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Tech from './components/Tech';

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     <Header />
     <Hero />
     <NavBar />
     <About />
     <Tech />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
