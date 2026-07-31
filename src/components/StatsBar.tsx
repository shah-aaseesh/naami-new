import React from 'react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Building2, 
  Globe 
} from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-7 h-7 text-[#F5C042]" />,
      value: '5,000+',
      label: 'Students',
    },
    {
      icon: <Users className="w-7 h-7 text-[#F5C042]" />,
      value: '300+',
      label: 'Faculty & Staff',
    },
    {
      icon: <BookOpen className="w-7 h-7 text-[#F5C042]" />,
      value: '20+',
      label: 'Programs',
    },
    {
      icon: <Building2 className="w-7 h-7 text-[#F5C042]" />,
      value: '3',
      label: 'Campuses',
    },
    {
      icon: <Globe className="w-7 h-7 text-[#F5C042]" />,
      value: '',
      label: 'Global Vision',
      isTextOnly: true
    },
  ];

  return (
    <section className="bg-[#F8F9FA] pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Navy Stats Counter Container */}
        <div className="bg-[#0B1A2D] text-white rounded-2xl py-8 px-6 sm:px-10 shadow-xl border border-[#1A2D45]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center p-2 ${
                  idx > 0 && idx % 2 === 0 ? 'pt-4 md:pt-2' : ''
                }`}
              >
                <div className="mb-2">
                  {stat.icon}
                </div>
                
                {stat.isTextOnly ? (
                  <span className="text-xl sm:text-2xl font-black text-white mt-2">
                    {stat.label}
                  </span>
                ) : (
                  <>
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-300 mt-1">
                      {stat.label}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
