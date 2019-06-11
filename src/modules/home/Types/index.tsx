export interface IBaseModel {
  _id?: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

/** */
export interface ISection extends IBaseModel {
  title?: string;
  description?: string;
  content?: string;
  template?: string;
  isMain?: string;
}

/** */
export interface ITag extends IBaseModel {
  name: string;
}

export interface TextAnimated {
  services: string[];
  variant: string;
}

export interface IMainSectionProps extends ISection {
  services: string[];
}

export interface IFeedback extends IBaseModel {
  name: string;
  email: string;
  phone: string;
  message: string;
  budget: string;
  attachment: UploadFile | string;
}

export interface UploadFile extends IBaseModel {
  name?: string;
  hash?: string;
  sha256?: string;
  ext?: string;
  mime?: string;
  size?: string;
  url?: string;
  provider?: string;
  public_id?: string;
}

export interface IImage extends IBaseModel {
  image?: UploadFile;
  alt?: string;
  [prop: string]: any;
}
