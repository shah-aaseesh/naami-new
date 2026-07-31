import React from 'react';
import { X, Building2, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/namiData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApplyModal: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenApplyModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative max-h-[85vh] flex flex-col">
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">About NAMI Education Group</h3>
              <p className="text-xs text-gray-400">Naaya Aayam Multi-Disciplinary Institute (Est. 2012)</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#1A1A1A]">Our Academic Vision</h4>
            <p className="text-gray-700">
              Founded in 2012 by a group of passionate Nepalese academics and entrepreneurs, NAMI Education Group was established to bridge the gap between local secondary schooling and internationally accredited higher education.
            </p>
            <p className="text-gray-700">
              Our campus in Jorpati-8, Kathmandu spans 5 acres of green, modern infrastructure. NAMI hosts primary school grades, NEB +2 & A-Levels, alongside direct UK Bachelor's and Master's degrees in partnership with top British universities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#F1EFE8] p-4 rounded-xl text-xs">
            <div>
              <span className="text-gray-500 block">Ministry Approval</span>
              <span className="font-bold text-[#1A1A1A]">Ministry of Education, Nepal</span>
            </div>
            <div>
              <span className="text-gray-500 block">UK Audit Standard</span>
              <span className="font-bold text-[#1A1A1A]">Quality Assurance Agency (QAA)</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Commitments</h4>
            <div className="space-y-1.5 text-xs text-gray-700">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CC030E]" />
                Continuous pathway from primary school to postgraduate degree.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CC030E]" />
                100% equivalent UK degree credentials & convocation ceremonies.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CC030E]" />
                Affordable tuition with merit-based scholarships up to 50%.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F1EFE8] px-6 py-4 border-t border-gray-200 flex items-center justify-between shrink-0">
          <button onClick={onClose} className="text-xs font-semibold text-gray-600 hover:text-gray-900">
            Close
          </button>
          <button
            onClick={() => { onClose(); onOpenApplyModal(); }}
            className="bg-[#CC030E] text-white text-xs font-semibold px-5 py-2.5 rounded-lg"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};
