
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


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
  }
  return (
    <>
    <NavBar />
    <div className='container'>
      {component}
    </div>
    </>
  );
}

export default App;
