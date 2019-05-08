import React, { Component } from 'react';
import styled from 'styled-components';

/** Components */
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import logo_white from '../icons/logo_white.svg';
import logo_gray from '../icons/logo_gray.svg';

export const HeaderStyled = styled(Flex)`
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
        <Box as={'li'} key={index} marginLeft={'10px'} marginRight={'10px'} color={'inherit'}>
          <Button as={'a'} variant={'link'} padding={'0 !important'} href={item.href}>
            {item.img}
            {item.name}
          </Button>
        </Box>
      );
    });
  }
}

export class Header extends Component {
  state = {
    isScrolled: false,
  };

  toggleBg = () => {
    console.log('hey');
    if (window.scrollY > 80) {
      this.setState(({ isScrolled }) => {
        return {
          isScrolled: true,
        };
      });
    } else {
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
      <header>
        <HeaderStyled
          color={this.state.isScrolled ? 'black' : 'white'}
          backgroundColor={this.state.isScrolled ? '#ffffff' : ''}>
          <Flex alignItems={'center'}>
            <img src={this.state.isScrolled ? logo_gray : logo_white} alt={'logo'} />
            <Text variant={'body1_normal'} margin={'0 16px'} color={'inherit'}>
              <a href={'#main'}>CODE ARTEL</a>
            </Text>
          </Flex>

          <Flex alignItems={'center'}>
            <Flex as={'nav'}>
              <Flex as={'ul'}>
                <MenuList />
              </Flex>
            </Flex>

            <Button as={'a'} marginLeft={'10px'} href={'#contacts'}>
              Оставить заявку
            </Button>
          </Flex>
        </HeaderStyled>
      </header>
    );
  }
}

export default Header;
