import * as React from 'react';

// @ts-ignore
import { Flex, Card } from 'code-artel-ui-lib';

export class LayoutAuth extends React.Component<any, any> {
  state: any = {};

  constructor(props: any) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <Flex
        backgroundColor={'lightGray'}
        justifyContent={'center'}
        minHeight={'100vh'}
        alignItems={'center'}>
        <Card backgroundColor={'white'} maxWidth={'300px'} width={'100%'}>
          {children}
        </Card>
      </Flex>
    );
  }
}

export default LayoutAuth;
