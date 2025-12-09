import React from 'react';
import { TEACHING } from '../constants';
import { BookOpen, GraduationCap } from 'lucide-react';

const Teaching: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {TEACHING.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-cyan-200 hover:shadow-[0_0_20px_rgba(8,145,178,0.12)] transition-all flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-cyan-50 p-3 rounded-lg mr-4 flex-shrink-0 border border-cyan-100">
               <BookOpen className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 leading-snug">{item.module}</h4>
              <div className="flex items-center mt-1">
                 <GraduationCap className="w-3 h-3 text-slate-500 mr-1" />
                 <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.level}</span>
              </div>
            </div>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed flex-grow border-l border-slate-200 pl-4">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Teaching;
