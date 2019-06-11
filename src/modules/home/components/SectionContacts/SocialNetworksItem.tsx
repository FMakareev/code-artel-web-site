import * as React from 'react';
import { ISocialNetworks } from './types';
import { Box } from 'code-artel-ui-lib';
import Image from '../../../../components/Image/Image';

export const SocialNetworksItem: React.FC<ISocialNetworks> = ({ icon, href }: ISocialNetworks) => (
  <Box href={href} as={'a'} maxWidth={'32px'} target={'_blank'}>
    <Image width={'100%'} {...icon} />
  </Box>
);
