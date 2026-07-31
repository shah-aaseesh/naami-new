import React from 'react';
import { X, CheckCircle2, GraduationCap, Clock, Award, BookOpen, ArrowRight } from 'lucide-react';
import { PROGRAMMES } from '../data/namiData';

interface ProgramDetailModalProps {
  programmeId: string | null;
  onClose: () => void;
  onOpenApplyModal: (id: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  programmeId,
  onClose,
  onOpenApplyModal,
}) => {
  if (!programmeId) return null;

  const programme = PROGRAMMES.find((p) => p.id === programmeId) || PROGRAMMES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
        
        {/* Modal Header */}
        <div className="bg-[#1A1A1A] text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">
              {programme.level}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold pr-4">{programme.title}</h3>
            {programme.partner && (
              <p className="text-xs text-gray-300">
                Partner: <span className="text-white font-medium">{programme.partner}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-sm text-gray-800">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Programme Overview</h4>
            <p className="text-gray-700 leading-relaxed">{programme.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#F1EFE8] p-4 rounded-xl text-xs">
            <div>
              <span className="text-gray-500 block">Duration</span>
              <span className="font-bold text-[#1A1A1A]">{programme.duration}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Campus Location</span>
              <span className="font-bold text-[#1A1A1A]">NAMI Complex, Jorpati, Kathmandu</span>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Highlights</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              {programme.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CC030E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Entry Requirements */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Entry Requirements</h4>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-xs space-y-1 text-gray-700">
              {programme.entryRequirements.map((req, idx) => (
                <p key={idx}>• {req}</p>
              ))}
            </div>
          </div>

          {/* Career Outcomes */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Progression & Careers</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {programme.careerPaths.map((cp, idx) => (
                <span key={idx} className="bg-red-50 text-[#CC030E] font-medium px-3 py-1 rounded-full border border-red-100">
                  {cp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F1EFE8] px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenApplyModal(programme.id);
            }}
            className="bg-[#CC030E] hover:bg-[#b0020b] text-white text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
          >
            <span>Apply for this programme</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
