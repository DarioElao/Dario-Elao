import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';


function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     <Header />
     <Hero />
     <NavBar />
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
