import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar-HHRR/Navbar';
import Cards from './components/cards/Cards';
import SmallCallendarRRHH from './components/smallCalendarRRHH/SmallCallendarRRHH';


jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: 'success' }))
}));

test('renders Cards without crashing', () => {
  render(<SmallCallendarRRHH />);
});

// test('renders learn react link', () => {
//   render(<Navbar />);
//   const linkElement = screen.getByText(/Home/i);
//   expect(linkElement).toBeInTheDocument();
// });
