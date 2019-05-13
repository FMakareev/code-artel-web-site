import React, { Component } from 'react';
import styled from 'styled-components';

/** Components */
import {
  Flex,
  Text,

  // @ts-ignore
  Button,
} from 'code-artel-ui-lib';
// @ts-ignore
import logo_iconSvg from '../icons/logo_icon.svg';

export const HeaderStyled = styled(Flex)`
  id: header;
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
    background-color: #ffffff;
    color: #000;
  }
`;
const text = [
  { name: 'Услуги', href: '#services' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'О компании', href: '#about' },
  { name: 'Контакты', href: '#contacts' },
];

class MenuList extends Component {
  render() {
    return text.map((item: any, index: any) => {
      return (
        <Text
          variant={'body1_normal'}
          key={index}
          marginLeft={'10px'}
          marginRight={'10px'}
          color={'inherit'}>
          <a href={item.href}>
            {item.img}
            {item.name}
          </a>
        </Text>
      );
    });
  }
}

export class Header extends Component {
  state = {
    isScrolled: false,
  };

  toggleBg = () => {
    console.log('toggleBg: ', window.scrollY);
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
      <HeaderStyled className={this.state.isScrolled ? 'active' : ''}>
        <Flex alignItems={'center'}>
          <img src={logo_iconSvg} alt={'logo'} />
          <Text variant={'body1_normal'} margin={'0 16px'} color={'inherit'}>
            <a href={'#main'}>CODE ARTEL</a>
          </Text>
        </Flex>

        <Flex alignItems={'center'}>
          <MenuList />

          <Button marginLeft={'10px'}>
            <a href={'#contacts'}>Оставить заявку</a>
          </Button>
        </Flex>
      </HeaderStyled>
    );
  }
}

export default Header;
