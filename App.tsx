import React from 'react';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ResearchGrants from './components/ResearchGrants';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsList from './components/SkillsList';
import PublicationsList from './components/PublicationsList';
import AwardsService from './components/AwardsService';
import Teaching from './components/Teaching';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-slate-900">
      {/* Navigation (Floating Glass) */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center print:hidden">
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg px-6 py-3 flex items-center gap-1 sm:gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors hidden sm:block">
              M. Alselek
            </button>
            <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">About</button>
            <button onClick={() => scrollToSection('research')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">Research</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">XP</button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">Skills</button>
            <button onClick={() => scrollToSection('teaching')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">Teaching</button>
            <button onClick={() => scrollToSection('publications')} className="text-slate-600 hover:text-cyan-600 text-xs sm:text-sm font-medium transition-colors">Pubs</button>
            <button onClick={() => scrollToSection('contact')} className="ml-2 px-4 py-1.5 rounded-full bg-cyan-600 text-white text-xs sm:text-sm font-medium hover:bg-cyan-500 transition-colors shadow-lg hover:shadow-cyan-200/60">
              Contact
            </button>
        </div>
      </nav>

      <main className="flex-grow">
        <div id="about" className="scroll-mt-28">
           <Hero />
        </div>

        <div id="research" className="scroll-mt-28">
          <Section id="research-section" title="Research & Innovation" className="bg-white">
            <ResearchGrants />
          </Section>
        </div>

        <div id="projects" className="scroll-mt-28">
          <Section id="projects-section" title="Technical Implementations" className="bg-slate-50">
            <FeaturedProjects />
          </Section>
        </div>

        <div id="experience" className="scroll-mt-28">
          <Section id="experience-section" title="Career Trajectory" className="bg-white">
            <ExperienceTimeline />
          </Section>
        </div>
        
        <div id="awards" className="scroll-mt-28">
          <Section id="awards-section" title="Professional Standing" className="bg-slate-50">
            <AwardsService />
          </Section>
        </div>

        <div id="teaching" className="scroll-mt-28">
          <Section id="teaching-section" title="Teaching & Curriculum" className="bg-white">
            <Teaching />
          </Section>
        </div>

        <div id="skills" className="scroll-mt-28">
          <Section id="skills-section" title="Technical Expertise" className="bg-slate-50">
            <SkillsList />
          </Section>
        </div>

        <div id="publications" className="scroll-mt-28">
          <Section id="publications-section" title="Selected Publications" className="bg-white">
            <div className="max-w-4xl mx-auto">
              <PublicationsList />
            </div>
          </Section>
        </div>
        
        <div id="contact" className="scroll-mt-28 print:hidden">
          <Section id="contact-section" title="Get in Touch" className="bg-white mb-12">
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border border-slate-200 rounded-3xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden group">
                {/* Animated Glows */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-200/50 rounded-full blur-3xl group-hover:bg-cyan-300/60 transition-all duration-1000"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl group-hover:bg-blue-300/60 transition-all duration-1000"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 text-slate-900">Ready to Collaborate?</h3>
                <p className="text-slate-700 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                  Always open to discussing high-impact research collaborations, PhD supervision, and industrial partnerships in Edge AI and IoT.
                </p>
                <a 
                  href="mailto:mohammad.alselek@gmail.com" 
                  className="relative z-10 inline-block bg-white text-slate-900 font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(8,145,178,0.15)] hover:shadow-[0_0_30px_rgba(8,145,178,0.25)] hover:bg-cyan-50 transition-all hover:-translate-y-1"
                >
                  Initiate Communication
                </a>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
