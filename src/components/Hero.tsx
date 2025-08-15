/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';
import VideoCarousel from './VideoCarousel';
import { defaultHeroVideos } from '../utils/videoConfig';

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Carousel Background */}
      <div className="absolute inset-0">
        <VideoCarousel 
          videos={defaultHeroVideos} 
          autoplayInterval={12000}
          showControls={true}
          showIndicators={true}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-100 mb-6 leading-tight">
            Perfeksion,
            <br />
            <span className="text-green-400">Që nga viti 1889</span>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;