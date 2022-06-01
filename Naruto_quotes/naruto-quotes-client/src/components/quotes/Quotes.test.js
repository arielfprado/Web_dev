import {screen, render, fireEvent} from '@testing-library/react';
import { Quotes } from './Quotes';

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker, and a button', () => {
  render(<Quotes quote={quote} speaker={speaker}/>);

  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(/speaker/);
  const buttonEl = screen.getByRole('button');

  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});

test('callback function called after button clicking', () => {
  const callBack = jest.fn();

  render(<Quotes quote={quote} speaker={speaker} onUpdate={callBack}/>);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  expect(callBack).toHaveBeenCalledTimes(1);
})