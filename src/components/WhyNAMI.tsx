import React from 'react';
import { 
  Globe, 
  Users, 
  Lightbulb, 
  Building, 
  Headphones, 
  Award, 
  ArrowRight 
} from 'lucide-react';

interface WhyNAMIProps {
  onOpenAboutModal: () => void;
  onOpenApplyModal: () => void;
}

export const WhyNAMI: React.FC<WhyNAMIProps> = ({
  onOpenAboutModal,
  onOpenApplyModal,
}) => {
  const pillars = [
    {
      icon: <Globe className="w-6 h-6 text-[#BA121A]" />,
      title: 'International Education',
    },
    {
      icon: <Users className="w-6 h-6 text-[#BA121A]" />,
      title: 'Experienced Faculty',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#BA121A]" />,
      title: 'Research & Innovation',
    },
    {
      icon: <Building className="w-6 h-6 text-[#BA121A]" />,
      title: 'Industry Connections',
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#BA121A]" />,
      title: 'Student Support',
    },
    {
      icon: <Award className="w-6 h-6 text-[#BA121A]" />,
      title: 'Scholarships & Financial Aid',
    },
  ];

  return (
    <section id="why-nami" className="py-14 sm:py-16 bg-white font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gray-500 block mb-1.5">
            WHY CHOOSE NAMI?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1726] tracking-tight">
            Shaping Futures Through <span className="text-[#BA121A]">Excellence</span>
          </h2>
        </div>

        {/* 6 Horizontal Feature Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-left">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3.5 group cursor-pointer p-2 rounded-xl hover:bg-red-50/50 transition-colors"
              onClick={onOpenAboutModal}
            >
              {/* Dual-ringed soft red icon container */}
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>

              <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#BA121A] transition-colors">
                {pillar.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
