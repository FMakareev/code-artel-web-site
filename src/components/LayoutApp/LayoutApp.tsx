import * as React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default LayoutApp;
