import styled from 'styled-components';

export const H1 = styled.h1`
  color: black;
  background-color: orange;
  font-size: xx-large;
`;

type ButtonProps = {
  variant?: 'info' | 'danger';
};

export const Button = styled.button<ButtonProps>`
  padding: 0.5em 1.2em;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  color: white;
  background-color: ${({ variant }) =>
    variant === 'danger' ? '#e74c3c' : '#3498db'};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'danger' ? '#c0392b' : '#217dbb'};
  }
`;
