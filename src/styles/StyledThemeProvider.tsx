import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { IColors, ITheme } from './interfaces';
// import {ThemeCreate} from 'code-artel-ui-lib';

/** Variants **/
import { ButtonSize } from './variants/Buttons/ButtonSize';
import { ButtonVariant } from './variants/Buttons/ButtonVariant';
import { InputSize } from './variants/Inputs/InputSize';
import { InputVariant } from './variants/Inputs/InputVariant';
import { TextVariants } from './variants/Text/TextVariants';

export const Colors: IColors = {
  white: '#ffffff',
  yellow: '#E0C74C',
  light_yellow: '#FFFA7D',
  dark_yellow: '#AB9715',
  pink: '#E04C7B',
  dark_pink: '#AA094F',
  light_pink: '#FF7FAA',
  bright_blue: '#4CACE0',
  light_blue: '#267199',
  darkest_gray: '#666666',
  dark_gray: '#B3B3B3',
  gray: '#CCCCCC',
  light_gray: '#E5E5E5',
  dark_blue: '#0C3A52',
  bright_gray: '#F2F2F2',
  light_black: '#2C2C2C',
  black: '#1C1C1C',
};

export const Space: number[] = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104];

const defaultThemeProps = {
  space: Space,
  colors: Colors,
};

const transition: string[] = [
  'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
];

export const ThemeCreate = (props: ITheme = defaultThemeProps): ITheme => {
  const { space, colors } = props;

  const Theme: ITheme = {
    space: space || Space,
    fontSizes: space || Space,
    lineHeight: space || Space,
    colors,
    transition: transition,
    variant: {
      buttonVariant: {},
      buttonSize: {},
      inputVariant: {},
      inputSize: {},
      textVariants: {},
    },
  };
  if (Theme.variant) {
    Theme.variant.buttonVariant = ButtonVariant(Theme);
    Theme.variant.buttonSize = ButtonSize();
    Theme.variant.inputVariant = InputVariant(Theme);
    Theme.variant.inputSize = InputSize();
    Theme.variant.textVariants = TextVariants(Theme);
  }

  return Theme;
};
export const StyledThemeProvider: React.FC<any> = ({ children }) => (
  <ThemeProvider theme={ThemeCreate}>{children}</ThemeProvider>
);

export default StyledThemeProvider;
