import * as React from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';
import { ISection } from '../../Types';
import StringToReact from '../../../../components/StringToReact/StringToReact';

const variants: any = {
  main: {
    title: {
      variant: 'body1_bold',
      color: 'white',
    },
    description: {
      variant: 'h1_normal',
      color: 'white',
    },
  },
  variant2: {
    title: {
      variant: 'body1_bold',
      color: 'white',
    },
    description: {
      variant: 'h2_normal',
      color: 'white',
    },
  },
  variant3: {
    title: {
      variant: 'body1_bold',
      color: 'darkest_gray',
    },
    description: {
      variant: 'h3_normal',
      color: 'black',
    },
  },
  portfolioInfo: {
    title: {
      variant: 'body1_bold',
      color: 'yellow',
    },
    description: {
      variant: 'h3_bold',
      color: 'black',
    },
  },
  aboutUs: {
    title: {
      variant: 'body1_bold',
      color: 'white',
    },
    description: {
      variant: 'h3_bold',
      color: 'white',
    },
  },
};

export interface ISectionHeaderVariant {
  title: {
    variant: string;
    color: string;
  };
  description: {
    variant: string;
    color: string;
  };
}

export interface ISectionHeaderProps extends ISection {
  children?: any;
  variant?: string;
}

export const SectionHeader = ({ variant, title, description, children }: ISectionHeaderProps) => {
  const variantChosen: ISectionHeaderVariant = variants[variant || 'main'];
  return (
    <Flex flexDirection={'column'}>
      <Text variant={variantChosen.title.variant} color={variantChosen.title.color}>
        {title && <StringToReact content={title} />}
      </Text>
      <Text variant={variantChosen.description.variant} color={variantChosen.description.color}>
        {description && <StringToReact content={description} />}
      </Text>
      {children}
    </Flex>
  );
};

SectionHeader.defaultProps = {
  variant: 'main',
};

export default SectionHeader;
