import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

interface DownloadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadsModal: React.FC<DownloadsModalProps> = ({ isOpen, onClose }) => {
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const downloadsList = [
    { title: 'NAMI Education Group Prospectus 2026/27', size: '4.2 MB', desc: 'Complete guide to School, A-Levels & UK Degrees' },
    { title: 'University of Northampton Degree Syllabus', size: '2.8 MB', desc: 'BSc Computing & MBA module outlines' },
    { title: 'University of Hertfordshire Course Curriculum', size: '3.1 MB', desc: 'BSc Computer Science module breakdown' },
    { title: 'Merit Scholarship Application Form', size: '1.1 MB', desc: 'Scholarship criteria and discount application' },
    { title: 'NAMI Academic Calendar 2026/27', size: '850 KB', desc: 'Key term dates, exams & convocation schedule' }
  ];

  const handleDownload = (title: string) => {
    setDownloadedItem(title);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">NAMI Downloads Center</h3>
              <p className="text-xs text-gray-400">Prospectus, application forms & syllabus guides</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {downloadedItem && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Downloading <strong>{downloadedItem}</strong>... Check your browser downloads.</span>
            </div>
          )}

          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {downloadsList.map((doc, idx) => (
              <div key={idx} className="bg-[#F1EFE8]/70 border border-gray-200 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-[#CC030E] transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#CC030E]" />
                    <h4 className="text-xs font-bold text-[#1A1A1A]">{doc.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-600 pl-6">{doc.desc}</p>
                </div>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="bg-white hover:bg-[#CC030E] hover:text-white text-[#1A1A1A] border border-gray-300 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shrink-0 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{doc.size}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button onClick={onClose} className="text-xs font-semibold text-gray-500 hover:text-gray-900">
              Close downloads window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
