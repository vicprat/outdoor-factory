import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 50%;
    `;
  }
};

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: none;
  white-space: nowrap;
  transition: 0.5s ease-in-out;
  ${fullWidthStyles}

  &:hover:not(:disabled) {
    color: white;
    background: #464646;
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;
