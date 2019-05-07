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
};

export const InputVariant = (theme: ITheme): IVariantList => {
  baseStyle = {
    ...baseStyle,
    height: theme.space && theme.space[8],
    paddingTop: theme.space && theme.space[4],
    paddingBottom: theme.space && theme.space[4],
    paddingRight: theme.space && theme.space[5],
    paddingLeft: theme.space && theme.space[5],
  };
  return {
    primary: {
      ...baseStyle,
      color: theme.colors['black'],
      '::placeholder': {
        color: theme.colors['dark_gray'],
      },
    },
    error: {
      ...baseStyle,
      color: theme.colors['pink'],
    },
  };
};

export default InputVariant;
