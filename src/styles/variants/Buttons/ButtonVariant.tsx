import { IVariantList, ITheme } from '../../interfaces';

let baseStyle: any = {
  cursor: 'pointer',
  border: 'none',
  fontFamily: '"Raleway", sans-serif',
  lineHeight: '24px',
};

export const ButtonVariant = (theme: ITheme): IVariantList => {
  baseStyle = {
    ...baseStyle,
    fontSize: theme.space && theme.space[5],
    paddingTop: theme.space && theme.space[3],
    paddingBottom: theme.space && theme.space[3],
    paddingLeft: theme.space && theme.space[7],
    paddingRight: theme.space && theme.space[7],
    transition: theme.transition && theme.transition[0],
  };
  return {
    default: {
      ...baseStyle,
      backgroundColor: theme.colors['pink'],
      color: theme.colors['white'],

      ':hover': {
        ...baseStyle,
        backgroundColor: theme.colors['light_pink'],
      },
      ':active': {
        ...baseStyle,
        backgroundColor: theme.colors['dark_pink'],
      },
    },
    primary: {
      ...baseStyle,
      backgroundColor: theme.colors['pink'],
      color: theme.colors['white'],
      ':hover': {
        ...baseStyle,
        backgroundColor: theme.colors['light_pink'],
      },
      ':active': {
        ...baseStyle,
        backgroundColor: theme.colors['dark_pink'],
      },
      ':disabled': {
        ...baseStyle,
        backgroundColor: theme.colors['dark_gray'],
      },
    },
    link: {
      ...baseStyle,
      ':hover': {
        ...baseStyle,
        color: theme.colors['gray'],
      },
    },
  };
};
