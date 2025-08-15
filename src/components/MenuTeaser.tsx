/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React, { useState } from 'react';
import { Wine, Utensils } from 'lucide-react';

const MenuTeaser = () => {
  const [activeTab, setActiveTab] = useState('dishes');

  const dishes = [
    { name: "Oysters Rockefeller", description: "Midhje të freskëta me spinaq kremoz dhe barishte.", price: "$18" },
    { name: "Wagyu Carpaccio", description: "Wagyu A5 i prerë hollë me vaj tartufi dhe djathë Parmigiano", price: "$24" },
    { name: "Lobster Bisque", description: "Supë e pasur dhe kremoze me konjak dhe barishte të freskëta", price: "$16" },
    { name: "Caesar Salad", description: "Sallatë krispe, bukë e thekur e bërë në shtëpi dhe djathë Parmigiano i vjetëruar.", price: "$14" }
  ];

const wines = [
{ name: "Caymus Cabernet Sauvignon", description: "Napa Valley, 2020 - I pasur dhe me trup të plotë", price: "$85" },
{ name: "Opus One", description: "Napa Valley, 2018 - Përzierje në stilin Bordeaux", price: "$450" },
{ name: "Dom Pérignon", description: "Champagne, 2012 - Elegant dhe i rafinuar", price: "$320" },
{ name: "Macallan 18", description: "Single Malt Scotch - I butë dhe kompleks", price: "$45/gotë" }
];

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            <span className="text-green-600">Menuja jonë</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Një përzgjedhje e kuruar me kujdes e pjatave dhe verërave më të mira, për ta kompletuar përvojën tuaj të ngrënies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('dishes')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'dishes' 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'text-stone-600 hover:text-green-600'
              }`}
            >
              <Utensils size={20} className="mr-2" />
              Pjatat e veçanta
            </button>
            <button
              onClick={() => setActiveTab('wines')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ml-2 ${
                activeTab === 'wines' 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'text-stone-600 hover:text-green-600'
              }`}
            >
              <Wine size={20} className="mr-2" />
             Pije Alkoolike
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(activeTab === 'dishes' ? dishes : wines).map((item, index) => (
              <div key={index} className="border-b border-stone-200 pb-6 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif text-stone-800 font-semibold">
                    {item.name}
                  </h3>
                  <span className="text-green-600 font-semibold ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Shiko menunë e plotë
          </button>
          {/* <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Download Wine List
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default MenuTeaser;