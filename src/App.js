import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Card from './components/Card';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Project />
                <Skills />
                <Contact />
              </>
            }
          />
          {/* Component routes */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Specific project routes */}
          <Route path="/colorgenerator" element={<Card />} />
          <Route path="/littlelemon" element={<CardTwo />} />
          <Route path="/passwordgenerator" element={<CardThree />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;