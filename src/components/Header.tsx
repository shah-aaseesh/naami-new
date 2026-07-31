import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

interface HeaderProps {
  onOpenApplyModal: (programmeId?: string) => void;
  onOpenEnquiryModal: () => void;
  onOpenDownloadsModal: () => void;
  onOpenProgrammeModal: (programmeId: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApplyModal,
  onOpenEnquiryModal,
  onOpenDownloadsModal,
  onOpenProgrammeModal,
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [institutionsDropdownOpen, setInstitutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
    setInstitutionsDropdownOpen(false);
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-xs">
      {/* Dark Red Top Utility Bar */}
      <div className="bg-[#BA121A] text-white text-xs py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Left contact info */}
          <div className="flex items-center space-x-6 text-white/90">
            <a href="mailto:info@nami.edu.np" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@nami.edu.np</span>
            </a>
            <a href="tel:+97715920335" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+977 1 5920335</span>
            </a>
          </div>

          {/* Right portal links & social icons */}
          <div className="flex items-center space-x-5 text-white/90">
            <button 
              onClick={onOpenDownloadsModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Student Portal
            </button>
            <button 
              onClick={() => onScrollToSection('careers')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Careers
            </button>
            <span className="text-white/40">|</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Primary White Navigation Bar */}
      <nav 
        className={`bg-white transition-all duration-200 ${
          isScrolled ? 'py-3 shadow-md border-b border-gray-200' : 'py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* NAMI Education Group Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            {/* Lotus Flower Logo Icon */}
            <div className="flex flex-col items-center justify-center">
              <svg className="w-9 h-9 text-[#BA121A]" viewBox="0 0 100 100" fill="currentColor">
                {/* Center lotus petal */}
                <path d="M50 15 C52 35, 60 45, 50 75 C40 45, 48 35, 50 15 Z" />
                {/* Inner side petals */}
                <path d="M50 25 C62 38, 72 52, 50 75 C38 52, 38 38, 50 25 Z" opacity="0.9" />
                <path d="M50 25 C38 38, 28 52, 50 75 C62 52, 62 38, 50 25 Z" opacity="0.9" />
                {/* Outer wide petals */}
                <path d="M50 38 C75 42, 85 60, 50 75 C25 60, 25 42, 50 38 Z" opacity="0.8" />
                <path d="M50 38 C25 42, 15 60, 50 75 C75 60, 75 42, 50 38 Z" opacity="0.8" />
                {/* Base curve */}
                <path d="M20 75 C35 85, 65 85, 80 75 C65 80, 35 80, 20 75 Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#BA121A] leading-none lowercase">
                nami
              </span>
              <span className="text-[10px] font-bold tracking-widest text-gray-800 uppercase leading-tight mt-0.5">
                EDUCATION GROUP
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-gray-800">
            <button 
              onClick={() => handleNavClick('why-nami')}
              className="hover:text-[#BA121A] transition-colors cursor-pointer py-1"
            >
              About NAMI
            </button>

            {/* Institutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setInstitutionsDropdownOpen(true)}
              onMouseLeave={() => setInstitutionsDropdownOpen(false)}
            >
              <button 
                onClick={() => handleNavClick('academic-pathway')}
                className="flex items-center gap-1 hover:text-[#BA121A] transition-colors cursor-pointer py-1"
              >
                <span>Institutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${institutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {institutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                  <div className="px-4 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Our Institutions
                  </div>

                  <button 
                    onClick={() => { onOpenProgrammeModal('school-primary'); setInstitutionsDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50/60 text-xs font-medium text-gray-900 transition-colors"
                  >
                    <div className="font-bold text-[#BA121A]">NAMI International School</div>
                    <div className="text-[11px] text-gray-500">Grade I – VI • Cambridge Primary</div>
                  </button>

                  <button 
                    onClick={() => { onOpenProgrammeModal('higher-secondary-neb-alevels'); setInstitutionsDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50/60 text-xs font-medium text-gray-900 border-t border-gray-100 transition-colors"
                  >
                    <div className="font-bold text-[#BA121A]">NAMI College</div>
                    <div className="text-[11px] text-gray-500">NEB +2 Science/Mgmt & CIE A-Levels</div>
                  </button>

                  <button 
                    onClick={() => { onOpenProgrammeModal('bachelors-degree'); setInstitutionsDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50/60 text-xs font-medium text-gray-900 border-t border-gray-100 transition-colors"
                  >
                    <div className="font-bold text-[#BA121A]">NAMI Institute</div>
                    <div className="text-[11px] text-gray-500">UK Bachelor's & Master's Degrees</div>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('academic-pathway')}
              className="hover:text-[#BA121A] transition-colors cursor-pointer py-1"
            >
              Admissions
            </button>

            <button 
              onClick={() => handleNavClick('university-partners')}
              className="hover:text-[#BA121A] transition-colors cursor-pointer py-1"
            >
              Partnerships
            </button>

            <button 
              onClick={() => handleNavClick('campus-life')}
              className="hover:text-[#BA121A] transition-colors cursor-pointer py-1"
            >
              Student Life
            </button>

            <button 
              onClick={() => handleNavClick('news-notices')}
              className="hover:text-[#BA121A] transition-colors cursor-pointer py-1"
            >
              News & Events
            </button>

            <button 
              onClick={() => onOpenEnquiryModal()}
              className="hover:text-[#BA121A] transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => onOpenApplyModal()}
              className="bg-[#BA121A] hover:bg-[#9B0E15] text-white font-bold text-xs px-6 py-3 rounded-lg active:scale-98 transition-all cursor-pointer shadow-xs flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => onOpenApplyModal()}
              className="bg-[#BA121A] text-white text-xs font-bold px-3.5 py-2 rounded-lg"
            >
              Apply Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 rounded-lg border border-gray-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <span className="font-bold text-gray-900 text-sm">NAMI Education Group</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-sm font-semibold text-gray-800">
                <button onClick={() => handleNavClick('why-nami')} className="block w-full text-left py-2 border-b border-gray-100">About NAMI</button>
                <button onClick={() => handleNavClick('academic-pathway')} className="block w-full text-left py-2 border-b border-gray-100">Institutions & Admissions</button>
                <button onClick={() => handleNavClick('university-partners')} className="block w-full text-left py-2 border-b border-gray-100">Partnerships</button>
                <button onClick={() => handleNavClick('campus-life')} className="block w-full text-left py-2 border-b border-gray-100">Student Life</button>
                <button onClick={() => handleNavClick('news-notices')} className="block w-full text-left py-2 border-b border-gray-100">News & Events</button>
                <button onClick={() => { onOpenEnquiryModal(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-gray-100">Contact</button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button onClick={() => { onOpenApplyModal(); setMobileMenuOpen(false); }} className="w-full bg-[#BA121A] text-white font-bold py-3 rounded-lg text-xs text-center flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => { onOpenEnquiryModal(); setMobileMenuOpen(false); }} className="w-full bg-gray-100 text-gray-900 font-semibold py-2.5 rounded-lg text-xs text-center border border-gray-200">
                Submit Admissions Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

