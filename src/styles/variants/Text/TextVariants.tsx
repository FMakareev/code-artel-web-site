import { ITheme } from '../../interfaces';

let baseStyle = {};

export const TextVariants = (theme: ITheme): any => {
  baseStyle = {
    ...baseStyle,
    fontFamily: '"Raleway", sans-serif',
    display: 'block',
  };
  return {
    h1_normal: {
      ...baseStyle,
      fontSize: '64px',
      lineHeight: '72px',
      fontWeight: 400,
    },
    h1_bold: {
      ...baseStyle,
      fontSize: '64px',
      lineHeight: '72px',
      fontWeight: 700,
    },
    h2_normal: {
      ...baseStyle,
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 400,
    },
    h2_bold: {
      ...baseStyle,
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 700,
    },
    h3_normal: {
      ...baseStyle,
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h3_bold: {
      ...baseStyle,
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h4_normal: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    h4_bold: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    subtitle1: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    subtitle2: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    body1_normal: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body1_bold: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 700,
    },
    link: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 700,
    },
    caption: {
      ...baseStyle,
      fontSize: '12px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    error: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.colors['pink'],
    },
    warning: {
      ...baseStyle,
      fontSize: '16px',
      lineHeight: '24px',
      color: theme.colors['yellow'],
    },
  };
};

export default TextVariants;
