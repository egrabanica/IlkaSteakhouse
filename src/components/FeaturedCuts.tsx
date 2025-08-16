/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedCuts = () => {
const cuts = [
  {
    name: "Pjatë pule",
    description: "Pjatë pule e pjekur me lëkurë të artë, e shoqëruar me një sallatë të freskët me lakër të kuqe, oriz, patate të skuqura dhe një gotë salcë. Një shujtë e shijshme dhe e ekuilibruar, perfekte për t'u shijuar në një ambient të ngrohtë restoranti.",
    image: "/images/Pule.png",
    price: "$8"
  },
  {
    name: "Kombinimi i Mishit për 3 Persona",
    description: "Në Steak House te Ilka, Kombinimi i Mishi për 3 persona sjell në tavolinën tuaj një simfoni shijesh.Mish i zgjedhur, i gatuar me mjeshtëri dhe i servirur bujarisht, ideal për t'u ndarë me familjen ose miqtë.Aroma e saj të fton, shija të mbetet gjatë!",
    image: "images/Kombinim3.png",
    price: "$50"
  },
  {
    name: "Biftek viçi",
    description: "Një biftek perfekt i përgatitur me kujdes dhe pasion nga Steak House Ilka!  Kur cilësia dhe shija janë prioritet, gjithçka tjetër është thjesht ekstra. Erëza të freskëta, mish i përzgjedhur dhe një përvojë që do ta mbani mend. ",
    image: "images/biftek.png",
    price: "$15"
  },
  {
    name: "Mushkëritë e viçit të fërguara",
    description: "Mushkëritë e viçit të fërguara 250gr janë krijuar për të kënaqur dashamirësit e kuzhinës tradicionale me një prekje të sofistikuar. ",
    image: "images/mushkeri.png",
    price: "$12"
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







