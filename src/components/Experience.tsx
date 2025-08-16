/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';

const Experience = () => {
  const galleryImages = [
  {
    src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Sallë ngrënieje elegante"
  },
  {
    src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Kuzhinier duke përgatitur biftekun"
  },
  {
    src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Kantina e verës"
  },
  {
    src: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Sallë ngrënieje private"
  }
];

  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            <span className="text-green-400">Eksperienca</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Hyr në një atmosferë ku çdo detaj është krijuar për të ofruar momente të paharrueshme.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <div className="space-y-6 text-stone-300 leading-relaxed">
              <p className="text-lg">
                Salla jonë e ngrënies ndërthur ngrohtësinë e elegancës tradicionale të një restoranti "steakhouse" me sofistikimin bashkëkohor. Stolat e veshur me lëkurë, detajet prej druri të ngrohtë dhe ndriçimi i butë krijojnë një atmosferë intime, perfekte për çdo rast.
              </p>
              
              <p>
                Shikoni kuzhinierët tanë mjeshtër në veprim në kuzhinën e hapur, ku çdo pjesë mishi përgatitet me saktësi dhe pasion. Zhurma e lehtë e biftekëve premium në skarët tona të personalizuara krijon një simfoni që e bën edhe më të këndshme eksperiencën tuaj.
              </p>
              
              <p>
               Nga darkat intime për dy persona deri te festimet me miqtë dhe familjen, çdo moment te "Ilka Steakhouse" është krijuar për të qenë i jashtëzakonshëm.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-center">
              <div className="bg-stone-800 p-6 rounded-lg">
                <div className="text-3xl font-serif text-green-400 mb-2">35+</div>
                <div className="text-stone-300 text-sm">Vite Përsosmërie</div>
              </div>
              <div className="bg-stone-800 p-6 rounded-lg">
                <div className="text-3xl font-serif text-green-400 mb-2">28</div>
                <div className="text-stone-300 text-sm">Day Dry-Aging</div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-stone-800 rounded-lg p-8 text-center">
          <blockquote className="text-xl text-stone-200 italic mb-4">
            "Një eksperiencë e jashtëzakonshme që nderon traditën duke përqafuar përsosmërinë moderne. Çdo vizitë ndihet si një rast i veçantë."
          </blockquote>
          <cite className="text-green-400 font-semibold">— James Mitchell, Food & Wine Magazine</cite>
        </div>
      </div>
    </section>
  );
};

export default Experience;