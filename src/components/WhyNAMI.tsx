import React from 'react';
import { motion } from 'motion/react';
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
      icon: Globe,
      title: 'International Education',
      description: 'Partnered with University of Hertfordshire UK & Cambridge Assessment for world-class degrees in Nepal.',
      badge: 'UK Accredited',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from highly qualified academicians, UK-trained educators, and active industry professionals.',
      badge: 'Global Experts',
    },
    {
      icon: Lightbulb,
      title: 'Research & Innovation',
      description: 'State-of-the-art tech labs, AI incubation center, and student-led research initiatives.',
      badge: 'Tech-Driven',
    },
    {
      icon: Building,
      title: 'Industry Connections',
      description: 'Strong corporate partnerships providing guaranteed internship placements and corporate networking.',
      badge: 'High Employability',
    },
    {
      icon: Headphones,
      title: 'Student Support',
      description: 'Comprehensive 1-on-1 academic advising, career counseling, and holistic student wellbeing.',
      badge: 'Holistic Care',
    },
    {
      icon: Award,
      title: 'Scholarships & Aid',
      description: 'Generous merit-based, sports, and financial aid programs empowering deserving minds.',
      badge: 'Merit Rewards',
    },
  ];

  return (
    <section id="why-nami" className="py-16 sm:py-20 bg-gray-50/50 font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BA121A] block">
                WHY CHOOSE NAMI
              </span>
              <div className="w-8 h-[2px] bg-[#BA121A] rounded-full"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0E1726] tracking-tight leading-tight">
              Shaping Futures Through <span className="font-serif italic text-[#BA121A] font-normal">Excellence</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Empowering students with world-class education, global exposure, and career-driven skills in Nepal.
            </p>
          </div>

          <button
            onClick={onOpenAboutModal}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#BA121A] hover:text-[#9B0E15] group transition-colors cursor-pointer shrink-0"
          >
            <span>Learn About NAMI</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2 Rows of 3 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              onClick={onOpenAboutModal}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:border-red-200/90 shadow-xs hover:shadow-xl hover:shadow-red-950/5 transition-all duration-300 group cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100/80 flex items-center justify-center shrink-0 group-hover:bg-[#BA121A] transition-colors duration-300">
                    <pillar.icon className="w-6 h-6 text-[#BA121A] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <span className="text-[10px] font-bold text-gray-500 bg-gray-100 group-hover:bg-red-50 group-hover:text-[#BA121A] px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#BA121A] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
