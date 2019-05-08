export interface IVariantSize {
  small: any;
  medium: any;
  large: any;

  [propName: string]: any;
}

export interface IVariantItem {
  ':hover'?: any;
  ':active'?: any;
  ':disabled'?: any;
  ':focus'?: any;
  ':visited'?: any;
  '&.active'?: any;

  [propName: string]: any;
}

export interface IVariantList {
  primary: IVariantItem;

  [propName: string]: IVariantItem;
}

export interface IVariant {
  [propName: string]: any;
}

export interface IColors {
  white: string;
  yellow: string;
  light_yellow: string;
  dark_yellow: string;
  pink: string;
  dark_pink: string;
  light_pink: string;
  bright_blue: string;
  light_blue: string;
  darkest_gray: string;
  dark_gray: string;
  gray: string;
  light_gray: string;
  dark_blue: string;
  bright_gray: string;
  light_black: string;
  black: string;

  [propName: string]: any;
}

export interface ITheme {
  space?: number[];
  fontSizes?: number[];
  lineHeight?: number[];
  borderRadius?: number[];
  boxShadow?: string[];
  border?: string[];
  transition?: string[];
  colors: IColors;
  borderColor?: IColors;
  variant?: IVariant;

  [propName: string]: any;
}

export interface IPositionStyle {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  position?: string | number;
  transform?: string | number;
}

export interface IPosition {
  topStart?: IPositionStyle | any;
  top?: IPositionStyle | any;
  topEnd?: IPositionStyle | any;

  leftStart?: IPositionStyle | any;
  left?: IPositionStyle | any;
  leftEnd?: IPositionStyle | any;

  rightStart?: IPositionStyle | any;
  right?: IPositionStyle | any;
  rightEnd?: IPositionStyle | any;

  bottomStart?: IPositionStyle | any;
  bottom?: IPositionStyle | any;
  bottomEnd?: IPositionStyle | any;

  [propName: string]: IPositionStyle;
}
