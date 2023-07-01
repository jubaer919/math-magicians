import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

describe('HomePage', () => {
  it('should render two paragraphs with dummy text', () => {
    render(<HomePage />);
    const paragraphs = screen.getAllByText(/Lorem Ipsum/i, { exact: false });
    expect(paragraphs.length).toBe(2);
  });
});
