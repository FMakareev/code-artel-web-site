import { IVariantSize } from '../../interfaces';

const baseStyle = {};

export const InputSize = (): IVariantSize => {
  return {
    small: {
      ...baseStyle,
      width: '232px',
    },
    medium: {
      ...baseStyle,
      width: '480px',
    },
    large: {
      ...baseStyle,
    },
  };
};

export default InputSize;
