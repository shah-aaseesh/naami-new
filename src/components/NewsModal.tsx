import React from 'react';
import { X, Calendar, FileText, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsModalProps {
  item: NewsItem | null;
  onClose: () => void;
  onOpenApplyModal: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ item, onClose, onOpenApplyModal }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
        <div className="bg-[#1A1A1A] text-white p-6 flex items-start justify-between">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
              {item.category} Announcement
            </span>
            <h3 className="text-lg sm:text-xl font-bold pr-4">{item.title}</h3>
            <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
              <Calendar className="w-3.5 h-3.5 text-red-400" />
              {item.date}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-gray-800 leading-relaxed">
          <div className="bg-[#F1EFE8] p-4 rounded-xl border border-gray-200 font-medium text-gray-900">
            {item.summary}
          </div>

          <p className="whitespace-pre-line text-gray-700">
            {item.content}
          </p>

          <div className="bg-red-50 p-4 rounded-xl border border-red-100 space-y-1 text-xs">
            <span className="font-bold text-[#CC030E] block">Key Action Information</span>
            <p className="text-gray-700">For further inquiries regarding this notice or entrance schedules, contact NAMI Administration at info@nami.edu.np or call +977 1 4917441.</p>
          </div>
        </div>

        <div className="bg-[#F1EFE8] px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button onClick={onClose} className="text-xs font-semibold text-gray-600 hover:text-gray-900">
            Close notice
          </button>
          <button
            onClick={() => { onClose(); onOpenApplyModal(); }}
            className="bg-[#CC030E] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5"
          >
            <span>Apply online</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
