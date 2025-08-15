/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import FeaturedCuts from './components/FeaturedCuts';
import MenuTeaser from './components/MenuTeaser';
import Experience from './components/Experience';
import Staff from './components/Staff';
import PrivateEvents from './components/PrivateEvents';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <FeaturedCuts />
      <MenuTeaser />
      <Experience />
      <Staff />
      <PrivateEvents />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;