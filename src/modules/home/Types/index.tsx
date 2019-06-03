export interface Section {
  title: string;
  description?: string;
  content?: string;
}

export interface TextAnimated {
  serviceList: string[];
}

export interface MainSection extends Section {
  section: object[];
  serviceList: Service[];
}

export interface Service {
  icon: string;
  title: string;
  arr: string[];
  isMain?: boolean;
}

export interface ServiceSection extends Section {
  section: object[];
  serviceList: Service[];
}
/** PORTFOLIO */
export interface PortfolioSection extends Section {
  section: object[];
  portfolioWorks: PortfolioWork[];
}

export interface PortfolioWork {
  tags: string;
  title: string;
  description: string;
  id: number;
  link: string;
  imagePreview: string;
  alt: string;
}

export interface PortfolioSlider {
  portfolioWorks: PortfolioWork[];
}

export interface ControlSliderPortfolio {
  toggleItem: () => void;
  currentPosition: number;
  startCounter: number;
  nextWork: () => void;
  [prop: string]: any;
}

export interface AboutUsSection extends Section {
  section: object[];
  stack: string[];
}

export interface InfoContact {
  icon: string;
  href: string;
  contact: string;
}

export interface ContactsSection extends Section {
  section: object[];
  contactInfo: InfoContact[];
}

export interface LandingData {
  main: MainSection;
  services: ServiceSection;
  portfolio: PortfolioSection;
  aboutUs: AboutUsSection;
  contacts: ContactsSection;
}
