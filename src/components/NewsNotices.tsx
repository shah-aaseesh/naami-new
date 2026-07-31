import React from 'react';
import { 
  Bell, 
  Calendar, 
  FileText,
  Download,
  ChevronRight
} from 'lucide-react';
import { NEWS_ITEMS } from '../data/namiData';
import { NewsItem } from '../types';

interface NewsNoticesProps {
  onOpenNewsModal: (item: NewsItem) => void;
}

export const NewsNotices: React.FC<NewsNoticesProps> = ({ onOpenNewsModal }) => {
  return (
    <section id="news-notices" className="py-16 bg-white border-b border-[#D9D6CE] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
          <div>
            <div className="inline-block bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs mb-2">
              Official Bulletin
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
              Academic Notice Board
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Official circulars, exam schedules, intake notifications, and student announcements.
            </p>
          </div>

          <button
            onClick={() => onOpenNewsModal(NEWS_ITEMS[0])}
            className="text-xs font-bold text-[#CC030E] hover:underline flex items-center gap-1"
          >
            <span>Notice Archives</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Official Notice Board Table */}
        <div className="border border-[#D9D6CE] rounded bg-white overflow-hidden text-left shadow-2xs">
          <div className="bg-[#1A1A1A] text-white text-xs font-bold px-4 py-3 grid grid-cols-12 gap-2 uppercase tracking-wider">
            <div className="col-span-3 sm:col-span-2">Date</div>
            <div className="col-span-3 sm:col-span-2">Department</div>
            <div className="col-span-6 sm:col-span-6">Notice Subject</div>
            <div className="hidden sm:block col-span-2 text-right">Action</div>
          </div>

          <div className="divide-y divide-gray-200">
            {NEWS_ITEMS.map((item) => (
              <div 
                key={item.id}
                onClick={() => onOpenNewsModal(item)}
                className="p-4 grid grid-cols-12 gap-2 items-center hover:bg-[#F9F8F5] transition-colors cursor-pointer text-xs"
              >
                <div className="col-span-3 sm:col-span-2 font-mono text-gray-600 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{item.date}</span>
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                    item.category === 'Notice'
                      ? 'bg-red-50 text-[#CC030E] border-red-200'
                      : 'bg-stone-100 text-gray-800 border-gray-300'
                  }`}>
                    {item.category}
                  </span>
                </div>

                <div className="col-span-6 sm:col-span-6 pr-2">
                  <h4 className="font-bold text-gray-900 line-clamp-1 hover:text-[#CC030E]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-1 hidden sm:block">
                    {item.summary}
                  </p>
                </div>

                <div className="hidden sm:flex col-span-2 justify-end items-center">
                  <span className="text-xs font-bold text-[#CC030E] hover:underline flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    Read Circular
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
