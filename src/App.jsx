import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductShowcase from './Components/ProductShowcase';
import './Styles/Body.css';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

function App() {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductShowcase />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
