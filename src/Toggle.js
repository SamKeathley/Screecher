import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
`;

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;