import * as React from 'react';
import { IImage } from '../../modules/home/Types';
import { Box } from 'code-artel-ui-lib';

// http://localhost:1337
export const Image = ({ alt, image, ...rest }: IImage) => (
  <Box as={'img'} alt={alt} src={`${image && image.url}`} {...rest} />
);

export default Image;
