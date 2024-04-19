
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';


function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/contact':
      component = <Contact />
      break
    case '/about':
      component = <About />
      break
    case '/blog':
      component = <Blog />
      break
  }
  return (
    <>
    <NavBar />
    <div className='container'>
      {component}
    </div>
    <Footer />
    </>
  );
}

export default App;
