import React, { useState } from 'react';
import { 
  ArrowRight, 
  Star
} from 'lucide-react';

interface HeroProps {
  onOpenApplyModal: () => void;
  onScrollToPathway: () => void;
  onOpenProgrammeModal: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApplyModal,
  onScrollToPathway,
  onOpenProgrammeModal,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Background slides
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop',
      title: 'One Vision. Many Pathways. Endless Opportunities.',
      highlight: 'Opportunities.',
      partner: 'University of Hertfordshire',
      partnerLogo: 'UH',
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop',
      title: 'World-Class British Education in Kathmandu.',
      highlight: 'Kathmandu.',
      partner: 'University of Northampton',
      partnerLogo: 'UON',
    },
    {
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop',
      title: 'Seamless Progression From Primary to Master\'s.',
      highlight: 'Master\'s.',
      partner: 'Cambridge International',
      partnerLogo: 'CIE',
    }
  ];

  const currentSlide = heroSlides[activeSlide % heroSlides.length];

  return (
    <section id="hero" className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] bg-gray-900 flex flex-col justify-center overflow-hidden font-sans">
      
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={currentSlide.image} 
          alt="NAMI Campus Grounds and Architecture" 
          className="w-full h-full object-cover object-center transition-all duration-700 brightness-90"
        />
        {/* Darkening Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
      </div>

      {/* Main Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              One Vision.<br />
              Many Pathways.<br />
              Endless <span className="text-[#EE2A35]">Opportunities.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-xl font-normal leading-relaxed">
              NAMI Education Group empowers learners from school to postgraduate education through world-class institutions and global partnerships.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onScrollToPathway}
                className="bg-[#BA121A] hover:bg-[#9B0E15] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all cursor-pointer shadow-lg flex items-center gap-2 group"
              >
                <span>Explore Our Institutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenApplyModal}
                className="border border-white/80 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Admissions Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Floating Partner Overlay Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-7 w-full max-w-sm sm:max-w-md shadow-2xl text-left text-white space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-[#F5C042]">
                <Star className="w-3.5 h-3.5 fill-[#F5C042] text-[#F5C042]" />
                <span>Proud Partner</span>
              </div>

              {/* Partner Logo & Name */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
                  University of Hertfordshire
                </h3>
                <div className="bg-white text-black font-black text-2xl px-3.5 py-1.5 rounded flex items-center justify-center shrink-0 tracking-tighter">
                  UH
                </div>
              </div>

              {/* Red Divider Accent */}
              <div className="w-12 h-1 bg-[#EE2A35] rounded-full"></div>

              {/* Tagline */}
              <div className="space-y-1">
                <p className="text-base font-semibold text-gray-200">
                  Global Education.
                </p>
                <p className="text-base font-semibold text-gray-200">
                  Local Impact.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Carousel Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2.5 z-20">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index % heroSlides.length)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === activeSlide % 5 
                ? 'w-6 h-2 bg-[#EE2A35]' 
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};


