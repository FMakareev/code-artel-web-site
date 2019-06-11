import * as React from 'react';
import { ISocialNetworks } from './types';
import { SocialNetworksItem } from './SocialNetworksItem';
import { Box, Flex } from 'code-artel-ui-lib';

interface ISocialNetworksListProps {
  socialNetworks: ISocialNetworks[];
}

export const SocialNetworksList: React.FC<ISocialNetworksListProps> = ({
  socialNetworks,
}: ISocialNetworksListProps) => (
  <Flex mx={-3}>
    {socialNetworks &&
      socialNetworks.map((social: ISocialNetworks, index: number) => (
        <Box m={3}>
          <SocialNetworksItem key={index} {...social} />
        </Box>
      ))}
  </Flex>
);

export default SocialNetworksList;
