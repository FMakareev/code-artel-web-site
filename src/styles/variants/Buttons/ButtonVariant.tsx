import { IVariantList, ITheme } from '../../interfaces';

let baseStyle: any = {
  cursor: 'pointer',
  color: '#ffffff',
  border: 'none',
  fontFamily: '"Raleway", sans-serif',
};

export const ButtonVariant = (theme: ITheme): IVariantList => {
  baseStyle = {
    ...baseStyle,
    fontSize: theme.space && theme.space[5],
    px: theme.boxShadow && theme.boxShadow[4],
    py: theme.transition && theme.transition[7],
  };
  return {
    default: {
      ...baseStyle,
      backgroundColor: theme.colors['pink'],
      ':hover': {
        ...baseStyle,
        backgroundColor: theme.colors['light_pink'],
      },
      ':active': {
        ...baseStyle,
        backgroundColor: theme.colors['pink'],
      },
    },
    primary: {
      ...baseStyle,
      backgroundColor: theme.colors['pink'],
      ':hover': {
        ...baseStyle,
        backgroundColor: theme.colors['light_pink'],
      },
      ':active': {
        ...baseStyle,
        backgroundColor: theme.colors['pink'],
      },
      ':disabled': {
        ...baseStyle,
        backgroundColor: theme.colors['dark_gray'],
      },
    },
  };
};
