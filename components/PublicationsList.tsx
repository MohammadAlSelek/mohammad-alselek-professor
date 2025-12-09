import React from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Mic, Book, ExternalLink, ArrowUpRight } from 'lucide-react';

const PublicationsList: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-8 py-5 border-b border-slate-200 flex justify-between items-center">
         <h4 className="font-bold text-slate-900 flex items-center">
            Recent Work
         </h4>
         <span className="text-xs font-normal text-slate-500 hidden sm:block">Selected from Google Scholar</span>
      </div>
      <div className="divide-y divide-slate-200">
        {PUBLICATIONS.map((pub, index) => (
          <div key={index} className="p-8 hover:bg-slate-50 transition-colors group break-inside-avoid">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-slate-300 transition-colors">
                {pub.type === 'Journal' && <FileText className="w-5 h-5 text-blue-500" />}
                {pub.type === 'Conference' && <Mic className="w-5 h-5 text-purple-500" />}
                {pub.type === 'Book Chapter' && <Book className="w-5 h-5 text-emerald-500" />}
              </div>
              <div className="ml-5 flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{pub.year}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded border ${
                    pub.type === 'Journal' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                    pub.type === 'Conference' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                    'bg-emerald-50 text-emerald-700 border-emerald-100'
                  }`}>
                    {pub.type}
                  </span>
                </div>
                <p className="text-slate-800 text-sm leading-relaxed font-medium group-hover:text-slate-900 transition-colors">
                  {pub.citation}
                </p>
                {pub.url && (
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center mt-3 text-xs font-bold text-cyan-600 hover:text-cyan-700 hover:underline print:hidden"
                    >
                      Read Paper <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-center print:hidden">
        <a 
          href="https://scholar.google.com/citations?user=fzMvRkgAAAAJ&hl=en" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
        >
          View complete list on Google Scholar <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PublicationsList;
