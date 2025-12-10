import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Links Column 1 */}
        <div className="space-y-3">
          {['Our Story', 'Swatches', 'Our Stores', 'Gift Cards', 'Discover Soho House', 'Our Newsletter'].map(link => (
            <a key={link} href="#" className="block text-sm font-sans text-gray-800 hover:text-gray-500">{link}</a>
          ))}
        </div>

        {/* Links Column 2 */}
        <div className="space-y-3">
          {['Contact us', 'Delivery', 'Returns', 'FAQs'].map(link => (
            <a key={link} href="#" className="block text-sm font-sans text-gray-800 hover:text-gray-500">{link}</a>
          ))}
        </div>

        {/* Links Column 3 */}
        <div className="space-y-3">
          {['Furniture Collection Service', 'Soho Home Trade', 'Interior Design Service'].map(link => (
            <a key={link} href="#" className="block text-sm font-sans text-gray-800 hover:text-gray-500">{link}</a>
          ))}
           <div className="pt-4 space-y-3 font-semibold">
            {['@Facebook', '@Instagram', '@Pinterest'].map(link => (
                <a key={link} href="#" className="block text-sm font-sans text-gray-800 hover:text-gray-500">{link}</a>
            ))}
           </div>
        </div>

        {/* Newsletter Box */}
        <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row md:col-span-2 lg:col-span-1 lg:justify-self-end lg:max-w-sm">
          <div className="md:w-1/2">
            <img
              src="/newsletter.png"
              alt="Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center gap-3">
            <h3 className="font-serif text-xl text-gray-900">Our newsletter</h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Be the first to hear about new collections, interiors advice,
              and exclusive promotions
            </p>
            <button className="mt-1 inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-900 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1920px] mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans">
        <div className="mb-4 md:mb-0 uppercase tracking-widest font-bold text-gray-900">Soho Home</div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>Ship to: UK (Change)</span>
            <div className="flex gap-6">
                <a href="#">Cookie policy</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
            <span>Site by DJR</span>
        </div>
      </div>
    </footer>
  );
};