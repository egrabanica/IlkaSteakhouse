/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';
import { Award, ChefHat, Users } from 'lucide-react';

const Staff = () => {
  const teamMembers = [
  {
    name: "Shef kuzhine Marcus Rodriguez",
    position: "Kryekuzhinier Ekzekutiv",
    image: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Me mbi 20 vjet eksperiencë në fushën e kuzhinës, Shefi Rodriguez sjell pasion dhe saktësi në çdo pjatë. I trajnuar në teknikat klasike franceze, por me një qasje moderne amerikane.",
    specialties: ["Ekspert i vjetërimit të mishit", "Eksperiencë me yje Michelin", "I nominuar për çmimin James Beard"]
  },
  {
    name: "Isabella Chen",
    position: "Someliere & Drejtuese Vere",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Isabella kujdeset për koleksionin tonë të gjerë të verërave, duke e përshtatur secilën prej tyre në mënyrë perfekte me pjatat tona me mish. Ekspertiza e saj përfshin si verërat klasike të Botës së Vjetër, ashtu edhe ato inovatore të Botës së Re.",
    specialties: ["Master Someliere", "Eksperte në kombinimin e verërave", "Menaxhimi i kantinës"]
  },
  {
    name: "James Mitchell",
    position: "Menaxher i Përgjithshëm",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "James siguron që çdo përvojë e mysafirëve tanë të tejkalojë pritshmëritë. Kujdesi i tij ndaj detajeve dhe përkushtimi ndaj shërbimit të shkëlqyer i ka dhënë restorantit 'Ilka Steakhouse' reputacionin e tij të lartë.",
    specialties: ["Lidership në hoteleri", "Koordinim eventesh", "Marrëdhënie me klientët"]
  },
  {
    name: "Maria Santos",
    position: "Kryekuzhiniere e Ëmbëlsirave",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Maria krijon ëmbëlsirat tona të veçanta, të cilat janë përfundimi perfekt i përvojës suaj të ngrënies. Arti i saj i transformon përbërësit e thjeshtë në ëmbëlsira të paharrueshme.",
    specialties: ["Ëmbëlsira artizanale", "Specialiste e çokollatës", "Krijime sezonale"]
  }
];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Meet Our <span className="text-green-600">Team</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            The passionate professionals who bring excellence to every aspect of your dining experience
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-1 group-hover:text-green-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold text-sm mb-3">
                  {member.position}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                {/* Specialties */}
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-xs text-stone-500">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <ChefHat className="w-12 h-12 text-green-600" />
            </div>
            <div className="text-3xl font-serif text-stone-800 mb-2">50+</div>
            <div className="text-stone-600">Vite Eksperiencë të Kombinuar</div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-green-600" />
            </div>
            <div className="text-3xl font-serif text-stone-800 mb-2">12</div>
            <div className="text-stone-600">Çmime nga Industria</div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-green-600" />
            </div>
            <div className="text-3xl font-serif text-stone-800 mb-2">25</div>
            <div className="text-stone-600">Anëtarë të Përkushtuar të Ekipit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;