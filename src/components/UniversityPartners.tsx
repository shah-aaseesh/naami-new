import React from 'react';
import { 
  Building2, 
  CheckCircle, 
  ShieldCheck, 
  Award, 
  ArrowRight
} from 'lucide-react';
import { UNIVERSITY_PARTNERS } from '../data/namiData';

interface UniversityPartnersProps {
  onOpenPartnerModal: (partnerId: string) => void;
  onOpenApplyModal: () => void;
}

export const UniversityPartners: React.FC<UniversityPartnersProps> = ({
  onOpenPartnerModal,
  onOpenApplyModal,
}) => {
  return (
    <section id="university-partners" className="py-20 bg-[#1A1A1A] text-white font-sans border-b border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#CC030E] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              UK State University Affiliations
            </span>
            <span className="font-handwriting text-lg text-red-400">
              * Direct British Qualifications
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Direct Degree Awarding Institutions
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3">
            NAMI Institute delivers direct degree programmes from public state universities in the UK. Qualifications awarded in Kathmandu are identical to those conferred on-campus in England.
          </p>
        </div>

        {/* 2 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {UNIVERSITY_PARTNERS.map((partner, idx) => (
            <div
              key={partner.id}
              className={`bg-[#242424] rounded-xl border border-gray-800 p-7 flex flex-col justify-between hover:border-[#CC030E] transition-all duration-200 relative ${idx % 2 === 0 ? 'transform md:-rotate-0.5 hover:rotate-0' : 'transform md:rotate-0.5 hover:rotate-0'}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-gray-800">
                  <div>
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      {partner.country} Partner
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {partner.name}
                    </h3>
                    <span className="text-xs text-gray-400 mt-1 block">
                      Est. {partner.established} • Public State University
                    </span>
                  </div>
                  <div className="w-14 h-14 bg-white text-[#1A1A1A] font-serif font-black text-xl flex items-center justify-center rounded-lg border border-gray-300 shrink-0 shadow-xs">
                    {partner.logoPlaceholder}
                  </div>
                </div>

                <p className="font-handwriting text-base text-red-300 mb-2">
                  * Full TU Equivalency & Ministry of Education Nepal Approved
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {partner.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Degrees Awarded at NAMI Institute:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                    {partner.programmesOffered.map((prog, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-gray-800">
                        <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate font-medium">{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-3.5 flex items-center gap-3 mb-6 text-xs text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{partner.accreditation}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <button
                  onClick={() => onOpenPartnerModal(partner.id)}
                  className="bg-[#CC030E] hover:bg-[#b0020b] text-white font-semibold text-xs px-5 py-3 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View Full Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenApplyModal}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs px-5 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Apply Online
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-[#242424] border border-gray-800 rounded-xl text-xs sm:text-sm text-gray-300 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="font-serif font-bold text-white">Degree Guarantee:</span>
          <span>Degrees conferred at NAMI Institute are identical in format and status to degrees issued to students studying on-campus in the United Kingdom.</span>
        </div>

      </div>
    </section>
  );
};

