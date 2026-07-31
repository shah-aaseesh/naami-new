import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll driven animation locked during scroll pin
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rawPathLength = useTransform(scrollYProgress, [0.08, 0.88], [0, 1]);
  const pathLength = useSpring(rawPathLength, { stiffness: 100, damping: 25 });

  // Update active step dynamically on scroll as user scrolls down pinned container
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.20) {
      setActiveStep(0);
    } else if (latest < 0.40) {
      setActiveStep(1);
    } else if (latest < 0.60) {
      setActiveStep(2);
    } else if (latest < 0.80) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  const steps = [
    {
      id: '01',
      programmeId: 'school-primary',
      title: 'Start Early',
      category: 'Foundation & Early Years',
      subtitle: 'Strong foundations for a bright future.',
      description: 'Nurturing young minds through curiosity-driven learning, character building, and creative expression from early primary grades.',
      highlights: ['Cambridge Primary Framework', 'Interactive STEM Discovery', 'Holistic Child Development'],
      icon: <Sprout className="w-5 h-5" />,
      yPosPx: 100,
      percentLeft: '10%',
    },
    {
      id: '02',
      programmeId: 'school-primary',
      title: 'International School',
      category: 'School Education (Grades 1-10 & +2)',
      subtitle: 'Grades 1–10 & +2 (NEB)\nHolistic & experiential learning.',
      description: 'Comprehensive schooling with national NEB curriculum and experiential learning methodologies preparing students for higher education.',
      highlights: ['NEB Science & Management', 'Leadership & Life Skills', 'Experiential Fieldwork'],
      icon: <School className="w-5 h-5" />,
      yPosPx: 50,
      percentLeft: '30%',
    },
    {
      id: '03',
      programmeId: 'higher-secondary-neb-alevels',
      title: 'NAMI College',
      category: 'Cambridge GCE A-Levels',
      subtitle: 'Cambridge A Levels\nGlobal curriculum.',
      description: 'World-renowned Cambridge Assessment International Education (CAIE) syllabus offering direct entry into top global universities.',
      highlights: ['Flexible Subject Combinations', 'CAIE Certification', 'Personalized University Counseling'],
      icon: <BookOpen className="w-5 h-5" />,
      yPosPx: 90,
      percentLeft: '50%',
    },
    {
      id: '04',
      programmeId: 'bachelors-degree',
      title: 'NAMI Institute',
      category: 'British Higher Education',
      subtitle: 'Undergraduate & Postgraduate Programs in partnership with University of Hertfordshire.',
      description: 'Direct UK degree programs audited and awarded by University of Hertfordshire right here in Kathmandu with UK credit transfer options.',
      highlights: ['BSc (Hons) Computing & BBA UK', 'MSc Applied Data Science & MBA', 'Credit Transfer to University of Hertfordshire UK'],
      icon: <GraduationCap className="w-5 h-5" />,
      yPosPx: 45,
      percentLeft: '70%',
    },
    {
      id: '05',
      programmeId: 'bachelors-degree',
      title: 'Global Careers',
      category: 'Career Readiness & Global Impact',
      subtitle: 'Industry exposure, internships & career readiness.',
      description: 'Dedicated career center, industry internships, corporate networking, tech incubation, and global alumni placement in UK, US & Asia.',
      highlights: ['Corporate Internship Placements', 'High Graduate Employability', 'Global Alumni Network'],
      icon: <Briefcase className="w-5 h-5" />,
      yPosPx: 25,
      percentLeft: '90%',
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
    <section ref={containerRef} id="our-journey" className="relative bg-white font-sans border-b border-gray-100 md:h-[240vh]">
      
      {/* Scroll Pinning Container: Locked in viewport on desktop during scroll */}
      <div className="md:sticky md:top-0 md:min-h-screen md:flex md:flex-col md:justify-center py-8 sm:py-12">
        
        {/* Background Decorative Lotus Petal Outline (Bottom Right) */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none z-0 opacity-15 text-[#BA121A]">
          <svg className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M100 20 C110 60, 130 80, 100 150 C70 80, 90 60, 100 20 Z" />
            <path d="M100 50 C125 75, 145 105, 100 150 C55 105, 75 75, 100 50 Z" />
            <path d="M100 70 C150 85, 170 120, 100 150 C30 120, 50 85, 100 70 Z" />
            <path d="M40 150 C70 170, 130 170, 160 150 C130 160, 70 160, 40 150 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* Header Grid */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            
            {/* Left Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#BA121A] block">
                  OUR JOURNEY
                </span>
                <div className="w-8 h-[2px] bg-[#BA121A] rounded-full"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0E1726] tracking-tight leading-tight">
                A Path That <span className="font-serif italic text-[#BA121A] font-normal">Grows</span> With You
              </h2>
            </motion.div>

            {/* Right Subtitle & Navigation Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-10"
            >
              
              <p className="text-xs sm:text-sm font-medium text-gray-600 max-w-xs leading-relaxed text-left">
                From early learning to global careers,<br />
                NAMI is with you at every step.
              </p>

              {/* Prev/Next Circular Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-all cursor-pointer shadow-2xs hover:border-gray-300 active:scale-95"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-all cursor-pointer shadow-2xs hover:border-gray-300 active:scale-95"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </div>

            </motion.div>

          </div>

          {/* ---------------- Desktop Journey Diagram (md and up) ---------------- */}
          <div className="hidden md:block relative w-full h-[200px] my-2">
            
            {/* SVG Canvas for precision curve */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
              viewBox="0 0 1000 180" 
              preserveAspectRatio="none" 
              fill="none"
            >
              {/* Background Light Gray Track Path */}
              <path 
                d="M 10 115 C 40 110, 70 102, 100 100 C 180 92, 220 50, 300 50 C 380 50, 420 90, 500 90 C 580 90, 620 45, 700 45 C 780 45, 840 27, 900 25 C 935 23, 965 21, 990 20" 
                stroke="#E2E8F0" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                fill="none" 
              />

              {/* Animated Tracing Red Path (Traces seamlessly through ALL 5 nodes on scroll) */}
              <motion.path 
                style={{ pathLength }}
                d="M 10 115 C 40 110, 70 102, 100 100 C 180 92, 220 50, 300 50 C 380 50, 420 90, 500 90 C 580 90, 620 45, 700 45 C 780 45, 840 27, 900 25 C 935 23, 965 21, 990 20" 
                stroke="#BA121A" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                fill="none" 
              />
              
              {/* Start Terminal Dot */}
              <circle cx="10" cy="115" r="4" fill="#BA121A" />
              
              {/* End Terminal Dot */}
              <circle cx="990" cy="20" r="4" fill="#BA121A" />
            </svg>

            {/* 5 Step Nodes placed precisely on the curve */}
            {steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    left: step.percentLeft,
                    top: `${step.yPosPx}px`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center group cursor-pointer z-10"
                >
                  {/* Clean Single Circle */}
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 shadow-xs ${
                    isCurrent
                      ? 'bg-[#BA121A] text-white shadow-md scale-110'
                      : 'bg-white border-2 border-red-200 text-[#BA121A] hover:border-[#BA121A] hover:scale-105'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Title & Subtitle sitting directly below node circle */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-40 sm:w-44 text-center space-y-0.5">
                    <h3 className={`text-xs lg:text-sm font-bold tracking-tight transition-colors ${
                      isCurrent ? 'text-[#BA121A]' : 'text-gray-900 group-hover:text-[#BA121A]'
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-[10px] lg:text-[11px] text-gray-600 leading-snug whitespace-pre-line font-normal">
                      {step.subtitle}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

          {/* ---------------- Mobile Journey Layout (under md) ---------------- */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isCurrent ? 'bg-red-50/50 border-[#BA121A]' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${
                    isCurrent ? 'bg-[#BA121A] text-white' : 'bg-white border border-red-200 text-[#BA121A]'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] font-bold text-[#BA121A] uppercase tracking-wider">
                      Step {step.id}
                    </span>
                    <h3 className="text-xs font-bold text-gray-900">{step.title}</h3>
                    <p className="text-[11px] text-gray-600 whitespace-pre-line leading-relaxed">{step.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Step Expanded Info Box */}
          <div className="mt-6 sm:mt-8 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-md text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-red-50 text-[#BA121A] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-red-100">
                    <Sparkles className="w-3 h-3 text-[#BA121A]" />
                    <span>Step {currentStep.id}</span>
                    <span>•</span>
                    <span>{currentStep.category}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    {currentStep.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {currentStep.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-1 text-xs font-semibold text-gray-800">
                    {currentStep.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BA121A] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => onOpenProgrammeModal(currentStep.programmeId)}
                    className="bg-[#BA121A] hover:bg-[#9B0E15] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Explore {currentStep.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenApplyModal(currentStep.programmeId)}
                    className="bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 text-xs font-semibold px-5 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  >
                    <span>Apply Now</span>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
