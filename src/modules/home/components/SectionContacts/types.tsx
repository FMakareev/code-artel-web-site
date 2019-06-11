import { IImage, ISection } from '../../Types';

export interface IContact {
  icon?: IImage;
  href?: string;
  name?: string;
}

export interface ISocialNetworks {
  icon?: IImage;
  href?: string;
  name?: string;
}

export interface IContactsSectionProps extends ISection {
  contacts: IContact[];
  socialNetworks: ISocialNetworks[];
}
