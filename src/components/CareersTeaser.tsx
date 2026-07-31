import React from 'react';
import { Briefcase, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface CareersTeaserProps {
  onOpenCareersModal: () => void;
  onOpenApplyModal: () => void;
}

export const CareersTeaser: React.FC<CareersTeaserProps> = ({
  onOpenCareersModal,
  onOpenApplyModal,
}) => {
  return (
    <section id="careers" className="bg-[#1A1A1A] py-10 text-white font-sans border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-800">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#CC030E] text-white flex items-center justify-center shrink-0 shadow-md">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  Career Acceleration
                </span>
                <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-md">
                  50+ Hiring Partners
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Partnered with top tech firms, multinational banks, & UK alumni placement networks
              </h3>
              <p className="text-xs text-gray-400">
                Guaranteed internship placements, CV workshops, and campus recruitment drives for NAMI students.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenCareersModal}
              className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View placement partners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenApplyModal}
              className="flex-1 md:flex-none bg-[#CC030E] hover:bg-[#b0020b] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Join NAMI
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
