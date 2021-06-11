import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn conversations table', () => {
  render(<App />);
  const linkElement = screen.getByTitle(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// TODO: write the below tests

// Test if table renders given non-null data

// Test that Edit button in each TR redirects to a new page after making a getAll request 
// for Messages associated with that conversation.
  // Uses something like the below:
  // var node = component
//    .findRenderedDOMComponentWithTag('button')
//    .getDOMNode();
// TestUtils.Simulate.click(node);

// 