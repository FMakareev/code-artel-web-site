import React, { Component } from 'react';
import styled from 'styled-components';

/** Components */
import { Flex, Text, Button } from 'code-artel-ui-lib';
import logo from '../icons/logo_icon.svg';

export const HeaderStyled = styled(Flex)`
  id: header;
  position: fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 10;
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

  togglBg = () => {
    console.log('hey');
    if (window.scrollY > 80) {
      this.setState(({ isScrolled }) => {
        return {
          isScrolled: !isScrolled,
        };
      });
    } else {
      this.setState({
        isScrolled: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.togglBg);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.togglBg);
  }

  render() {
    return (
      <HeaderStyled
        color={this.state.isScrolled ? 'black' : 'white'}
        backgroundColor={this.state.isScrolled ? '#ffffff' : ''}>
        <Flex alignItems={'center'}>
          <img src={logo} alt={'logo'} />
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
