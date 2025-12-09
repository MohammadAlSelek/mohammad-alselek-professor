import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { PlayCircle, Maximize2 } from 'lucide-react';
import { assetPath } from '../services/assetPath';

const FeaturedProjects: React.FC = () => {
  const [activeMediaIndices, setActiveMediaIndices] = useState<number[]>(
    new Array(PROJECTS.length).fill(0)
  );

  const handleMediaSwap = (projectIndex: number, newMediaIndex: number) => {
    const newIndices = [...activeMediaIndices];
    newIndices[projectIndex] = newMediaIndex;
    setActiveMediaIndices(newIndices);
  };

  return (
    <div className="space-y-24">
      {PROJECTS.map((project, index) => {
        const activeIndex = activeMediaIndices[index];
        const activeMedia = project.media[activeIndex];

        return (
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Content */}
            <div className="lg:w-5/12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="text-cyan-600">0{index + 1}.</span> {project.title}
              </h3>
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-cyan-700 font-bold hover:text-cyan-800 transition-colors"
                >
                  View Project Details &rarr;
                </a>
              )}
            </div>

            {/* Media Content */}
            <div className="lg:w-7/12 w-full space-y-4">
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative group aspect-video transition-all duration-300">
                {activeMedia.type === 'video' ? (
                  <video
                    key={activeMedia.url}
                    controls
                    className="w-full h-full object-contain bg-slate-100"
                    autoPlay={false}
                  >
                    <source src={assetPath(activeMedia.url)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={assetPath(activeMedia.url)}
                    alt={activeMedia.caption}
                    className="w-full h-full object-contain object-center bg-white p-4 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-cyan-300" />
                    {activeMedia.caption}
                  </p>
                </div>
              </div>

              {project.media.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {project.media.map((item, mIndex) => (
                        <button
                          key={mIndex}
                          onClick={() => handleMediaSwap(index, mIndex)}
                          className={`bg-white rounded-lg overflow-hidden border aspect-video relative group cursor-pointer transition-all duration-200 ${
                        activeIndex === mIndex
                          ? 'border-cyan-400 ring-2 ring-cyan-100 opacity-100 scale-105 shadow-lg'
                          : 'border-slate-200 opacity-80 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      {item.type === 'video' ? (
                        <div className="relative w-full h-full pointer-events-none">
                          <video className="w-full h-full object-cover bg-slate-100">
                            <source src={assetPath(item.url)} type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <PlayCircle
                              className={`w-8 h-8 text-white ${
                                activeIndex === mIndex ? 'text-cyan-300' : ''
                              }`}
                            />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={assetPath(item.url)}
                          alt={item.caption}
                          className="w-full h-full object-cover bg-white"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
