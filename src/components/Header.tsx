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
            {/* NAAMI Brand SVG Logo Icon */}
            <div className="flex flex-col items-center justify-center">
              <svg className="w-10 h-10 group-hover:scale-105 transition-transform duration-200" viewBox="0 0 300 300">
                <path fill="#cb0410" d="M 188.734375 153.832031 L 196.535156 153.832031 L 202.253906 155.390625 L 208.492188 158.507812 L 212.132812 161.105469 L 218.371094 156.949219 L 225.128906 154.351562 L 227.730469 153.832031 L 236.566406 153.832031 L 242.289062 155.390625 L 247.488281 157.988281 L 252.164062 162.144531 L 255.804688 168.382812 L 257.886719 175.65625 L 257.886719 222.941406 L 240.207031 222.941406 L 239.6875 181.371094 L 237.609375 176.175781 L 234.488281 173.578125 L 231.890625 172.539062 L 225.648438 172.539062 L 221.488281 174.097656 L 219.929688 174.617188 L 218.890625 176.695312 L 217.851562 179.292969 L 217.332031 222.941406 L 199.132812 222.941406 L 198.613281 181.890625 L 197.054688 177.214844 L 194.972656 174.617188 L 190.292969 172.539062 L 184.054688 172.539062 L 179.375 174.617188 L 177.296875 176.695312 L 176.257812 179.8125 L 175.738281 222.941406 L 158.058594 222.941406 L 158.058594 154.351562 L 175.738281 154.351562 L 175.738281 158.507812 L 184.054688 154.871094 Z M 188.734375 153.832031 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#cc0410" d="M 111.265625 153.832031 L 120.105469 153.832031 L 126.34375 155.390625 L 132.582031 158.507812 L 132.582031 154.351562 L 150.78125 154.351562 L 150.78125 222.941406 L 132.582031 222.941406 L 132.582031 218.785156 L 125.824219 221.902344 L 120.105469 223.460938 L 108.664062 223.460938 L 100.347656 220.863281 L 94.109375 216.707031 L 88.910156 210.992188 L 85.789062 205.277344 L 83.710938 198.519531 L 82.667969 191.765625 L 83.1875 182.410156 L 85.789062 174.097656 L 88.910156 167.863281 L 95.148438 161.105469 L 100.347656 157.46875 L 106.585938 154.871094 Z M 116.464844 171.5 L 109.707031 173.578125 L 105.027344 177.734375 L 102.425781 182.410156 L 101.386719 189.6875 L 102.425781 195.921875 L 105.546875 201.117188 L 110.226562 204.757812 L 113.34375 205.796875 L 122.183594 205.796875 L 127.902344 203.714844 L 132.582031 200.078125 L 132.582031 178.253906 L 128.421875 174.617188 L 125.824219 173.058594 L 119.585938 171.5 Z M 44.714844 153.832031 L 56.152344 153.832031 L 61.351562 155.390625 L 67.070312 158.507812 L 70.710938 161.625 L 73.832031 165.785156 L 75.910156 170.980469 L 76.949219 175.65625 L 76.949219 222.941406 L 58.753906 222.941406 L 58.234375 181.371094 L 56.671875 176.695312 L 53.554688 173.578125 L 49.914062 172.019531 L 42.636719 172.019531 L 37.957031 174.097656 L 36.394531 174.617188 L 35.875 176.175781 L 34.835938 176.175781 L 34.316406 179.292969 L 33.796875 222.941406 L 16.636719 222.941406 L 16.636719 154.351562 L 33.796875 154.351562 L 33.796875 158.507812 L 41.074219 154.871094 Z M 44.714844 153.832031 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#cb040f" d="M 149.21875 66.535156 L 151.300781 67.574219 L 155.980469 73.289062 L 160.136719 79.523438 L 163.777344 87.320312 L 165.859375 95.113281 L 166.378906 98.75 L 166.378906 107.066406 L 164.816406 114.859375 L 162.21875 121.613281 L 159.097656 126.8125 L 154.417969 132.527344 L 152.339844 135.125 L 150.261719 136.683594 L 148.179688 135.644531 L 144.019531 131.488281 L 139.339844 125.253906 L 136.222656 119.015625 L 133.621094 109.664062 L 133.621094 95.632812 L 136.222656 86.28125 L 139.863281 79.003906 L 145.0625 71.730469 L 147.660156 68.09375 Z M 149.21875 66.535156 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#cc040f" d="M 265.164062 154.351562 L 283.363281 154.351562 L 283.363281 222.941406 L 265.164062 222.941406 Z M 265.164062 154.351562 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#cb0510" d="M 207.453125 90.957031 L 216.289062 90.957031 L 217.332031 91.476562 L 216.8125 100.308594 L 213.691406 111.742188 L 209.011719 120.054688 L 204.332031 125.773438 L 199.652344 129.410156 L 193.414062 133.046875 L 187.695312 135.125 L 179.894531 136.683594 L 173.65625 137.203125 L 163.777344 137.203125 L 163.777344 136.164062 L 168.457031 134.085938 L 173.136719 131.488281 L 177.816406 127.851562 L 180.414062 125.253906 L 184.054688 121.09375 L 187.695312 114.859375 L 190.8125 106.546875 L 191.855469 101.347656 L 192.375 96.152344 L 193.933594 94.59375 L 199.132812 92.515625 Z M 207.453125 90.957031 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#cb0410" d="M 84.230469 90.957031 L 88.910156 90.957031 L 99.828125 92.515625 L 106.585938 95.113281 L 109.1875 108.105469 L 111.785156 114.859375 L 114.386719 119.535156 L 118.023438 124.214844 L 119.585938 125.773438 L 119.585938 126.8125 L 121.664062 127.851562 L 124.261719 129.929688 L 129.984375 133.566406 L 135.703125 136.164062 L 135.703125 137.203125 L 125.824219 137.203125 L 116.464844 136.164062 L 110.226562 134.605469 L 103.988281 132.007812 L 97.746094 127.851562 L 92.027344 122.136719 L 88.386719 116.417969 L 85.269531 109.664062 L 83.1875 102.390625 L 82.148438 91.476562 Z M 84.230469 90.957031 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#ca0410" d="M 184.054688 77.964844 L 188.214844 77.964844 L 189.253906 81.605469 L 190.292969 89.398438 L 190.292969 96.152344 L 189.253906 103.429688 L 186.65625 112.261719 L 182.496094 119.535156 L 179.375 123.695312 L 178.335938 123.695312 L 177.296875 125.773438 L 172.617188 129.410156 L 166.378906 133.046875 L 159.097656 135.644531 L 154.9375 136.164062 L 158.058594 132.007812 L 162.738281 125.253906 L 166.378906 117.457031 L 168.457031 108.105469 L 168.457031 97.191406 L 166.378906 86.800781 L 171.058594 83.164062 L 178.335938 79.523438 Z M 111.265625 77.964844 L 115.425781 77.964844 L 122.183594 80.042969 L 128.421875 83.164062 L 133.101562 86.800781 L 131.023438 96.152344 L 131.023438 109.144531 L 134.140625 120.054688 L 137.78125 126.8125 L 142.460938 133.046875 L 144.539062 136.164062 L 138.820312 135.125 L 131.023438 132.007812 L 125.304688 128.371094 L 125.304688 127.332031 L 123.222656 126.292969 L 118.542969 121.613281 L 115.425781 116.9375 L 112.824219 111.742188 L 110.226562 103.429688 L 109.707031 100.308594 L 109.707031 84.722656 L 110.746094 79.003906 Z M 111.265625 77.964844 " fillOpacity="1" fillRule="nonzero"/>
                <path fill="#cb0511" d="M 272.964844 127.851562 L 277.640625 128.371094 L 280.761719 130.449219 L 282.839844 133.046875 L 283.363281 134.605469 L 283.363281 140.839844 L 281.28125 144.480469 L 277.121094 147.078125 L 271.921875 147.078125 L 267.765625 145 L 265.164062 140.839844 L 265.164062 134.605469 L 267.765625 130.449219 L 271.402344 128.371094 Z M 272.964844 127.851562 " fillOpacity="1" fillRule="nonzero"/>
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

