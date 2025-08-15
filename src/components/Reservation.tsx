/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservation" className="py-20 bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
          <span className="text-green-400">Bëj një Rezervim</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Rezervoni tavolinën tuaj për një përvojë të paharrueshme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-xl font-serif text-stone-100 mb-6">Kontakti</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-stone-200 font-medium">049 881 661</div>
                    <div className="text-stone-400 text-sm">Për rezervime dhe pyetje</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-stone-200 font-medium">Orari</div>
                    <div className="text-stone-400 text-sm">
                      E hënë - E enjte: 17:00 - 22:00<br />
                      E premte - E shtunë: 17:00 - 23:00<br />
                      E dielë: 16:00 - 21:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-stone-700 rounded-lg">
                <p className="text-stone-300 text-sm">
                  <strong>Shënim: </strong> Për grupe me 8 ose më shumë persona, ju lutemi na kontaktoni direkt për të siguruar vendosjen më të mirë.
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Emri i plotë
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Emri dhe Mbiemri'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Adresa e email-it
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='johndoe@gmail.com'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='+383 49 881 661'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">
                    Numri i personave
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Persona'}
                      </option>
                    ))}
                    <option value="13+">13+ Persona (Telefonata e detyrueshme.)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">
                    Data e preferuar
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-stone-700 mb-2">
                    Ora e preferuar
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="5:00 PM">17:00 </option>
                    <option value="5:30 PM">17:30 </option>
                    <option value="6:00 PM">18:00 </option>
                    <option value="6:30 PM">18:30 </option>
                    <option value="7:00 PM">19:00 </option>
                    <option value="7:30 PM">19:30 </option>
                    <option value="8:00 PM">20:00 </option>
                    <option value="8:30 PM">20:30 </option>
                    <option value="9:00 PM">21:00 </option>
                    <option value="9:30 PM">21:30 </option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="occasion" className="block text-sm font-medium text-stone-700 mb-2">
                    Rast i veçantë (Opsionale)
                  </label>
                  <input
                    type="text"
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    placeholder="Përvjetor, Ditëlindje, Darkë biznesi, etj."
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="requests" className="block text-sm font-medium text-stone-700 mb-2">
                    Kërkesa të veçanta (Opsionale)
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={3}
                    value={formData.requests}
                    onChange={handleChange}
                    placeholder=" Kufizime në dietë, preferenca vendosjeje, etj."
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Dërgo Kërkesën për Rezervim
                </button>
              </div>

              <p className="mt-4 text-sm text-stone-600 text-center">
                Ne do t'ju kontaktojmë brenda 24 orëve për të konfirmuar rezervimin tuaj.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;