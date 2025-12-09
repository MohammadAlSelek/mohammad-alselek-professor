import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, MapPin, Globe, Cpu } from 'lucide-react';
import { assetPath } from '../services/assetPath';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-cyan-50 overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 break-inside-avoid hero-section">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none print:hidden"></div>
      <div className="absolute inset-0 opacity-10 z-0 print:hidden" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1 hero-text">
            
            {/* Status Pill */}
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-800 mb-6 border border-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)] print:hidden backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              Open for Research Collaboration
            </div>

            <h1 className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl mb-4 print:text-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-700 print:text-black print:bg-none">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="text-2xl text-cyan-700 font-bold mb-3 tracking-wide print:text-black print:text-xl">{PERSONAL_INFO.title}</p>
            
            <p className="text-md text-slate-600 mb-8 font-mono bg-slate-100 inline-block px-3 py-1 rounded border border-slate-200 print:bg-transparent print:border-none print:text-black print:pl-0">
              {PERSONAL_INFO.credentials}
            </p>
            
            {/* Print Contact Header */}
            <div className="hidden print:block mb-6 text-sm border-b border-gray-300 pb-4">
                 <p><strong>Email:</strong> {PERSONAL_INFO.email} &bull; <strong>Phone:</strong> {PERSONAL_INFO.phone}</p>
                 <p><strong>Location:</strong> {PERSONAL_INFO.location}</p>
                 <p><strong>LinkedIn:</strong> {PERSONAL_INFO.linkedin} &bull; <strong>Research:</strong> {PERSONAL_INFO.researchPortal}</p>
            </div>

            <p className="mt-4 max-w-2xl text-lg text-slate-700 leading-relaxed border-l-2 border-cyan-200 pl-6 print:text-black print:text-sm print:border-none print:pl-0">
              {PERSONAL_INFO.about}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 print:hidden">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-full text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(8,145,178,0.3)]"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center space-x-8 print:hidden">
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="w-7 h-7" />
               </a>
               <a href={PERSONAL_INFO.researchPortal} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors flex items-center gap-2 group">
                  <Globe className="w-7 h-7" />
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0">Portal</span>
               </a>
               <div className="flex items-center text-sm text-slate-600">
                 <MapPin className="w-5 h-5 mr-2 text-slate-500" />
                 {PERSONAL_INFO.location}
               </div>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="lg:col-span-5 relative animate-in slide-in-from-right duration-1000 fade-in print:hidden mt-8 lg:mt-0 order-1 lg:order-2 flex justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-100 rounded-[2rem] transform rotate-3 scale-105 opacity-40 blur-3xl"></div>
            
            {/* Image Container - Aspect ratio for portrait */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl group w-72 h-96 md:w-80 md:h-[28rem] bg-white">
                 <img 
                  className="object-cover object-top w-full h-full transition-all duration-700 ease-in-out opacity-90 group-hover:opacity-100 group-hover:scale-105"
                  src={assetPath('profile.jpg')}
                  alt="Mohammad Alselek"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Card 1 */}
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl p-4 rounded-xl border border-slate-200 hidden md:flex items-center gap-4 animate-bounce shadow-2xl shadow-cyan-100" style={{ animationDuration: '3s' }}>
                <div className="bg-cyan-50 p-3 rounded-full border border-cyan-100">
                    <Cpu className="w-6 h-6 text-cyan-600" />
                 </div>
                 <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Specialization</p>
                    <p className="text-md font-bold text-slate-900">Edge AI & TinyML</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 right-0 -mt-40 -mr-40 w-[600px] h-[600px] bg-cyan-200 rounded-full blur-[100px] opacity-40 z-0 print:hidden animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 z-0 print:hidden animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Hero;
