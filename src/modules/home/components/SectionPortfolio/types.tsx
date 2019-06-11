import { ISection, IBaseModel, IImage, ITag } from '../../Types';

export interface IPortfolioWork extends IBaseModel {
  title: string;
  description: string;
  link?: string;
  tags?: ITag[];
  images?: IImage[];
}

/** PORTFOLIO */
export interface IPortfolioSectionProps extends ISection {
  portfolioworks: IPortfolioWork[];
}

export interface IPortfolioSliderProps {
  portfolioworks: IPortfolioWork[];
}

export interface ISliderPortfolioControlProps {
  toggleItem: (index: number) => void;
  currentPosition: number;
  startCounter: number;
  nextWork: () => void;
  portfolioworks: IPortfolioWork[];
  [prop: string]: any;
}
