import * as React from 'react';
import styledComponents from 'styled-components';

/** Components */
// @ts-ignore
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import BackgroundColorProperty from '../../styles/styleProperty/BackgroundColorProperty';
// @ts-ignore
import logo_white from '../icons/logo_white.svg';
// @ts-ignore
import logo_gray from '../icons/logo_gray.svg';
// import BurgerIcon from '../Icons/BurgerIcon';
// import CloseBurger from '../Icons/CloseBurger';

export const HeaderStyled = styledComponents(Flex)`
  position: fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 10;
  background-color: transparent;
  color: #fff;

  &.active {
    ${props => BackgroundColorProperty({ ...props, backgroundColor: 'white' })} 
    color: #000;
  }
`;

const text = [
  { name: 'Услуги', href: '#services' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'О компании', href: '#about' },
  { name: 'Контакты', href: '#contacts' },
];

class MenuList extends React.Component {
  render() {
    return text.map((item: any, index: any) => {
      return (
        <Box as={'li'} key={index} mx={4} color={'inherit'}>
          <Button as={'a'} variant={'link'} padding={'0 !important'} href={item.href}>
            {item.name}
          </Button>
        </Box>
      );
    });
  }
}

export class Header extends React.Component {
  state = {
    isScrolled: false,
  };

  toggleBg = () => {
    if (window.scrollY > 80 && !this.state.isScrolled) {
      this.setState(({ isScrolled }) => {
        return {
          isScrolled: !isScrolled,
        };
      });
    } else if (window.scrollY < 80) {
      this.setState({
        isScrolled: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.toggleBg);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleBg);
  }

  render() {
    return (
      <HeaderStyled as={'header'} className={this.state.isScrolled ? 'active' : ''}>
        <Flex alignItems={'center'}>
          <img src={this.state.isScrolled ? logo_gray : logo_white} alt={'logo'} />
          <Text variant={'body1_normal'} mx={5} color={'inherit'}>
            <a href={'#main'}>CODE ARTEL</a>
          </Text>
        </Flex>

        <Flex alignItems={'center'}>
          <Flex as={'nav'}>
            <Flex as={'ul'}>
              <MenuList />
            </Flex>
          </Flex>

          <Button as={'a'} marginLeft={4} href={'#contacts'}>
            Оставить заявку
          </Button>
        </Flex>
      </HeaderStyled>
    );
  }
}

export default Header;
