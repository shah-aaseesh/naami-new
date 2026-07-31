import { Programme, UniversityPartner, NewsItem, CampusPhoto } from '../types';

export const INSTITUTION_INFO = {
  name: 'NAMI Education Group',
  fullTitle: 'Naaya Aayam Multi-Disciplinary Institute',
  established: 2012,
  location: 'Jorpati-8, Gorkarneshwor, Kathmandu, Nepal',
  phonePrimary: '+977 1 4917441',
  phoneSecondary: '+977 1 4917442',
  email: 'info@nami.edu.np',
  admissionEmail: 'admissions@nami.edu.np',
  openingHours: 'Sun - Fri: 7:00 AM - 5:00 PM',
};

export const PROGRAMMES: Programme[] = [
  {
    id: 'school-primary',
    title: 'NAMI International School (Grade I – VI)',
    category: 'school',
    level: 'Primary Education',
    duration: '6 Years',
    description: 'A nurturing primary curriculum focusing on holistic child development, critical thinking, STEM foundational learning, and bilingual fluency.',
    highlights: [
      'Child-centered experiential learning approach',
      'Integrated STEM & Coding basics from Grade III',
      'Dedicated arts, music, and sports facilities',
      'Small class sizes with high teacher-to-student ratio'
    ],
    careerPaths: ['Seamless progression to Secondary Schooling & NEB/A-Levels'],
    entryRequirements: ['Age-appropriate readiness test', 'Interview with parents & student', 'Previous school transfer certificate (if applicable)']
  },
  {
    id: 'higher-secondary-neb-alevels',
    title: 'NEB +2 Science & Management / GCE A-Levels',
    category: 'higher-secondary',
    level: 'Higher Secondary',
    duration: '2 Years',
    partner: 'Cambridge Assessment International Education (UK) & NEB Nepal',
    description: 'Rigorous higher secondary education preparing students for top engineering, medical, computer science, and business university degrees worldwide.',
    highlights: [
      'Flexible choice between Cambridge A-Levels & NEB Science/Management',
      'State-of-the-art physics, chemistry, and computer science laboratories',
      'Career counseling and university entrance guidance',
      'Extensive extracurricular clubs and leadership programs'
    ],
    careerPaths: ['Direct entry into UK Bachelor degrees at NAMI', 'International university admissions in US, UK, Australia, Canada'],
    entryRequirements: ['SEE (Secondary Education Examination) or O-Levels with minimum Grade B / 2.8 GPA']
  },
  {
    id: 'bachelors-degree',
    title: "UK Bachelor's Degrees (BSc Hons & BBA)",
    category: 'bachelors',
    level: "Undergraduate (Bachelor's)",
    duration: '3 - 4 Years',
    partner: 'University of Northampton & University of Hertfordshire (UK)',
    description: 'Direct UK degree delivered in Kathmandu. Earn an internationally accredited British Bachelor degree with full credit transfer options to the UK campus.',
    highlights: [
      '100% UK curriculum identical to home university',
      'BSc (Hons) Computing, Software Engineering, Business Administration (BBA), Environmental Science',
      'Option to complete 3rd year in the UK',
      'Internship placements with leading tech firms & corporate partners in Nepal and abroad'
    ],
    careerPaths: ['Software Engineer', 'Data Analyst', 'Business Manager', 'Entrepreneur', 'Master\'s study in UK/USA'],
    entryRequirements: ['NEB +2 / A-Levels / High School diploma with minimum 55% / 2.4 CGPA', 'English Proficiency Test / NAMI English Assessment']
  },
  {
    id: 'masters-degree',
    title: "UK Master's Degrees (MBA & MSc Computing)",
    category: 'masters',
    level: "Postgraduate (Master's)",
    duration: '1.5 - 2 Years',
    partner: 'University of Northampton (UK)',
    description: 'Postgraduate degree designed for ambitious working professionals and graduates seeking executive leadership and advanced technical mastery.',
    highlights: [
      'Flexible weekend and evening class schedules for professionals',
      'Specializations in Executive MBA, Strategic Management, MSc Advanced Computing',
      'UK faculty guest lectures and international dissertation supervision',
      'Global alumni network across 40+ countries'
    ],
    careerPaths: ['Chief Technology Officer', 'Senior Project Manager', 'Strategy Consultant', 'Academic Researcher'],
    entryRequirements: ['Recognized Bachelor degree (min. 3-year duration)', '2+ years work experience for Executive MBA', 'Interview with admissions board']
  }
];

export const UNIVERSITY_PARTNERS: UniversityPartner[] = [
  {
    id: 'northampton',
    name: 'University of Northampton',
    country: 'United Kingdom',
    logoPlaceholder: 'UON',
    description: 'A leading public university in England recognized for outstanding teaching quality (TEF Gold) and social impact initiatives.',
    programmesOffered: ['BSc (Hons) Computing', 'BBA (Hons) Business Administration', 'Master of Business Administration (MBA)', 'MSc Computing'],
    accreditation: 'UK Quality Assurance Agency (QAA) & Ministry of Education Nepal Recognized',
    established: '1924 (Origins)',
    featuredDegree: 'BSc (Hons) Computing & Executive MBA'
  },
  {
    id: 'hertfordshire',
    name: 'University of Hertfordshire',
    country: 'United Kingdom',
    logoPlaceholder: 'UH',
    description: 'An award-winning British institution famous for technology innovation, top-ranked computer science degrees, and high graduate employability.',
    programmesOffered: ['BSc (Hons) Computer Science', 'BSc (Hons) Software Engineering', 'BSc (Hons) Network Security'],
    accreditation: 'UK QAA & Chartered Institute for IT (BCS) Aligned',
    established: '1952',
    featuredDegree: 'BSc (Hons) Computer Science & AI'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    date: 'July 28, 2026',
    category: 'Notice',
    title: 'Admissions Open for Academic Session 2026/27',
    summary: 'Applications are now open for School (Grade I-VI), NEB +2 / A-Levels, and UK Bachelor’s & Master’s degree intakes.',
    content: 'NAMI Education Group announces open admissions for the upcoming academic year. Early bird merit scholarships up to 50% are available for outstanding candidates. Entrance assessment tests are scheduled every Saturday throughout August.',
    isImportant: true
  },
  {
    id: 'news-2',
    date: 'July 15, 2026',
    category: 'Achievement',
    title: 'NAMI Computing Students Win National Hackathon 2026',
    summary: 'Our 3rd year BSc (Hons) Computing team secured 1st place with an AI-driven agricultural supply chain platform.',
    content: 'We celebrate our brilliant undergraduate team who competed against 35 university teams across Nepal. The winning project integrates IoT sensors and predictive machine learning models to reduce crop wastage.'
  },
  {
    id: 'news-3',
    date: 'June 30, 2026',
    category: 'Event',
    title: 'UK University Delegation Visits NAMI Campus in Kathmandu',
    summary: 'Senior delegates from University of Northampton & University of Hertfordshire hosted interactive seminars and degree award ceremonies.',
    content: 'Students and faculty participated in a two-day academic symposium featuring guest lectures on artificial intelligence, international business strategy, and global study abroad exchange options.'
  }
];

export const CAMPUS_PHOTOS: CampusPhoto[] = [
  {
    id: 'campus-1',
    title: 'Modern Academic Complex & Courtyard',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800',
    altText: 'NAMI Education Group main campus building with green courtyard in Kathmandu',
    description: 'Spacious 5-acre campus in Jorpati featuring sunlit classrooms, outdoor amphitheater, and quiet study zones.'
  },
  {
    id: 'campus-2',
    title: 'Advanced Computer & Robotics Lab',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    altText: 'Students working together in high-tech computer laboratory',
    description: 'High-speed fiber connectivity, Linux & Windows workstations, and specialized AI/Robotics hardware.'
  },
  {
    id: 'campus-3',
    title: 'Student Innovation & Club Activities',
    category: 'Student Life',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    altText: 'NAMI students collaborating on a project in student lounge',
    description: 'Active student clubs spanning Robotics, Music & Arts, Debating Society, Sports League, and Rotaract.'
  },
  {
    id: 'campus-4',
    title: 'UK Partner Convocation Ceremony',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    altText: 'Graduation ceremony celebrating NAMI UK degree recipients',
    description: 'Annual convocation with official UK university dignitaries conferring British degrees on Nepalese graduates.'
  }
];

export const PATHWAY_STEPS = [
  {
    step: '01',
    title: 'NAMI International School',
    level: 'Grade I – VI',
    icon: 'School',
    desc: 'Child-centered primary education fostering curiosity, confidence, and strong foundations in science, math, and English.',
    badge: 'Foundation Phase'
  },
  {
    step: '02',
    title: 'NEB +2 / GCE A-Levels',
    level: 'Higher Secondary',
    icon: 'BookOpen',
    desc: 'Cambridge A-Levels or NEB Science & Management equips students with analytical rigor required for top universities.',
    badge: 'Higher Secondary'
  },
  {
    step: '03',
    title: "UK Bachelor's Degree",
    level: "BSc (Hons) / BBA (3 Years)",
    icon: 'GraduationCap',
    desc: 'Direct British degree from University of Northampton & Hertfordshire delivered in Kathmandu with optional UK study abroad.',
    badge: 'Undergraduate'
  },
  {
    step: '04',
    title: "UK Master's Degree",
    level: 'MBA & MSc (1.5 - 2 Years)',
    icon: 'Award',
    desc: 'Postgraduate qualifications designed for career acceleration, executive leadership, and advanced research.',
    badge: 'Postgraduate'
  }
];
