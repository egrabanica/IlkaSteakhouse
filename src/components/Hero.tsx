/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';

const backgroundImage = '/images/hero1.png'; // Set your background image path here

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-100 mb-6 leading-tight">
            Perfeksion,
            <br />
            <span className="text-green-400">Që nga viti 1989</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Përjeto cilësinë e traditës, ripërtërirë për shijet e sotme
          </p>
          
          <button 
            onClick={scrollToReservation}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/25"
          >
            Bëj një rezervim
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;