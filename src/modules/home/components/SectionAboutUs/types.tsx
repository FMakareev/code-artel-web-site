import { IBaseModel, ISection } from '../../Types';

export interface IStack extends IBaseModel {
  name: string;
}

export interface IAboutUsSectionProps extends ISection {
  stacks: IStack[];
}
