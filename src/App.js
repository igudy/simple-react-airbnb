import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import './style.css';


export default function App() {

  // <Hero />
  return(
    <div>
      <Navbar />
      <Cards />
    </div>
  )
}