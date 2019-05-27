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
      fontWeight: 300,
      '@media(max-width: 768px)': {
        fontSize: '48px',
        lineHeight: '56px',
      },
      '@media(max-width: 480px)': {
        fontSize: '40px',
        lineHeight: '48px',
      },
    },
    h1_bold: {
      ...baseStyle,
      fontSize: '64px',
      lineHeight: '72px',
      fontWeight: 700,
      '@media(max-width: 768px)': {
        fontSize: '48px',
        lineHeight: '56px',
      },
      '@media(max-width: 480px)': {
        fontSize: '40px',
        lineHeight: '48px',
      },
    },
    h2_normal: {
      ...baseStyle,
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 300,
      '@media(max-width: 768px)': {
        fontSize: '32px',
        lineHeight: '40px',
      },
      '@media(max-width: 480px)': {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    h2_bold: {
      ...baseStyle,
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 700,
      '@media(max-width: 768px)': {
        fontSize: '32px',
        lineHeight: '40px',
      },
      '@media(max-width: 480px)': {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    h3_normal: {
      ...baseStyle,
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 300,
      '@media(max-width: 768px)': {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    h3_bold: {
      ...baseStyle,
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
      '@media(max-width: 768px)': {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    h4_normal: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 300,
    },
    h4_bold: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    subtitle1: {
      ...baseStyle,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 300,
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
      fontWeight: 300,
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
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 300,
      fontFamily: '"Raleway", sans-serif',
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
    inherit: {
      ...baseStyle,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontFamily: 'inherit',
    },
  };
};

export default TextVariants;
