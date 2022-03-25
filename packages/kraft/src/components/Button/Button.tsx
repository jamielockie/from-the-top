import React from 'react';
import styled from 'styled-components';


import { Button } from 'from-the-top-core';

const StyledButton = styled(Button)`
  border: 2px solid red;
`;

export const KraftButton: typeof Button = ({
  disabled,
  onClick,
  children,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
