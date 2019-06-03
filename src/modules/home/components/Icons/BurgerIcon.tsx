import React from 'react';
import styled from 'styled-components';

const HoverIcons = styled.div`
  fill: inherit;
  cursor: pointer;
`;

export const BurgerIcon = () => {
  return (
    <HoverIcons>
      <svg
        width="32"
        height="24"
        viewBox="0 0 24 15"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H24V0H0" fill="inherit" />
        <path d="M0 8H24V7H0" fill="inherit" />
        <path d="M0 15H24V14H0" fill="inherit" />
      </svg>
    </HoverIcons>
  );
};

export default BurgerIcon;
