import { IVariantSize } from '../../interfaces';

const baseStyle = {
  height: '40px',
};

export const InputSize = (): IVariantSize => {
  return {
    small: {
      ...baseStyle,
      width: '232px',
      height: '40px',
    },
    medium: {
      ...baseStyle,
      width: '480px',
      height: '40px',
    },
    large: {
      ...baseStyle,
      width: '480px',
      height: '80px',
    },
  };
};

export default InputSize;
