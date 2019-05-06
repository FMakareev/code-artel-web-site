import * as React from 'react';

export class LayoutApp extends React.Component<any, any> {
  state: any = {};

  constructor(props: any) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {};
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default LayoutApp;
