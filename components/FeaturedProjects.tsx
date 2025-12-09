import React from 'react';
import { PROJECTS } from '../constants';

const FeaturedProjects: React.FC = () => {
  return (
    <div className="space-y-16">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 bg-white shadow-lg p-8 md:p-10 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-cyan-700">0{index + 1}.</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{project.title}</h3>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          <p className="text-slate-700 leading-relaxed text-lg">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 text-cyan-700 text-xs font-semibold rounded-full border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
