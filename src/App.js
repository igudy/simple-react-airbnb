import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './style.css';
import data from './data';


export default function App() {
  const cards = data.map(item => {
  return(
      <Card
        key={item.id}
        item={item}
      />
  )
})

  return(
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  )
}