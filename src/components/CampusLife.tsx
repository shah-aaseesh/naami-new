import React from 'react';
import { motion } from 'motion/react';
import { Camera, ArrowRight, Expand, Compass } from 'lucide-react';
import { CAMPUS_PHOTOS } from '../data/namiData';

interface CampusLifeProps {
  onOpenCampusLifeModal: (photoId?: string) => void;
}

export const CampusLife: React.FC<CampusLifeProps> = ({
  onOpenCampusLifeModal,
}) => {
  return (
    <section id="campus-life" className="py-20 bg-[#F1EFE8]/50 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#CC030E] border border-gray-200">
              <Compass className="w-3.5 h-3.5" />
              <span>Vibrant student environment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Life at NAMI
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Beyond academic rigour, NAMI offers a holistic campus experience with active student clubs, state-of-the-art sports, robotics labs, and cultural events.
            </p>
          </div>

          <button
            onClick={() => onOpenCampusLifeModal()}
            className="self-start md:self-auto text-sm font-bold text-[#CC030E] hover:text-[#b0020b] flex items-center gap-1.5 underline decoration-2 underline-offset-4 cursor-pointer"
          >
            <span>See more campus photos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Image Grid with Zoom-in on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPUS_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              onClick={() => onOpenCampusLifeModal(photo.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-200 hover:border-[#CC030E] transition-all cursor-pointer group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {photo.category}
                </div>

                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#CC030E] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Expand className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#CC030E] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-[#CC030E] flex items-center gap-1">
                  <span>View gallery preview</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
