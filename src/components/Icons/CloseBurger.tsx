import React from 'react';
import styled from 'styled-components';

const HoverIcons = styled.div`
    fill: #201B21;
    cursor: pointer;
    }
`;

export const CloseBurger = () => {
  return (
    <HoverIcons>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.735182 1.10326L17.7057 18.0738L18.494 17.4585L1.52344 0.487915"
          fill="inherit"
        />
        <path
          d="M1.27492 18.1767L18.2455 1.20612L17.4569 0.591205L0.486328 17.5618"
          fill="inherit"
        />
      </svg>
    </HoverIcons>
  );
};

export default CloseBurger;
