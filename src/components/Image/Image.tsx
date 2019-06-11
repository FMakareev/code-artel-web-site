import * as React from 'react';
import { IImage } from '../../modules/home/Types';
import { Box } from 'code-artel-ui-lib';

export const Image = ({ alt, image, ...rest }: IImage) => (
  <Box as={'img'} alt={alt} src={`http://localhost:1337${image && image.url}`} {...rest} />
);

export default Image;
