export interface Programme {
  id: string;
  title: string;
  category: 'school' | 'higher-secondary' | 'bachelors' | 'masters';
  level: string;
  duration: string;
  partner?: string;
  description: string;
  highlights: string[];
  careerPaths: string[];
  entryRequirements: string[];
}

export interface UniversityPartner {
  id: string;
  name: string;
  country: string;
  logoPlaceholder: string;
  description: string;
  programmesOffered: string[];
  accreditation: string;
  established: string;
  featuredDegree: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Notice' | 'Event' | 'Achievement';
  title: string;
  summary: string;
  content: string;
  isImportant?: boolean;
}

export interface CampusPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  altText: string;
  description: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  programme: string;
  previousEducation: string;
  message: string;
}
