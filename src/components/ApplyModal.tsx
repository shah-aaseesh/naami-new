import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, Send, ArrowRight } from 'lucide-react';
import { PROGRAMMES } from '../data/namiData';
import { ApplicationFormData } from '../types';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgrammeId?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultProgrammeId,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    programme: defaultProgrammeId || PROGRAMMES[2].id,
    previousEducation: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
        
        {/* Modal Header */}
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">NAMI Online Admission Application</h3>
              <p className="text-xs text-gray-400">Academic Session 2026 / 2027 Intake</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A]">Application Submitted Successfully!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your application for <span className="font-semibold text-[#CC030E]">{PROGRAMMES.find(p => p.id === formData.programme)?.title}</span> has been received. Our admissions team will contact you within 24 hours at <span className="font-semibold">{formData.email}</span>.
              </p>
              <div className="bg-[#F1EFE8] p-4 rounded-xl text-xs text-gray-700 max-w-md mx-auto text-left space-y-1">
                <p>📍 <strong>Next Steps:</strong> Bring copy of academic transcripts & citizenship/passport to NAMI Admissions Office in Jorpati.</p>
                <p>📞 Admission Desk: +977 1 4917441</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#1A1A1A] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#CC030E] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-gray-800 mb-1">Select Academic Programme *</label>
                <select
                  value={formData.programme}
                  onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                  required
                >
                  {PROGRAMMES.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title} ({prog.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-800 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aayush Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-1">Phone / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+977 98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-800 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-800 mb-1">Previous School / College & Grade/GPA</label>
                <input
                  type="text"
                  placeholder="e.g. SEE Passed / +2 Science 3.4 GPA"
                  value={formData.previousEducation}
                  onChange={(e) => setFormData({ ...formData, previousEducation: e.target.value })}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-800 mb-1">Additional Notes / Questions (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Inquire about scholarships, hostels, or transport..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#CC030E] hover:bg-[#b0020b] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit application</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
