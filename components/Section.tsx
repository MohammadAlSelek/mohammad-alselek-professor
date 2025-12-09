import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 flex items-center">
          <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-4 shadow-[0_0_10px_rgba(34,211,238,0.35)]"></span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
