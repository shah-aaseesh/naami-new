import React from 'react';
import { X, Briefcase, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApplyModal: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose, onOpenApplyModal }) => {
  if (!isOpen) return null;

  const hiringPartners = [
    'Leapfrog Technology', 'Nabil Bank', 'F1Soft International', 'Cotiviti Nepal',
    'YoungInnovations', 'Deerhold Nepal', 'Standard Chartered Nepal', 'Cedar Gate Technologies'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative max-h-[85vh] flex flex-col">
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">NAMI Career & Placement Network</h3>
              <p className="text-xs text-gray-400">Industry partnerships & internship opportunities</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-800">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-[#1A1A1A]">Career Development Center (CDC)</h4>
            <p className="text-gray-700 leading-relaxed">
              At NAMI, education is deeply linked with employability. Our Career Development Center connects final-year Bachelor's and Master's students with top employers in IT, banking, and management.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Featured Hiring Partners</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {hiringPartners.map((partner, idx) => (
                <div key={idx} className="bg-[#F1EFE8] p-3 rounded-lg border border-gray-200 font-semibold text-gray-800 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#CC030E]" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 text-white p-4 rounded-xl space-y-1 text-xs">
            <span className="font-bold text-red-400 block">UK Global Alumni Support</span>
            <p className="text-gray-300">Graduates gain access to University of Northampton & Hertfordshire worldwide alumni job boards.</p>
          </div>
        </div>

        <div className="bg-[#F1EFE8] px-6 py-4 border-t border-gray-200 flex items-center justify-between shrink-0">
          <button onClick={onClose} className="text-xs font-semibold text-gray-600 hover:text-gray-900">
            Close
          </button>
          <button
            onClick={() => { onClose(); onOpenApplyModal(); }}
            className="bg-[#CC030E] text-white text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5"
          >
            <span>Apply to NAMI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
