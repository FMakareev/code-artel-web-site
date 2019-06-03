import * as React from 'react';
import styledComponents from 'styled-components';
import Scrollchor from 'react-scrollchor';

/** Components */
// @ts-ignore
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import BackgroundColorProperty from '../../styles/styleProperty/BackgroundColorProperty';
// @ts-ignore
import logo_white from '../../modules/home/components/Icons/logo_white.svg';
// @ts-ignore
import logo_gray from '../../modules/home/components/Icons/logo_gray.svg';
import BurgerIcon from '../../modules/home/components/Icons/BurgerIcon';
import CloseBurger from '../../modules/home/components/Icons/CloseBurger';

// @ts-ignore
export const HeaderStyled = styledComponents(Flex)`
  position: fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.25%;
  z-index: 10;
  background-color: transparent;
  color: #fff;
  fill: #fff;

  &.active {
    ${props => BackgroundColorProperty({ ...props, backgroundColor: 'white' })} 
    color: #000;
    fill: #1C1C1C;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const HeaderWrapper = styledComponents(Flex)`
    background-color: transparent;
    z-index: 100;
    position: fixed;
    width: 100%;
    &.active {
    ${props => BackgroundColorProperty({ ...props, backgroundColor: 'white' })} 
    color: #000;
  }
`;

export const NavListWrapper = styledComponents(Flex)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: none;
  align-items: center;
  flex-direction: column;
  
  @media(min-width: 992px){
    position: static;
    background-color: transparent;
    display: flex;
    width: auto;
    flex-wrap: nowrap;
  }

  &.open{
    display: flex;
    color: #000;
  }
`;

export const NavItem = styledComponents(Flex)`
    width: 100%;
    as: ul;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    @media(max-width: 860px) {
      flex-direction: column;
      text-align: center;
    }
`;

const menuListItem = [
  { name: 'Услуги', href: '#services' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'О компании', href: '#about' },
  { name: 'Контакты', href: '#contacts' },
];

interface NavListProps {
  menuListItem: any[];
  onClick: any;
}

class NavList extends React.Component<NavListProps> {
  render() {
    const { menuListItem, onClick } = this.props;
    return (
      <Flex
        width={'100%'}
        as={'ul'}
        flexDirection={['column', 'column', 'row']}
        justifyContent={'space-around'}
        textAlign={['center', 'center', '']}
        alignItems={'center'}>
        {menuListItem.map((item: any, index: number) => {
          return (
            <Text
              onClick={onClick}
              variant={'body1_normal'}
              color={'inherit'}
              as={'li'}
              key={index}
              mx={4}
              my={[5, 5, 0]}>
              <Scrollchor to={item.href}> {item.name} </Scrollchor>
            </Text>
          );
        })}
        <Button marginLeft={4} my={[4, 4, 0]} height={'40px'} onClick={onClick}>
          <Scrollchor to={'#contacts'}> Оставить заявку </Scrollchor>
        </Button>
      </Flex>
    );
  }
}

export class Header extends React.Component {
  state = {
    isScrolled: false,
    isOpen: false,
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

  toggleBurger = (isOpen: any) => (isOpen ? <CloseBurger /> : <BurgerIcon />);

  toggleNav = (isOpen: boolean) => {
    this.setState(() => {
      return {
        isOpen,
      };
    });
  };

  handleClickForButtonBurger = () => {
    this.toggleNav(!this.state.isOpen);
  };

  render() {
    return (
      <HeaderWrapper onClick={this.handleClickForButtonBurger}>
        <HeaderStyled as={'header'} className={this.state.isScrolled ? 'active' : ''}>
          <Scrollchor to={'main'}>
            <Flex alignItems={'center'}>
              <img src={this.state.isScrolled ? logo_gray : logo_white} alt={'logo'} />
              <Text variant={'body1_normal'} mx={5} color={'inherit'}>
                CODE ARTEL
              </Text>
            </Flex>
          </Scrollchor>

          <NavListWrapper
            className={`${this.state.isOpen ? 'open' : ''} NavListWrapper`}
            as={'nav'}>
            <NavList menuListItem={menuListItem} onClick={() => this.toggleNav(false)} />
          </NavListWrapper>

          <Box
            py={5}
            px={5}
            onClick={this.handleClickForButtonBurger}
            zIndex={'100'}
            display={['block', 'block', 'none']}>
            {this.toggleBurger(this.state.isOpen)}
          </Box>
        </HeaderStyled>
      </HeaderWrapper>
    );
  }
}

export default Header;
