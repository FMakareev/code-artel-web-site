export interface Section {
  title: string;
  variant?: string;
}

export interface HeaderSection extends Section {
  description: string;
  children?: any;
  width?: string;
}

export interface TextAnimated {
  messages: string[];
  variant: string;
}

export interface MainSection extends Section {
  description: string;
  messages: string[];
  image: string;
  buttonText: string;
}

export interface ListServices {
  icon: string;
  title: string;
  arr: string[];
}

export interface ServiceSection extends Section {
  description: string;
  serviceList: ListServices[];
  callToActionText: string;
  buttonText: string;
}

export interface PortfolioSection extends Section {
  description: string;
  styledWord: string;
  portfolioData: PortfolioData[];
}

export interface PortfolioData {
  tags: string;
  title: string;
  description: string;
  id: string;
  imagePreview: string;
  alt: string;
}

export interface PortfolioSlider {
  portfolioData: PortfolioData[];
  work: object;
}

export interface PortfolioInfo {
  work: PortfolioData;
}

export interface ControlSliderPortfolio {
  toggleItem: any;
  currentPosition: number;
  startCounter: number;
  nextWork: () => void;

  [prop: string]: any;
}

export interface AboutUsSection extends Section {
  description: string[];
  styledWord: string;
  sectionText: string;
  stack: string[];
  img: string;
}

export interface InfoContact {
  icon: string;
  href: string;
  text: string;
}

export interface ContactsSection extends Section {
  description: string;
  sectionText: string;
  contactInfo: InfoContact[];
  agreement: string;
}

export interface LandingData {
  main: MainSection;
  services: ServiceSection;
  portfolio: PortfolioSection;
  aboutUs: AboutUsSection;
  contacts: ContactsSection;
}
