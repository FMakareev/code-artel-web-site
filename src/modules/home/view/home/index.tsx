import { hot } from 'react-hot-loader';

import * as React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC<any> = () => (
  <div>
    <Link to={'/contact'}>contacts</Link>
    <br />
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
  </div>
);

export default hot(module)(HomePage);
