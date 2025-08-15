/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-800 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img 
              src="/alka_steakhouse_logo_white_transparent.png" 
              alt="Ilka Steakhouse" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-stone-400 leading-relaxed mb-4">
             Që nga viti 1889, ne shërbejmë biftekët më të mirë me cilësi të pakompromis dhe shërbim të shkëlqyer.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/restaurantteilka/" 
                className="text-stone-400 hover:text-green-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/Teilka/" 
                className="text-stone-400 hover:text-green-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif text-stone-100 mb-4">Kontakti</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-stone-200">Zenullah Begu 22, </div>
                  <div className="text-stone-400">Kosovë, Vushtrri, 42000</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-stone-200 hover:text-green-400 transition-colors duration-200"
                >
                  +383 49 881 661
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href="mailto:reservations@ilkasteakhouse.com" 
                  className="text-stone-200 hover:text-green-400 transition-colors duration-200"
                >
                  ilkasteak@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-serif text-stone-100 mb-4">Orari</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-400">E hënë - E enjte:</span>
                <span className="text-stone-200">17:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">E premte - E shtunë: </span>
                <span className="text-stone-200">17:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">E dielë</span>
                <span className="text-stone-200">16:00 - 21:00</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-stone-700 rounded-lg">
              <p className="text-stone-300 text-sm">
                <Clock className="w-4 h-4 inline mr-1" />
                 Rekomandohet rezervimi.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-stone-100 mb-4">Lidhje të Shpejta</h3>
            <div className="space-y-2">
              <a 
                href="#philosophy" 
                className="block text-stone-400 hover:text-green-400 transition-colors duration-200"
              >
                Historia Jonë
              </a>
              <a 
                href="#menu" 
                className="block text-stone-400 hover:text-green-400 transition-colors duration-200"
              >
                Menuja
              </a>
              <a 
                href="#events" 
                className="block text-stone-400 hover:text-green-400 transition-colors duration-200"
              >
                Evente Private
              </a>
              <a 
                href="#reservation" 
                className="block text-stone-400 hover:text-green-400 transition-colors duration-200"
              >
                Rezervime
              </a>
              <a 
                href="#" 
                className="block text-stone-400 hover:text-green-400 transition-colors duration-200"
              >
                Gift Cards
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-400 text-sm">
            © 2025 Ilka Steakhouse. Të gjitha të drejtat e rezervuara.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-stone-400 hover:text-green-400 transition-colors duration-200 text-sm"
            >
              Politika e Privatësisë
            </a>
            <a 
              href="#" 
              className="text-stone-400 hover:text-green-400 transition-colors duration-200 text-sm"
            >
              Kushtet e Shërbimit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;