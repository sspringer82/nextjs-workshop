import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button />);
    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('OK');
  });

  it('should be clickable', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByTestId('button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should call the back with the provided value', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByTestId('button');
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'Hallo Welt' } });
    fireEvent.click(button);

    expect(handleClick).toBeCalledWith('Hallo Welt');
  });
});
