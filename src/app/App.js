import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Header from '../components/pages/header/Header';
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import TechnologySection from '../components/pages/technology/Technology';
import LifestyleSection from '../components/pages/lifestyle/Lifestyle';

function App() {
  return (
    <>
      <Header />
      <Navigation />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tech" element={<TechnologySection />} />
          <Route path="lifestyle" element={<LifestyleSection />} />
        </Routes>
    </>
  );
}

export default App;
