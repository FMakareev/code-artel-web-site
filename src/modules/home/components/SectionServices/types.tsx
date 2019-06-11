import { IBaseModel, IImage, ISection } from '../../Types';

export interface IService extends IBaseModel {
  icons: IImage[];
  title: string;
  description?: string;
  isMain?: boolean;
}

export interface ServiceSectionProps extends ISection {
  services: IService[];
}
