/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Premium beef cuts"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
                <span className="text-green-600">Historia Jonë</span>
              </h2>
              
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-lg">
                  
                </p>
                  Që nga viti 1989, Ilka Steakhouse ka qenë më shumë se thjesht një restorant—jemi kujdestarë të një tradite kulinarie që nderon artin e përgatitjes së mishit të jashtëzakonshëm.


                <p>
                  Angazhimi ynë nis me përzgjedhjen e llojeve më të mira të mishit, ku secili zgjidhet me kujdes për shijen, butësinë dhe profilin e aromës. Përmes procesit tonë të vjetërimit të thatë (dry-aging), ne e transformojmë mishin e cilësisë së lartë në diçka të jashtëzakonshme.
                </p>
                
                <p>
                  Çdo pjatë që del nga kuzhina jonë përfaqëson ekspertizën, pasionin dhe përkushtimin e patundur të brezave për të krijuar përvoja të paharrueshme ushqimore. Ky nuk është thjesht një vakt—është një festë e mjeshtërisë.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-4">
                <div className="w-16 h-0.5 bg-green-600"></div>
                <span className="text-sm font-semibold text-stone-500 tracking-wider uppercase">
                  Trashëgimi & Përsosmëri
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;