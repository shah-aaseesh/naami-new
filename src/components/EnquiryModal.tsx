import React, { useState } from 'react';
import { X, CheckCircle2, HelpCircle, Send } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative">
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CC030E] rounded-lg flex items-center justify-center text-white">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">NAMI Academic Enquiry</h3>
              <p className="text-xs text-gray-400">Ask us anything about admissions, fees & hostels</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold">Enquiry Received!</h4>
              <p className="text-xs text-gray-600">
                Thank you {name}. Our academic counselors will respond to {email} shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-2 bg-[#1A1A1A] text-white text-xs px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-gray-800 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-800 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-800 mb-1">Your Message / Enquiry *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Type your question regarding courses, eligibility, or UK credit transfer..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full bg-[#F1EFE8] border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-[#CC030E]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#CC030E] text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5"
                >
                  <span>Submit enquiry</span>
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
