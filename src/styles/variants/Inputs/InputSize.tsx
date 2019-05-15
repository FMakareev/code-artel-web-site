import { IVariantSize } from '../../interfaces';

const baseStyle = {
  height: 'auto',
};

export const InputSize = (): IVariantSize => {
  return {
    small: {
      ...baseStyle,
      width: '100%',
      minHeight: '40px',
    },
    medium: {
      ...baseStyle,
      width: '100%',
      minHeight: '40px',
    },
    large: {
      ...baseStyle,
      width: '100%',
      minHeight: '80px',
    },
  };
};

export default InputSize;
