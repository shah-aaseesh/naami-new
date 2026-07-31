import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AcademicPathwayProps {
  onOpenProgrammeModal: (programmeId: string) => void;
  onOpenApplyModal: (programmeId?: string) => void;
}

export const AcademicPathway: React.FC<AcademicPathwayProps> = ({
  onOpenProgrammeModal,
  onOpenApplyModal,
}) => {
  const institutions = [
    {
      id: 'school-primary',
      badge: 'GRADES 1 – 10 | +2 (NEB)',
      badgeBg: 'bg-[#1D4ED8]', // Vibrant blue
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop',
      title: 'NAMI International School',
      titleColor: 'text-gray-900',
      description: 'A holistic learning environment that nurtures curiosity, creativity and character.',
      linkText: 'Explore School',
      linkColor: 'text-[#1D4ED8] hover:text-blue-700',
      iconSvg: (
        <svg className="w-7 h-7 text-[#1D4ED8]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 20 L20 40 L50 60 L80 40 Z" opacity="0.8" />
          <path d="M50 30 C30 30, 25 55, 50 75 C75 55, 70 30, 50 30 Z" fill="#BA121A" />
        </svg>
      )
    },
    {
      id: 'higher-secondary-neb-alevels',
      badge: 'CAMBRIDGE A LEVELS',
      badgeBg: 'bg-[#BA121A]', // Red
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
      title: 'NAMI College',
      titleColor: 'text-[#BA121A]',
      description: 'Cambridge A Levels programme that opens doors to top universities worldwide.',
      linkText: 'Explore College',
      linkColor: 'text-[#BA121A] hover:text-[#9B0E15]',
      iconSvg: (
        <svg className="w-7 h-7 text-[#BA121A]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 C52 35, 60 45, 50 75 C40 45, 48 35, 50 15 Z" />
          <path d="M50 25 C62 38, 72 52, 50 75 C38 52, 38 38, 50 25 Z" opacity="0.9" />
          <path d="M50 25 C38 38, 28 52, 50 75 C62 52, 62 38, 50 25 Z" opacity="0.9" />
          <path d="M50 38 C75 42, 85 60, 50 75 C25 60, 25 42, 50 38 Z" opacity="0.8" />
          <path d="M50 38 C25 42, 15 60, 50 75 C75 60, 75 42, 50 38 Z" opacity="0.8" />
        </svg>
      )
    },
    {
      id: 'bachelors-degree',
      badge: 'UNDERGRADUATE & POSTGRADUATE',
      badgeBg: 'bg-[#0B1E36]', // Dark Navy
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      title: 'NAMI Institute',
      titleColor: 'text-gray-900',
      description: 'Undergraduate and postgraduate programmes in partnership with global universities.',
      linkText: 'Explore Institute',
      linkColor: 'text-[#0B1E36] hover:text-black',
      iconSvg: (
        <svg className="w-7 h-7 text-[#0B1E36]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 C52 35, 60 45, 50 75 C40 45, 48 35, 50 15 Z" />
          <path d="M50 25 C62 38, 72 52, 50 75 C38 52, 38 38, 50 25 Z" opacity="0.9" />
          <path d="M50 25 C38 38, 28 52, 50 75 C62 52, 62 38, 50 25 Z" opacity="0.9" />
        </svg>
      )
    }
  ];

  return (
    <section id="academic-pathway" className="py-14 sm:py-16 bg-[#F8F9FA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gray-500 block mb-1.5">
              OUR INSTITUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1726] tracking-tight">
              Education for <span className="text-[#BA121A]">Every Stage</span> of Life
            </h2>
          </div>

          <button 
            onClick={() => onOpenApplyModal()}
            className="text-[#BA121A] hover:text-[#9B0E15] text-sm font-bold flex items-center gap-1.5 cursor-pointer self-start sm:self-auto group"
          >
            <span>View All Institutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Institutional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {institutions.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Badge Overlay */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={inst.image}
                    alt={inst.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Badge (Top Left) */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className={`${inst.badgeBg} text-white text-[10px] sm:text-[11px] font-bold tracking-wider px-3 py-1 rounded-md shadow-xs uppercase inline-block`}>
                      {inst.badge}
                    </span>
                  </div>

                  {/* Overlapping Emblem Icon (Bottom Left) */}
                  <div className="absolute -bottom-5 left-6 z-20 bg-white p-2.5 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center">
                    {inst.iconSvg}
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-8 px-6 pb-6 space-y-3">
                  <h3 className={`text-xl font-bold tracking-tight ${inst.titleColor}`}>
                    {inst.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {inst.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenProgrammeModal(inst.id)}
                  className={`text-sm font-bold flex items-center gap-1.5 cursor-pointer ${inst.linkColor} group/btn`}
                >
                  <span>{inst.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
