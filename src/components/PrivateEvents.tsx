/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React, { useState } from 'react';
import { Users, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const PrivateEvents = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Mbledhje dhe ngjarje private",
    description: "Perfekte për grupe prej 8-50 persona në sallat tona private"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Menu të personalizuara",
    description: "Eksperienca të personalizuara ngrënieje të krijuara nga kryekuzhinieri ynë ekzekutiv"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Shërbim i përkushtuar",
    description: "Koordinator personal eventi dhe staf shërbimi i dedikuar"
  }
];

const eventSpaces = [
  {
    name: "Dhoma 'Trashëgimia'",
    capacity: "12-16 persona",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Ambient intim privat me elegancën klasike të restoranteve steakhouse"
  },
  {
    name: "Salla e Bordit Ekzekutiv",
    capacity: "8-12 persona",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Perfekte për darka biznesi dhe takime korporative"
  },
  {
    name: "Kantina e Verës",
    capacity: "20-30 persona",
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Përvojë unike ngrënieje e rrethuar nga koleksioni ynë i verërave"
  },
  {
    name: "Salla e Madhe",
    capacity: "40-50 persona",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Hapësira jonë më e madhe për festa dhe raste të veçanta"
  },
  {
    name: "Tavolina e Shefit",
    capacity: "6-8 persona",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Ngrënie ekskluzive pranë kuzhinës me bashkëveprim me shefin"
  }
];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventSpaces.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventSpaces.length) % eventSpaces.length);
  };

  return (
    <section id="events" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            <span className="text-green-600">Evente Private</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Krijoni kujtime të paharrueshme në sallat tona private elegante, të cilat janë perfekte për darka biznesi, festa dhe raste të veçanta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-serif text-stone-800 mb-6">
              Ambiente të Shkëlqyera për Çdo Rast
            </h3>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Nga darkat intime të biznesit deri te festimet madhështore, pesë hapësirat tona të ndryshme private ofrojnë ambientin ideal për eventin tuaj të veçantë.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-green-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-stone-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
                Planifiko Eventin Tënd
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Shkarko Udhëzuesin e Eventeve
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={eventSpaces[currentImageIndex].image}
                alt={eventSpaces[currentImageIndex].name}
                className="w-full h-96 object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-serif mb-1">
                  {eventSpaces[currentImageIndex].name}
                </h4>
                <p className="text-sm text-stone-200 mb-1">
                  {eventSpaces[currentImageIndex].capacity}
                </p>
                <p className="text-sm text-stone-300">
                  {eventSpaces[currentImageIndex].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-stone-900/50 hover:bg-stone-900/75 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-stone-900/50 hover:bg-stone-900/75 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-serif text-stone-800 mb-1">50+</div>
              <div className="text-stone-600 text-sm">Successful Events Monthly</div>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {eventSpaces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'bg-green-600' 
                      : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Event Spaces Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif text-stone-800 mb-8 text-center">
            Sallat Tona Private
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventSpaces.map((space, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-serif text-lg mb-1">{space.name}</h4>
                      <p className="text-sm text-stone-200">{space.capacity}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-stone-600 text-sm">{space.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-stone-800 rounded-lg p-8">
          <h3 className="text-2xl font-serif text-stone-100 mb-4">
            Gati për të Planifikuar Eventin Tuaj?
          </h3>
          <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
            Ekipi ynë i përkushtuar do të punojë me ju për të krijuar një eksperiencë të paharrueshme, të përshtatur sipas nevojave dhe preferencave tuaja.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Kontakto Ekipin Tonë të Eventeve
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;