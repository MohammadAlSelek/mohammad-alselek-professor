import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Cpu, Languages } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Programming & AI/ML": <Code2 className="w-6 h-6 text-purple-500" />,
  "Cloud & DevOps": <Server className="w-6 h-6 text-blue-500" />,
  "IoT & Embedded": <Cpu className="w-6 h-6 text-emerald-500" />,
  "Languages": <Languages className="w-6 h-6 text-rose-500" />
};

const SkillsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((category, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col h-full hover:border-cyan-200 transition-all hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-slate-100 rounded-xl mr-3 border border-slate-200 shadow-inner">
              {iconMap[category.category] || <Code2 className="w-6 h-6" />}
            </div>
            <h4 className="font-bold text-slate-900 leading-tight">{category.category}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span 
                key={i} 
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 transition-colors cursor-default select-none shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
