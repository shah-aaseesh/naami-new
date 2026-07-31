import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, 
  School, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface OurJourneyProps {
  onOpenProgrammeModal: (programmeId: string) => void;
  onOpenApplyModal: (programmeId?: string) => void;
}

export const OurJourney: React.FC<OurJourneyProps> = ({
  onOpenProgrammeModal,
  onOpenApplyModal,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      programmeId: 'school-primary',
      title: 'Start Early',
      category: 'Foundation & Primary',
      subtitle: 'Strong foundations for a bright future.',
      description: 'Nurturing young minds through curiosity-driven STEM learning, character building, and creative expression from Grade I to VI.',
      highlights: ['Cambridge Primary Framework', 'Interactive STEM Labs', 'Holistic Personality Development'],
      icon: <Sprout className="w-7 h-7 text-[#BA121A]" />,
      centerOffset: 'mt-10 md:mt-16', // lower on curve
      pathX: 280,
      pathY: 30,
    },
    {
      id: '02',
      programmeId: 'school-primary',
      title: 'International School',
      category: 'Lower & Upper Secondary',
      subtitle: 'Grades 1–10 & +2 (NEB)\nHolistic & experiential learning.',
      description: 'Comprehensive secondary education with NEB curriculum and international teaching methodologies preparing students for higher studies.',
      highlights: ['NEB Science & Management Streams', 'Leadership & Community Initiatives', 'Experiential Fieldwork'],
      icon: <School className="w-7 h-7 text-[#BA121A]" />,
      centerOffset: 'mt-0 md:mt-2', // higher on curve
      pathX: 480,
      pathY: 80,
    },
    {
      id: '03',
      programmeId: 'higher-secondary-neb-alevels',
      title: 'NAMI College',
      category: 'Cambridge GCE A-Levels',
      subtitle: 'Cambridge A Levels\nGlobal curriculum.',
      icon: <BookOpen className="w-7 h-7 text-[#BA121A]" />,
      description: 'Prestigious Cambridge Assessment International Education (CAIE) syllabus offering direct entry into top UK, US, and global universities.',
      highlights: ['Subject Specialization in Science/Mgmt', 'Global CAIE Certification', 'Personalized College Counseling'],
      centerOffset: 'mt-8 md:mt-12', // lower on curve
      pathX: 680,
      pathY: 40,
    },
    {
      id: '04',
      programmeId: 'bachelors-degree',
      title: 'NAMI Institute',
      category: 'British Higher Education',
      subtitle: 'Undergraduate & Postgraduate Programs in partnership with University of Hertfordshire.',
      description: 'Direct UK degree programs audited and awarded by top British state universities right here in Kathmandu with credit transfer options.',
      highlights: ['BSc (Hons) Computing & BBA UK', 'MSc Applied Data Science & MBA', 'Credit Transfer to University of Hertfordshire UK'],
      icon: <GraduationCap className="w-7 h-7 text-[#BA121A]" />,
      centerOffset: 'mt-0 md:mt-0', // higher on curve
      pathX: 850,
      pathY: 15,
    },
    {
      id: '05',
      programmeId: 'bachelors-degree',
      title: 'Global Careers',
      category: 'Industry & Employability',
      subtitle: 'Industry exposure, internships & career readiness.',
      description: 'Comprehensive placement readiness, corporate mentorship, tech incubation, and global alumni networking for career success.',
      highlights: ['Paid Industry Internships', '98% Graduate Employment Rate', 'Global Alumni Network in UK, US & Nepal'],
      icon: <Briefcase className="w-7 h-7 text-[#BA121A]" />,
      centerOffset: '-mt-4 md:-mt-8', // highest on dotted line
      pathX: 990,
      pathY: 0,
    },
  ];

  const currentStep = steps[activeStep];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="our-journey" className="py-16 sm:py-24 bg-white font-sans border-b border-gray-100 relative overflow-hidden">
      
      {/* Background Decorative Lotus Petal Outline (Bottom Right) with Floating Motion */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 -right-10 pointer-events-none z-0 opacity-20 text-[#BA121A]"
      >
        <svg className="w-80 h-80 sm:w-96 sm:h-96" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M100 20 C110 60, 130 80, 100 150 C70 80, 90 60, 100 20 Z" />
          <path d="M100 50 C125 75, 145 105, 100 150 C55 105, 75 75, 100 50 Z" />
          <path d="M100 70 C150 85, 170 120, 100 150 C30 120, 50 85, 100 70 Z" />
          <path d="M40 150 C70 170, 130 170, 160 150 C130 160, 70 160, 40 150 Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BA121A] block">
                OUR JOURNEY
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#BA121A] animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E1726] tracking-tight leading-tight">
              A Path That<br />
              <span className="font-serif italic text-[#BA121A]">Grows</span> With You
            </h2>
          </motion.div>

          {/* Right Subtitle & Navigation Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12"
          >
            
            <p className="text-sm font-medium text-gray-600 max-w-xs leading-relaxed text-left">
              From early learning to global careers,<br />
              NAMI is with you at every step.
            </p>

            {/* Prev/Next Circular Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

          </motion.div>

        </div>

        {/* Horizontal Journey Steps Diagram */}
        <div className="relative min-h-[320px] py-6">
          
          {/* Background Animated Sine Wave Curve Line */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 w-full pointer-events-none z-0">
            <svg className="w-full h-32" viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none">
              
              {/* Left Sine Wave Red Solid Line (Steps 1 to 4) */}
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 0 90 C 80 100, 120 40, 280 30 C 400 20, 480 80, 680 40" 
                stroke="#BA121A" 
                strokeWidth="2.5" 
                fill="none" 
              />
              
              {/* Right Continuation Dashed Gray Line (Step 4 to 5) */}
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                d="M 680 40 C 780 20, 880 15, 1000 0" 
                stroke="#CBD5E1" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                fill="none" 
              />

            </svg>
          </div>

          {/* 5 Timeline Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-2 relative z-10">
            {steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    setActiveStep(idx);
                  }}
                  className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-300 ${step.centerOffset}`}
                >
                  
                  {/* Icon Circle (Sits directly on the curve) */}
                  <div className="relative">
                    
                    {/* Animated Pulsing Ring around active node */}
                    {isCurrent && (
                      <motion.div 
                        layoutId="activeGlow"
                        className="absolute -inset-2 rounded-full bg-red-100/80 border-2 border-[#BA121A]/30 z-0"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}

                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 flex items-center justify-center shadow-md transition-all duration-300 relative z-10 ${
                      isCurrent
                        ? 'border-[#BA121A] scale-110 shadow-lg'
                        : 'border-red-100 group-hover:border-[#BA121A] group-hover:scale-105'
                    }`}>
                      <motion.div
                        animate={{ scale: isCurrent ? [1, 1.15, 1] : 1 }}
                        transition={{ duration: 2, repeat: isCurrent ? Infinity : 0, ease: 'easeInOut' }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Step Pill Badge floating on top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                      <span className={`text-[10px] font-black tracking-wider px-2 py-0.5 rounded-full shadow-2xs transition-colors ${
                        isCurrent 
                          ? 'bg-[#BA121A] text-white ring-2 ring-white' 
                          : 'bg-gray-800 text-white group-hover:bg-[#BA121A]'
                      }`}>
                        {step.id}
                      </span>
                    </div>

                  </div>

                  {/* Step Titles & Subtitle Content below */}
                  <div className="mt-4 space-y-1 max-w-[180px]">
                    <h3 className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                      isCurrent ? 'text-[#BA121A]' : 'text-gray-900 group-hover:text-[#BA121A]'
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line font-normal">
                      {step.subtitle}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Animated Active Step Feature Card Preview */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-gradient-to-r from-red-50/80 via-white to-red-50/40 rounded-2xl p-6 sm:p-8 border border-red-100 shadow-sm text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#BA121A]/10 text-[#BA121A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <span>Step {currentStep.id}</span>
                  <span>•</span>
                  <span>{currentStep.category}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {currentStep.title}
                </h4>

                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  {currentStep.description}
                </p>

                {/* Key Highlights list */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs font-semibold text-gray-800">
                  {currentStep.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#BA121A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenProgrammeModal(currentStep.programmeId)}
                  className="bg-[#BA121A] hover:bg-[#9B0E15] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore {currentStep.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={() => onOpenApplyModal(currentStep.programmeId)}
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Apply Now</span>
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
