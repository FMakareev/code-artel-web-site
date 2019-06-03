import styledComponents from 'styled-components';

/** Components */
import { Flex } from 'code-artel-ui-lib';

interface Props {
  id?: any;
  children?: any;
  backgroundImage?: any;
  color?: any;
  [prop: string]: any;
}

export const Wrapper = styledComponents(Flex)<Props>`
  position: relative;
  justify-content: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto 80px;
`;

export default Wrapper;
