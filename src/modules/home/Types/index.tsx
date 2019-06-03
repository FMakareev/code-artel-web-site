export interface Section {
  title: string;
  description?: string;
}

export interface TextAnimated {
  serviceList: string[];
}

export interface MainSection extends Section {
  serviceList: string[];
}

export interface Service {
  icon: string;
  title: string;
  arr: string[];
}

export interface ServiceSection extends Section {
  serviceList: Service[];
}
/** PORTFOLIO */
export interface PortfolioSection extends Section {
  portfolioData: PortfolioWork[];
}

export interface PortfolioWork {
  tags: string;
  title: string;
  id: number;
  href: string;
  imagePreview: string;
  alt: string;
}

export interface PortfolioSlider {
  portfolioData: PortfolioWork[];
}

export interface ControlSliderPortfolio {
  toggleItem: () => void;
  currentPosition: number;
  startCounter: number;
  nextWork: () => void;
  [prop: string]: any;
}

export interface AboutUsSection extends Section {
  styledWord: string;
  content: string;
  stack: string[];
}

export interface InfoContact {
  icon: string;
  href: string;
  contact: string;
}

export interface ContactsSection extends Section {
  content: string;
  contactInfo: InfoContact[];
}

export interface LandingData {
  main: MainSection;
  services: ServiceSection;
  portfolio: PortfolioSection;
  aboutUs: AboutUsSection;
  contacts: ContactsSection;
}
