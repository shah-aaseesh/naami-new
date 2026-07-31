import React from 'react';
import { X, Camera, Compass } from 'lucide-react';
import { CAMPUS_PHOTOS } from '../data/namiData';

interface CampusLifeModalProps {
  isOpen: boolean;
  selectedPhotoId?: string;
  onClose: () => void;
}

export const CampusLifeModal: React.FC<CampusLifeModalProps> = ({ isOpen, selectedPhotoId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative max-h-[90vh] flex flex-col">
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Life at NAMI — Campus & Community Gallery</h3>
              <p className="text-xs text-gray-400">5-acre campus in Jorpati, Kathmandu</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAMPUS_PHOTOS.map((photo) => (
              <div 
                key={photo.id}
                className={`bg-[#F1EFE8] rounded-xl overflow-hidden border ${selectedPhotoId === photo.id ? 'border-[#CC030E] ring-2 ring-red-400' : 'border-gray-200'} shadow-sm`}
              >
                <div className="h-52 bg-gray-200 relative">
                  <img src={photo.imageUrl} alt={photo.altText} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#1A1A1A]/80 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                    {photo.category}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 text-sm">{photo.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F1EFE8] px-6 py-4 border-t border-gray-200 flex justify-end shrink-0">
          <button onClick={onClose} className="bg-[#1A1A1A] text-white text-xs font-semibold px-5 py-2 rounded-lg">
            Close gallery
          </button>
        </div>
      </div>
    </div>
  );
};
