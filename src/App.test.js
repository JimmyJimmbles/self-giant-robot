import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo', () => {
  render(<App />);
  const welcomeHeading = screen.getByText(/Welcome/i);
  const welcomeParagraph = screen.getByText(
    /Please tell us a bit about yourself to get started./i
  );
  expect(welcomeHeading && welcomeParagraph).toBeInTheDocument();
});
