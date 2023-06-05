import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Service';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    </div>
  );
}

export default App;
