/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedCuts = () => {
const cuts = [
  {
    name: "Tomahawk Ribeye",
    description: "Një 'ribeye' spektakolar 32oz me kockë, i vjetëruar për 28 ditë. Është pjata jonë yll me marmorim të pabesueshëm dhe shije të pasur gjalpi.",
    image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    price: "$89"
  },
  {
    name: "Filet Mignon",
    description: "Pjesa më e butë e mishit, nga filetoja më e mirë e viçit. Shumë i butë dhe i shijshëm, shërbehet me gjalpin tonë të veçantë me barishte.",
    image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    price: "$52"
  },
  {
    name: "Prime Ribeye",
    description: "Një prerje klasike 16oz me marmorim të shkëlqyer. I pjekur në skarë në mënyrë perfekte dhe i përfunduar me rozmarinë dhe hudhra për një përvojë të paharrueshme.",
    image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    price: "$48"
  },
  {
    name: "Dry-Aged Strip",
    description: "Pjesa jonë e veçantë 'New York strip' 14oz, e vjetëruar për 21 ditë. Shije e fortë me një balancë të përsosur butësie dhe teksture.",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    price: "$44"
  }
];

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            <span className="text-green-400">Përzgjedhje E Cilësisë së Lartë </span>
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
           Zbuloni pjesët tona të veçanta të mishit, ku secila është një kryevepër shijeje dhe mjeshtërie.
          </p>
        </div>

        {/* Cuts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cuts.map((cut, index) => (
            <div 
              key={index}
              className="group bg-stone-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cut.image}
                  alt={cut.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {cut.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-100 mb-3 group-hover:text-green-400 transition-colors duration-200">
                  {cut.name}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-4">
                  {cut.description}
                </p>
                <button 
                  onClick={scrollToMenu}
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                >
                  Shiko Menunë
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          {/* <button 
            onClick={scrollToMenu}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Explore Full Menu
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCuts;