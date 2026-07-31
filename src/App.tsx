/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AcademicPathway } from './components/AcademicPathway';
import { UniversityPartners } from './components/UniversityPartners';
import { WhyNAMI } from './components/WhyNAMI';
import { OurJourney } from './components/OurJourney';
import { CampusLife } from './components/CampusLife';
import { NewsNotices } from './components/NewsNotices';
import { CareersTeaser } from './components/CareersTeaser';
import { Footer } from './components/Footer';
import { SocialSideWidget } from './components/SocialSideWidget';

// Modals & Drawers
import { ApplyModal } from './components/ApplyModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { DownloadsModal } from './components/DownloadsModal';
import { NewsModal } from './components/NewsModal';
import { CampusLifeModal } from './components/CampusLifeModal';
import { AboutModal } from './components/AboutModal';
import { CareersModal } from './components/CareersModal';

import { NewsItem } from './types';
import { LogoScrollIntro } from './components/LogoScrollIntro';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);

  // Modal states
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgrammeForApply, setSelectedProgrammeForApply] = useState<string | undefined>(undefined);

  const [programmeDetailModalId, setProgrammeDetailModalId] = useState<string | null>(null);
  
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [downloadsModalOpen, setDownloadsModalOpen] = useState(false);

  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

  const [campusLifeModalOpen, setCampusLifeModalOpen] = useState(false);
  const [selectedCampusPhotoId, setSelectedCampusPhotoId] = useState<string | undefined>(undefined);

  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  // Smooth Scrolling
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenApplyModal = (programmeId?: string) => {
    setSelectedProgrammeForApply(programmeId);
    setApplyModalOpen(true);
  };

  const handleOpenProgrammeModal = (programmeId: string) => {
    setProgrammeDetailModalId(programmeId);
  };

  const handleOpenCampusLifeModal = (photoId?: string) => {
    setSelectedCampusPhotoId(photoId);
    setCampusLifeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-paper-texture text-[#1A1A1A] font-sans antialiased selection:bg-[#CC030E] selection:text-white">
      
      {/* 0. Logo Scroll Intro Transition */}
      {!introCompleted && (
        <LogoScrollIntro onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Main Content Layout (Fixed statically behind intro layer until zoom completes) */}
      <div className={!introCompleted ? "fixed inset-0 z-0 overflow-hidden pointer-events-auto" : "relative"}>
        {/* 1. Header & Navigation */}
      <Header
        onOpenApplyModal={handleOpenApplyModal}
        onOpenEnquiryModal={() => setEnquiryModalOpen(true)}
        onOpenDownloadsModal={() => setDownloadsModalOpen(true)}
        onOpenProgrammeModal={handleOpenProgrammeModal}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Area */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenApplyModal={handleOpenApplyModal}
          onScrollToPathway={() => handleScrollToSection('academic-pathway')}
          onOpenProgrammeModal={handleOpenProgrammeModal}
        />

        {/* 3. Academic Pathway / Our Institutions Section */}
        <AcademicPathway
          onOpenProgrammeModal={handleOpenProgrammeModal}
          onOpenApplyModal={handleOpenApplyModal}
        />

        {/* 4. Stats Bar */}
        <StatsBar />

        {/* 5. Why NAMI Section */}
        <WhyNAMI
          onOpenAboutModal={() => setAboutModalOpen(true)}
          onOpenApplyModal={handleOpenApplyModal}
        />

        {/* 6. Our Journey Section */}
        <OurJourney
          onOpenProgrammeModal={handleOpenProgrammeModal}
          onOpenApplyModal={handleOpenApplyModal}
        />

        {/* 6. University Partners Section */}
        <UniversityPartners
          onOpenPartnerModal={(partnerId) => handleOpenProgrammeModal('bachelors-degree')}
          onOpenApplyModal={handleOpenApplyModal}
        />

        {/* 7. Campus Life Preview Section */}
        <CampusLife
          onOpenCampusLifeModal={handleOpenCampusLifeModal}
        />

        {/* 8. News & Notices Preview Section */}
        <NewsNotices
          onOpenNewsModal={(item) => setSelectedNewsItem(item)}
        />

        {/* 9. Careers / Hiring Partners Teaser */}
        <CareersTeaser
          onOpenCareersModal={() => setCareersModalOpen(true)}
          onOpenApplyModal={handleOpenApplyModal}
        />
      </main>

      {/* Floating Side Widget */}
      <SocialSideWidget />

      {/* 10. Footer Section */}
      <Footer
        onOpenApplyModal={handleOpenApplyModal}
        onOpenEnquiryModal={() => setEnquiryModalOpen(true)}
        onOpenDownloadsModal={() => setDownloadsModalOpen(true)}
        onOpenProgrammeModal={handleOpenProgrammeModal}
        onScrollToSection={handleScrollToSection}
      />
      </div>

      {/* Modals */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultProgrammeId={selectedProgrammeForApply}
      />

      <ProgramDetailModal
        programmeId={programmeDetailModalId}
        onClose={() => setProgrammeDetailModalId(null)}
        onOpenApplyModal={handleOpenApplyModal}
      />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />

      <DownloadsModal
        isOpen={downloadsModalOpen}
        onClose={() => setDownloadsModalOpen(false)}
      />

      <NewsModal
        item={selectedNewsItem}
        onClose={() => setSelectedNewsItem(null)}
        onOpenApplyModal={handleOpenApplyModal}
      />

      <CampusLifeModal
        isOpen={campusLifeModalOpen}
        selectedPhotoId={selectedCampusPhotoId}
        onClose={() => setCampusLifeModalOpen(false)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenApplyModal={handleOpenApplyModal}
      />

      <CareersModal
        isOpen={careersModalOpen}
        onClose={() => setCareersModalOpen(false)}
        onOpenApplyModal={handleOpenApplyModal}
      />

    </div>
  );
}
