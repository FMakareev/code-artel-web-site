export interface Section {
  title: string;
  description?: string;
}

export interface HeaderSection extends Section {
  children?: any;
  width?: string;
}

export interface TextAnimated {
  messages: string[];
  variant: string;
}

export interface MainSection extends Section {
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
  serviceList: ListServices[];
  callToActionText: string;
  buttonText: string;
}
/** PORTFOLIO */
export interface PortfolioSection extends Section {
  styledWord: string;
  portfolioData: PortfolioData[];
}

export interface PortfolioData {
  tags: string;
  title: string;
  id: string;
  imagePreview: string;
  alt: string;
}

export interface PortfolioSlider {
  portfolioData: PortfolioData[];
}

export interface ControlSliderPortfolio {
  toggleItem: any;
  currentPosition: number;
  startCounter: number;
  nextWork: () => void;

  [prop: string]: any;
}

export interface AboutUsSection extends Section {
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
