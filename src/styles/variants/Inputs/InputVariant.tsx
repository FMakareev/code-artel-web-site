import { IVariantList, ITheme } from '../../interfaces';

let baseStyle: any = {
  font: 'inherit',
  display: 'block',
  fontSize: '16px',
  lineHeight: '24px',
  background: '#FFFFFF',
  border: 'none',
  borderRadius: '2px',
  cursor: 'text',
  outline: 'none',
  fontFamily: '"Raleway", sans-serif',
  margin: '0 0 16px 0',
};

export const InputVariant = (theme: ITheme): IVariantList => {
  baseStyle = {
    ...baseStyle,
    height: theme.space && theme.space[8],
    paddingTop: theme.space && theme.space[3],
    paddingBottom: theme.space && theme.space[3],
    paddingRight: theme.space && theme.space[5],
    paddingLeft: theme.space && theme.space[5],
  };
  return {
    default: {
      ...baseStyle,
      color: theme.colors['black'],
      '::placeholder': {
        color: theme.colors['dark_gray'],
      },
    },
    primary: {
      ...baseStyle,
      color: theme.colors['black'],
    },
    error: {
      ...baseStyle,
      color: theme.colors['pink'],
    },
  };
};

export default InputVariant;
