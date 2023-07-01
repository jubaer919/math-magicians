import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for additional assertions
import Calculator from '../components/Calculator';

test('should display the initial value as 0', () => {
  render(<Calculator />);
  const display = screen.getAllByText('0');
  expect(display[0]).toBeInTheDocument();
});

test('should update the display when a number button is clicked', () => {
  render(<Calculator />);
  const numberButton = screen.getByText('7');
  fireEvent.click(numberButton);
  const display = screen.getAllByText('7');
  expect(display[0]).toBeInTheDocument();
});
