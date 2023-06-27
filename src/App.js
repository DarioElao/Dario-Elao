// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     <Header />
     <Hero />
     <About />
     <NavBar />
     <Tech />
     <Projects />
     <Contact />
     <Footer />
     {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

export default App;
