import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  HelpCircle,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/namiData';

interface FooterProps {
  onOpenApplyModal: () => void;
  onOpenEnquiryModal: () => void;
  onOpenDownloadsModal: () => void;
  onOpenProgrammeModal: (id: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApplyModal,
  onOpenEnquiryModal,
  onOpenDownloadsModal,
  onOpenProgrammeModal,
  onScrollToSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white font-sans border-t border-stone-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Column 1: Contact Info for 3 Branches / Campuses */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block">
                  NAMI <span className="text-[#CC030E]">Education Group</span>
                </span>
                <span className="text-[11px] text-gray-400 block">
                  Naaya Aayam Multi-Disciplinary Institute
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Connecting primary school learners to British university degree holders through an uninterrupted educational pathway in Kathmandu, Nepal.
            </p>

            {/* Branch Locations */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                <span className="font-bold text-red-400 block text-[11px] uppercase">
                  Main Academic Complex (Degree & A-Levels)
                </span>
                <p className="text-gray-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  {INSTITUTION_INFO.location}
                </p>
                <p className="text-gray-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  {INSTITUTION_INFO.phonePrimary} / {INSTITUTION_INFO.phoneSecondary}
                </p>
              </div>

              <div className="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                <span className="font-bold text-red-400 block text-[11px] uppercase">
                  NAMI International School Wing
                </span>
                <p className="text-gray-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  School Block, Gorkarneshwor-8, Kathmandu
                </p>
                <p className="text-gray-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  {INSTITUTION_INFO.email}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Nav repeat + Programmes) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
                <li>
                  <button onClick={() => onScrollToSection('hero')} className="hover:text-red-400 transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('why-nami')} className="hover:text-red-400 transition-colors cursor-pointer">
                    About NAMI
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('academic-pathway')} className="hover:text-red-400 transition-colors cursor-pointer">
                    Academic Pathway
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('university-partners')} className="hover:text-red-400 transition-colors cursor-pointer">
                    UK University Partners
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('campus-life')} className="hover:text-red-400 transition-colors cursor-pointer">
                    Campus Life
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('news-notices')} className="hover:text-red-400 transition-colors cursor-pointer">
                    News & Notices
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
                Programmes
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
                <li>
                  <button onClick={() => onOpenProgrammeModal('school-primary')} className="hover:text-red-400 transition-colors text-left cursor-pointer">
                    NAMI School (Grade I-VI)
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenProgrammeModal('higher-secondary-neb-alevels')} className="hover:text-red-400 transition-colors text-left cursor-pointer">
                    GCE A-Levels (UK)
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenProgrammeModal('higher-secondary-neb-alevels')} className="hover:text-red-400 transition-colors text-left cursor-pointer">
                    NEB +2 Science/Mgmt
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenProgrammeModal('bachelors-degree')} className="hover:text-red-400 transition-colors text-left cursor-pointer">
                    BSc (Hons) Computing
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenProgrammeModal('bachelors-degree')} className="hover:text-red-400 transition-colors text-left cursor-pointer">
                    BBA (Business Admin)
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenProgrammeModal('masters-degree')} className="hover:text-red-400 transition-colors text-left cursor-pointer">
                    Executive MBA (UK)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Connect, Downloads, Enquiry & Social Media */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
                Admissions & Downloads
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Download prospectus, application guidelines, and fee structures.
              </p>
              
              <div className="space-y-2">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full bg-[#CC030E] hover:bg-[#b0020b] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Apply online for 2026/27
                </button>
                
                <button
                  onClick={onOpenDownloadsModal}
                  className="w-full bg-stone-800 hover:bg-stone-700 text-gray-200 text-xs font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-red-400" />
                  Download Prospectus PDF
                </button>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div>
              <span className="text-xs font-semibold text-gray-400 block mb-2">Connect with NAMI</span>
              <div className="flex items-center space-x-3 text-gray-300">
                <a href="#facebook" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#CC030E] flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#youtube" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#CC030E] flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#CC030E] flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#CC030E] flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 NAMI Education Group (Naaya Aayam Multi-Disciplinary Institute). All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <button onClick={onOpenDownloadsModal} className="hover:text-red-400 transition-colors cursor-pointer">
              Downloads
            </button>
            <span className="text-gray-700">•</span>
            <button onClick={onOpenEnquiryModal} className="hover:text-red-400 transition-colors cursor-pointer">
              Enquiry Form
            </button>
            <span className="text-gray-700">•</span>
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-red-500" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
