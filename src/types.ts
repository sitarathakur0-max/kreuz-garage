export type Page = 'home' | 'about' | 'services' | 'contact';

export type ServicePillarId = 'garage' | 'workshop' | 'station' | 'cafe';

export interface ServicePillar {
  id: ServicePillarId;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  inquiryArea: ServicePillarId | 'general';
  message: string;
}

export interface FormErrors {
  name?: string;
  contact?: string;
  message?: string;
}
