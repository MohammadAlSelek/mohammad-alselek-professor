import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 py-12 print:hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-slate-900 mb-1">{PERSONAL_INFO.name}</h2>
          <p className="text-sm">{PERSONAL_INFO.title}</p>
        </div>
        <div className="flex flex-col md:items-end text-sm">
          <p>© {new Date().getFullYear()} Mohammad Alselek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
