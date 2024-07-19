import './index.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About.jsx';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
