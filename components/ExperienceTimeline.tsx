import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Academic & Professional Experience */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <div className="bg-blue-50 p-2 rounded-lg mr-3 border border-blue-100">
             <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          Professional Experience
        </h3>
        <div className="border-l border-blue-100 ml-3 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-all duration-300"></div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-start mb-3">
                   <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h4>
                   <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center text-slate-600 font-medium mb-2">
                   {exp.url ? (
                     <a href={exp.url} target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center transition-colors">
                       {exp.company}
                       <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                     </a>
                   ) : (
                     <span>{exp.company}</span>
                   )}
                   <span className="mx-2 text-slate-300">|</span>
                   <span className="text-sm text-slate-500">{exp.location}</span>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-start leading-relaxed">
                      <span className="mr-3 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <div className="bg-emerald-50 p-2 rounded-lg mr-3 border border-emerald-100">
             <GraduationCap className="w-6 h-6 text-emerald-600" />
          </div>
          Education
        </h3>
        <div className="border-l border-emerald-100 ml-3 space-y-12">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 group">
               {/* Timeline Dot */}
               <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 transition-all duration-300"></div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-start mb-3">
                   <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{edu.degree}</h4>
                   <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center text-slate-600 font-medium mb-4">
                   {edu.url ? (
                     <a href={edu.url} target="_blank" rel="noreferrer" className="hover:text-emerald-600 flex items-center transition-colors">
                       {edu.institution}
                       <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                     </a>
                   ) : (
                     <span>{edu.institution}</span>
                   )}
                </div>

                {edu.thesis && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4 hover:border-emerald-200 transition-colors">
                    <p className="text-sm text-slate-700 italic">
                      <span className="font-semibold not-italic text-emerald-600">Thesis:</span> {edu.thesis}
                    </p>
                  </div>
                )}
                {edu.details.length > 0 && (
                  <ul className="space-y-2">
                    {edu.details.map((item, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start leading-relaxed">
                        <span className="mr-3 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
